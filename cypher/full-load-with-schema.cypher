CREATE CONSTRAINT IF NOT EXISTS FOR (n:Card)         REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Card)         ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Category)     REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Category)     ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Headquarters) REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Headquarters) ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Industry)     REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Industry)     ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Language)     REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Language)     ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:License)      REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:License)      ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Org)          REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Org)          ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Path)         REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Path)         ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Project)      REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Project)      ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Relation)     REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Relation)     ON      n.name;

CREATE CONSTRAINT IF NOT EXISTS FOR (n:Repo)         REQUIRE n.name IS UNIQUE;
CREATE INDEX      IF NOT EXISTS FOR (n:Repo)         ON      n.name;

//
// load data from current values
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
MERGE (c)-[:USES_LICENSE]->(ossl)

MERGE(hq:Headquarters { name: value.headquarters })
MERGE(c)-[:BASED_IN]->(hq)

// sandbox | incubating | graduated
MERGE(r:Relation { name: value.relation })
MERGE(c)-[:IS_PROJECT_LEVEL]->(r)

MERGE(org:Organization { name: value.organization })
MERGE(c)-[:IN_ORGANIZATION]->(org)

MERGE(p:Path {name: value.path})
MERGE(c)-[:IN_PATH]->(p)

MERGE(cat:Category {name: value.category})
MERGE(c)-[:IN_CATEGORY]->(cat)


// wierd cypher foreach trick to conditionally merge based on node property value
// alternative is a subsequent MATCH + WHERE - opting for a single pass.
// false || bronze/silver/gold/platinum
FOREACH(ignoreMe IN CASE WHEN value.member THEN [1] ELSE [] END | 
    MERGE(m:Member {name: value.member})
    MERGE(c)-[:HAS_MEMBERSHIP]->(m)
)

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