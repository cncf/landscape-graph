CREATE CONSTRAINT IF NOT EXISTS FOR (n:Card) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Category) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Headquarters) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Industry) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Language) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:License) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Org) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Path) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Project) REQUIRE n.name IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Relation) REQUIRE n.relation IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (n:Repo) REQUIRE n.name IS UNIQUE;

CREATE INDEX IF NOT EXISTS FOR (n:Card) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Card) ON (n.license);
CREATE INDEX IF NOT EXISTS FOR (n:Card) ON (n.member);
CREATE INDEX IF NOT EXISTS FOR (n:Category) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Headquarters) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Industry) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Language) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:License) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Org) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Path) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Project) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Relation) ON (n.name);
CREATE INDEX IF NOT EXISTS FOR (n:Repo) ON (n.name);

// 


// load the json, which is a simple array, one entry per card.  
// "YIELD" is the iterator pattern.
CALL apoc.load.json("file:///landscape-items-clean.json")
YIELD value

// //WITH apoc.map.clean(value, [], [""]) as cleanedItems
// WITH $keysToKeepInCards + $keysBecomingNodes as keysToKeep 
// WITH apoc.map.fromLists($keysToKeep, apoc.map.values(value, $keysToKeep)) as allTheCards
// RETURN allTheCards

MERGE (c:Card {name: value.name})
SET c += value { 
    .bestPracticeBadgeId, 
    .bestPracticePercentage, 
    .commitsThisYear, 
    .contributorsCount, 
    .crunchbase, 
    .description, 
    .homepage_url, 
    .isSubsidiaryProject, 
    .logo,
    .oss,
    .repo_url, 
    .stars, 
    .twitter,
    .license,
    .member
}  
WITH c, value

MERGE(org:Organization { name: value.organization })
MERGE(c)-[:IN_ORGANIZATION]->(org)

MERGE(p:Path {name: value.path})
MERGE(c)-[:IN_PATH]->(p)

MERGE(cat:Category {name: value.category})
MERGE(c)-[:IN_CATEGORY]->(cat)

MERGE(hq:Headquarters { name: value.headquarters })
MERGE(c)-[:BASED_IN]->(hq)

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

;

MATCH(card:Card)
WHERE card.license IS NOT NULL
MERGE(proj:Project {name: card.name})
MERGE(ossl:License { name: card.license })
MERGE (c)-[:IS_PROJECT]->(proj)
MERGE (p)-[:HAS_LICENSE]->(ossl)

;

MATCH(c:Card)
WHERE c.member IS NOT NULL
MERGE(m:Membership {name: c.member})
MERGE(c)-[:IS_MEMBERTYPE]->(m)

return count(*)


////////////////////////////////

// these become properties to keep in Card nodes.
// :param keysToKeepInCards => ['bestPracticeBadgeId',
//                              'bestPracticePercentage',
//                              'commitsThisYear',
//                              'contributorsCount',
//                              'crunchbase',
//                              'description',
//                              'homepage_url',
//                              'isSubsidiaryProject',
//                              'logo',
//                              'oss',
//                              'repo_url',
//                              'stars',
//                              'twitter'];

// :param keysBecomingNodes => ['organization',
//                              'path',
//                              'category',
//                              'headquarters',
//                              'license',
//                              'member']
// CALL apoc.load.json("file:///landscape-items-clean.json")
// YIELD value
// WITH ["bestPracticeBadgeId",
//       "bestPracticePercentage",
//       "commitsThisYear",
//       "contributorsCount",
//       "crunchbase",
//       "description",
//       "homepage_url",
//       "isSubsidiaryProject",
//       "logo",
//       "oss",
//       "repo_url",
//       "stars",
//       "twitter"] as keysToKeepInCards, 
//      ["organization",
//       "path",
//       "category",
//       "headquarters",
//       "license",
//       "member"] as keysBecomingNodes, value
// call apoc.merge.node("Card", {name :coalesce(value.name), apoc.create.uuid())},       
// WITH apoc.map.clean(keysToKeepInCards + keysBecomingNodes, [], [""]) as keysToKeep, value
// WITH apoc.map.fromLists(keysToKeep, apoc.map.values(value, keysToKeep)) as allTheCards
// RETURN allTheCards

