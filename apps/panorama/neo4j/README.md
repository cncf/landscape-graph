### Neo4j

You need a Neo4j instance, e.g. a [Neo4j Sandbox](http://neo4j.com/sandbox), a local instance via [Neo4j Desktop](https://neo4j.com/download), [Docker](http://hub.docker.com/_/neo4j) or a [Neo4j instance on AWS, Azure or GCP](http://neo4j.com/developer/guide-cloud-deployment) or [Neo4j Cloud](http://neo4j.com/cloud)

For schemas using the `@cypher` directive (as in this repo) via [`@neo4j/graphql`](https://neo4j.com/docs/graphql-manual/current/type-definitions/cypher/), you need to have the [APOC library](https://github.com/neo4j-contrib/neo4j-apoc-procedures) installed, which should be automatic in Sandbox, Cloud and is a single click install in Neo4j Desktop. If when using the Sandbox / cloud you encounter an issue where an error similar to `Can not be converted to long: org.neo4j.kernel.impl.core.NodeProxy, Location: [object Object], Path: users` appears in the console when running the React app, try installing and using Neo4j locally instead.

#### Sandbox setup

A good tutorial can be found here: https://www.youtube.com/watch?v=rPC71lUhK_I

#### Local setup

1. [Download Neo4j Desktop](https://neo4j.com/download/)
2. Install and open Neo4j Desktop.
3. Create a new DB by clicking "New Graph", and clicking "create local graph".
4. Set password to "letmein" (as suggested by `api/.env`), and click "Create".
5. Make sure that the default credentials in `api/.env` are used. Leave them as follows: `NEO4J_URI=bolt://localhost:7687 NEO4J_USER=neo4j NEO4J_PASSWORD=letmein`
6. Click "Manage".
7. Click "Plugins".
8. Find "APOC" and click "Install".
9. Click the "play" button at the top of left the screen, which should start the server. _(screenshot 2)_
10. Wait until it says "RUNNING".
11. Proceed forward with the rest of the tutorial.
