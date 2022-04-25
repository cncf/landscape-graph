# Graph Data Model

## Core Data Model

![core-png](core/generated/landscape-graph-core.png)

### Entities

ctx->allTheThings.ToMarkdown();

## Sub-Graph Packs (SGP)




### Types of Packs



* blogs
* boards
* core
* corp
* email
* packages
* rtc
* social
* threats
* videos




Each pack will have the following:

* GraphQL Schema, deriving from the base type.
* png, svg, .json (arrows.app :))
* Description / Documentation covering entities

```shell
.
├── blogs
│   └── sgp-blogcncf
├── boards
│   ├── sgp-ghdiscuss
│   └── sgp-stackoverflow
├── core
│   └── generated
├── corp
│   ├── sgp-crunchbase
│   └── sgp-yahoofinance
├── email
├── packages
│   ├── sgp-brew
│   ├── sgp-choco
│   ├── sgp-crate
│   ├── sgp-deb
│   ├── sgp-deno
│   ├── sgp-go
│   ├── sgp-maven
│   ├── sgp-npm
│   ├── sgp-pip
│   └── sgp-rpm
├── rtc
│   ├── sgp-discord
│   └── sgp-slack
├── social
│   ├── sgp-linkedin
│   └── sgp-twitter
├── threats
│   └── sgp-nist
└── videos
    └── sgp-youtube

```

## How GraphQL Interfaces Work

https://neo4j.com/docs/graphql-manual/current/type-definitions/interfaces/#_directive_inheritance

> Any directives present on an interface or its fields will be "inherited" by any object types implementing it. For example, the type definitions above could be refactored to have the @relationship directive on the actors field in the Production interface instead of on each implementing type as it is currently:

```graphql
interface Production {
    title: String!
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN, properties: "ActedIn")
}

type Movie implements Production {
    title: String!
    actors: [Actor!]!
    runtime: Int!
}

type Series implements Production {
    title: String!
    actors: [Actor!]!
    episodes: Int!
}

interface ActedIn @relationshipProperties {
    role: String!
}

type Actor {
    name: String!
    actedIn: [Production!]! @relationship(type: "ACTED_IN", direction: OUT, properties: "ActedIn")
}
```

<https://neo4j.com/docs/graphql-manual/current/type-definitions/interfaces/#_overriding>

> In addition to inheritance, directives can be overridden on a per-implementation basis. Say you had an interface defining some Content, with some basic authorization rules:

```graphql
interface Content
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], allow: { author: { username: "$jwt.sub" } } }]) {
    title: String!
    author: [Author!]! @relationship(type: "HAS_CONTENT", direction: IN)
}

type User {
    username: String!
    content: [Content!]! @relationship(type: "HAS_CONTENT", direction: OUT)
}

type PublicContent implements Content {
    title: String!
    author: [Author!]!
}

type PrivateContent implements Content
    @auth(rules: [{ operations: [CREATE, READ, UPDATE, DELETE], allow: { author: { username: "$jwt.sub" } } }]) {
    title: String!
    author: [Author!]!
}
```
