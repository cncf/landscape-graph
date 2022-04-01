//load.json(landscape.cncf.io) items.json
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

MERGE(hq:Headquarters { name: value.headquarters })
    MERGE(c)-[:HAS_HEADQUARTERS]->(hq)

// sandbox | incubating | graduated
MERGE(r:Relation { name: value.relation })
    MERGE(c)-[:HAS_RELATION]->(r)

MERGE(org:Organization { name: value.organization })
    MERGE(c)-[:IN_ORGANIZATION]->(org)

MERGE(p:Path {name: value.path})
    MERGE(c)-[:IN_PATH]->(p)

MERGE(cat:Category {name: value.category})
    MERGE(c)-[:IN_CATEGORY]->(cat)

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