// CLI 
// https://github.com/75lb/command-line-args
// https://github.com/75lb/command-line-usage

const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')

const { exit } = require('process')
const fs = require('fs')
const util = require('util')

const { gql, ApolloServer } = require("apollo-server");
const {  
  ApolloServerPluginInlineTrace, 
  ApolloServerPluginLandingPageLocalDefault
} = require("apollo-server-core")

const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
const path = require('path');
require("dotenv").config();

const optionDefinitions = [
  { 
    name: 'help',    alias: 'h', type: Boolean, 
    description: 'Display this usage guide.'
  },
  { 
    name: 'verbose', alias: 'v', type: Boolean, 
    description: 'Enable verbose output' 
  },
  { 
    name: 'sdl',     alias: 's', type: String, defaultOption: true,
    description: 'SDL (entities) input file', typeLabel: '<file>'
  },
  {
    name: 'out',     alias: 'o', type: String,
    description: 'executable schema --> output file', typelabel: '<file>'
  },
  {
    name: 'gserve',  alias: 'g', type: Boolean,
    description: 'Launch Apollo Server endpoint (documentation, query builder, etc)'
  }
]

const options = commandLineArgs(optionDefinitions)

if (options.help) {
  const usage = commandLineUsage([
    {
      header: 'generate-executable-schema',
      content: 'SDL entities --> GraphQL \"executable schema\" for neo4j-graphql'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    },
    {
      content: 'Project home: {underline https://github.com/cncf/landscape-graph}'
    }
  ])
  console.log(usage)
} else {
  if(options.verbose) {
    console.log('CLI args: ' + options)
  }
}


if(!fs.existsSync(options.sdl)) {
  console.log('ERROR: '+ options.sdl + ' does not exist');
  process.exit(2);
}

// yes, there's a potential race here...
//var thePath = String(options.sdl);
var typeDefs = String(fs.readFileSync(options.sdl, { encoding: "utf-8"}));

if(options.verbose) {
  console.log('GraphQL (SDL) type definitions');
  console.log('------------------------------');
  console.log(typeDefs)
}

//Connect to Neo4j (creds and uri in .env file)
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
neoSchema.getSchema().then((schema) => {
    
    if(options.verbose) {
      console.log('GraphQL executable schema');
      console.log('-------------------------');    
      console.log(schema);
    }

    if(options.out) {
      var outputFile = String(options.out);
      var fullSchemaText = util.inspect(schema);
      
      fs.writeFileSync(outputFile, fullSchemaText);
    }
    
    const server = new ApolloServer({
        schema: schema,
        plugins: [
          ApolloServerPluginInlineTrace(),
          ApolloServerPluginLandingPageLocalDefault({ footer: true, embed: true })
          //ApolloServerPluginLandingPageGraphQLPlayground 
        ]
    });

    if(options.gserve) {
        server.listen().then(({ url }) => {
          console.log(`GraphQL server ready on ${url}`);
        });
    }
});