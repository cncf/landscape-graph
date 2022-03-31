# CNCF Landscape Graph

_construction zone_ :construction:

While we remodel the facilities, join us in extending a big thanks to GitHub OCTO :)

https://flatgithub.com/cncf/landscape-graph/blob/main/landscape-items.json

## Neo4J Graph Database

What is Cypher?

https://github.com/opencypher/openCypher

> Cypher is a declarative graph query language that allows for expressive and efficient querying, updating and administering of the graph. It is designed to be suitable for both developers and operations professionals. Cypher is designed to be simple, yet powerful; highly complicated database queries can be easily expressed, enabling you to focus on your domain, instead of getting lost in database access.

> Cypher is inspired by a number of different approaches and builds on established practices for expressive querying. Many of the keywords, such as WHERE and ORDER BY, are inspired by SQL. Pattern matching borrows expression approaches from SPARQL. Some of the list semantics are borrowed from languages such as Haskell and Python. Cypher’s constructs, based on English prose and neat iconography, make queries easy, both to write and to read.

### Constraints

```
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Card) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Category) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Headquarters) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Industry) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Language) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:License) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Organization) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Path) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Project) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Relation) REQUIRE n.relation IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Repo) REQUIRE n.name IS UNIQUE;
```

### Load Landscape Data

```
//
// APOC - Awesome Procedures on Cypher - https://neo4j.com/labs/apoc
//
// MERGE - Create, or match an existing node
//       - Graph Database variant of https://www.sqlite.org/lang_upsert.html
//

CALL apoc.load.json("https://landscape.cncf.io/data/items.json") YIELD value
MERGE (c:Card {name: value.name})
ON CREATE SET
   c += value { 
      .bestPracticeBadgeId, 
      .bestPracticePercentage, 
      .commitsThisYear, 
      .contributorsCount, 
      .crunchbase, 
      .description, 
      .homepage_url, 
      .isSubsidiaryProject, 
      .logo,
      .member, 
      .name,      // i
      .oss,       // i
      .repo_url, 
      .stars, 
      .twitter
   }   
WITH c, value

MERGE(ossl:License { name: value.license })
   MERGE (c)-[:HAS_LICENSE]->(ossl)

MERGE(hq:HeadquarterS { name: value.headquarters })
    MERGE(c)-[:HAS_HEADQUARTERS]->(hq)

// sandbox | incubating | graduated
MERGE(r:Relation { name: value.relation })
    MERGE(c)-[:HAS_RELATION]->(r)

MERGE(org:Organization { name: value.organization })
    MERGE(c)-[:IN_ORGANIZATION]->(org)

MERGE(p:Path {name: value.path})
    MERGE(c)-[:IN_PATH]->(p)

MERGE(cat:Category {name: value.category})
    MERGE(c)-[:IN_CATEGORY]->(c)

// false || bronze/silver/gold/platinum
MERGE(m:Member {name: value.member})
    MERGE(c)-[:HAS_MEMBERSHIP]->(m)

//
// deal with embedded arrays
//
WITH c, value
UNWIND value.industries as industry
   MERGE (i:Industry {name: industry})
   MERGE (c)-[:IN_INDUSTRY]->(i)

WITH c, value
UNWIND value.github_data.languages as language
   MERGE (l:Language {name: language.name})
   MERGE (c)-[:USES_LANGUAGE]->(l)

WITH c, value
UNWIND value.repos as repo
   MERGE (r:Repo {url: repo.url}) // TODO: should parse out an org/repo id for this
   MERGE (c)-[:OWNS_REPO]->(r)

return count(*)
```

## License

This repository contains data received from Crunchbase. This data is not licensed pursuant to the Apache License. It is subject to Crunchbase’s Data Access Terms, available at https://data.crunchbase.com/docs/terms, and is only permitted to be used with Linux Foundation landscape projects.

Everything else is under the Apache License, Version 2.0, except for project and product logos, which are generally copyrighted by the company that created them, and are simply cached here for reliability. 