# Understanding project activity

_gharchive events -> Apache Arrow Dataset, 2015 - present, time-partitioned (yyyy / mm / dd / .parquet)_
<!-- TOC -->

- [Understanding project activity](#understanding-project-activity)
    - [How does it work?](#how-does-it-work)
        - [Where do the archives come from, how are they created?  Who does this?](#where-do-the-archives-come-from-how-are-they-created--who-does-this)
        - [How gharchive.org records are processed](#how-gharchiveorg-records-are-processed)
    - [How are the records stored ...in a more useful way?](#how-are-the-records-stored-in-a-more-useful-way)
    - [Aggregation, Analysis, Storing, and Reporting](#aggregation-analysis-storing-and-reporting)
        - [How we connect to database postgres using Arrow's ADBC](#how-we-connect-to-database-postgres-using-arrows-adbc)

<!-- /TOC -->
Process archives (all github), filtering based on inputs.


<!-- TOC tocDepth:2..3 chapterDepth:2..6 -->

- [Places to start (aka "data that's available now")](#places-to-start-aka-data-thats-available-now)
  - [From the API](#from-the-api)
  - [Regarding the main part of this PR, processing the archive](#regarding-the-main-part-of-this-pr-processing-the-archive)
- [How does it work?](#how-does-it-work)
  - [Where do the archives come from, how are they created?  Who does this?](#where-do-the-archives-come-from-how-are-they-created-who-does-this)
  - [How gharchive.org records are processed](#how-gharchiveorg-records-are-processed)
- [How are the records stored (...in a more useful way)?](#how-are-the-records-stored-in-a-more-useful-way)
  - [The bulk of the processing occurs (notebooks/osrb/gha-osrb.py)](#the-bulk-of-the-processing-occurs-notebooksosrbgha-osrbpy)
- [Aggregation, Analysis, Storing, and Reporting](#aggregation-analysis-storing-and-reporting)
  - [Apache Arrow (.feather) files --> Postgres Database](#apache-arrow-feather-files----postgres-database)
  - [Jupyter Notebooks used for initial dataset summary and validation](#jupyter-notebooks-used-for-initial-dataset-summary-and-validation)
  [GraphQL Endpoint(s)](#graphql-endpoints)
- [Further learning resources for concepts employed](#further-learning-resources-for-concepts-employed)
  - [Apache Arrow](#apache-arrow)
  - [Column vs. Row Storage](#column-vs-row-storage)
  - [On Timetrees](#on-timetrees)
- [Notes from the PR](#notes-from-the-pr)
  - [How we connect to database (postgres) using Arrow's ADBC](#how-we-connect-to-database-postgres-using-arrows-adbc)
  - [The size of the osrb dataset](#the-size-of-the-osrb-dataset)

<!-- /TOC -->

## How does it work?

All cores (greedy) are leveraged using Python's multiprocessing module to parse the hourly files in parallel using as many cores as are available. As this is primarily a compute bound operation, this is appropriate.

### Where do the archives come from, how are they created?  Who does this?

Each archive is a compressed JSON Lines file of event records from GitHub's Events API. These event records exist unchanged as the API reported them when the gharchive.org project created the archives.  This is done by a small bit of Ruby code, which is run by Google and shared via a public Google Cloud Storage (GCS) bucket, analogous to ACI Object Storage or Amazon S3, as well as made available via Google BigQuery (at a cost) or available via HTTP at [gharchive.org](https://www.gharchive.org).


 _[igrigorik/gharchive.org/.../crawler/crawler.rb#L79](https://github.com/igrigorik/gharchive.org/blob/e312036fa36f7e27aa4f38229ec6c611cff7158a/crawler/crawler.rb#L79)_

```ruby
  process = Proc.new do
      req = HttpRequest.new("https://api.github.com/events?per_page=#{PAGE_LIMIT}", {
        :inactivity_timeout => 5,
        :connect_timeout => 5
      }).get({
      :head => {
        'user-agent' => 'gharchive.org',
        'Authorization' => 'token ' + ENV['GITHUB_TOKEN']
      }
    })

    req.callback do
      begin
        latest = Yajl::Parser.parse(req.response)
        urls = latest.collect(&@latest_key)
        new_events = latest.reject {|e| @latest.include? @latest_key.call(e)}

        @latest = urls
        new_events.sort_by {|e| [Time.parse(e['created_at']), e['id']] }.each do |event|
          timestamp = Time.parse(event['created_at']).strftime('%Y-%m-%d-%-k')
          archive = "data/#{timestamp}.json"

          if @file.nil? || (archive != @file.to_path)
            if !@file.nil?
              @log.info "Rotating archive. Current: #{@file.to_path}, New: #{archive}"
              @file.close
            end

            @file = File.new(archive, "a+")
          end

          @file.puts(Yajl::Encoder.encode(Obfuscate.email(event)))
        end
```

The `@file.puts()` call uses the following to obfuscate the email contained in the record. It does not alter the Actor (GitHub identity) associated with the record. 

_[igrigorik/gharchive.org/.../crawler/obfuscate.rb](https://github.com/igrigorik/gharchive.org/blob/master/crawler/obfuscate.rb)_

```ruby
module Obfuscate
    def self.email ( h )
        if h.is_a? Hash
            if h['email'] && !h['email'].empty?
                email = h.delete('email')
                name, host = email.split("@")
                h['email'] = [Digest::SHA1.hexdigest(name), host].compact.join("@")
            end

            h.each_value do |v|
                self.email(v) if v.is_a? Hash
                v.each {|e| self.email(e)} if v.is_a? Array
            end
        end
    end
end
```

Since emails are already obfuscated, by itself these records don't contain emails, only the obfuscated hashed identifiers.

### How gharchive.org records are processed

 Each record is processed with `ijson`, a streaming JSON parser [github](https://github.com/ICRAR/ijson), [pypi](https://pypi.org/project/ijson/). It's akin to a "SAX" parser (vs. DOM) for XML parsers.  Each record has as its first fields (from the beginning of the file) the Actor, Repo, Org, and is followed by a larger set of nested objects. A typical (non-streaming) JSON processor would parse the entire record to python objects before it's possible to determine the Event's type and repository.  By using [iljson](https://github.com/ICRAR/ijson) we quickly determine event type (1 of 20) and repository.

## How are the records stored (...in a more useful way)?

Each event is quickly sorted, and optionally filtered, using the org list as input. Since there are 20 event types with deeply nested embedded objects, normalizing them into a uniform union set (wide table) has over 9000 columns, and is unworkable.  Instead, event types are written to a file, and the arrow schemas don't have the geometric combinatorial expansion of cardinality (columns).

The files are reified into a directory based time index.  This allows the use of  Apache Arrow's Dataset API for larger than memory / time-segmented datasets, yielding a plethora of benefits that enable processing the volumes of data on a laptop. Here's a few links describing the concept and the Datasets API provided by Apache Arrow.

---

## Aggregation, Analysis, Storing, and Reporting

### How we connect to database (postgres) using Arrow's ADBC

leveraging Arrow's database connectivity (not Apache Flight or FlightSQL) for the bulk inject --> postgres.

For now using the postgres wire protocol. Ultimately the better choice is to leverage the PG extension that provides a Flight Endpoint...which would allow data transfer on the wire in Arrow format over gRPC. ACI Postgres instances at the moment don't have this extension, and it's still new, while the PG wire protocol...is not.

- https://arrow.apache.org/adbc/0.3.0/python/quickstart.html#ingesting-bulk-data
- https://arrow.apache.org/adbc/0.5.1/python/recipe/postgresql.html

As a fallback / plan B (should ADBC prove problematic) is to load from .feather --> pandas (or dask...but pandas is fine as each individual file is quite small) --> sqlalchemy --> postgres. This however has a lot more moving parts, and is orders of magnitude slower.
