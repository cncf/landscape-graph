//
// landgraph.js : Generate executable schema from GraphQL type definitions
//                Optionally serve GraphQL endpoint and local UI
//

function handlesig(signal) {
  console.log(`*^!@4=> Received event: ${signal}`)
}
process.on('SIGHUP', handlesig)

const { exit } = require('process')
const fs = require('fs')
const util = require('util')

// prepended to all --sdl or --out params if called via landgraph.sh
const BASE_SDL_PATH = process.env.LANDGRAPH_CLI_INVOKE_LOC || ''
console.log("BASE_SDL_PATH: " + BASE_SDL_PATH)

// https://github.com/75lb/command-line-args
// https://github.com/75lb/command-line-usage
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')

// [Legend of the] Red Dragon (LORD)
const wales = '\u001b[49m\n\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄▄▄\u001b[48;5;181m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄▄▄\u001b[38;5;188m▄\u001b[38;5;125m▄\u001b[48;5;138m\u001b[38;5;161m▄\u001b[48;5;181m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄\u001b[38;5;95m▄\u001b[38;5;139m▄\u001b[48;5;145m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;145m▄\u001b[38;5;231m▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;231m▄\u001b[38;5;145m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;89m▄\u001b[48;5;59m\u001b[38;5;131m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;131m▄\u001b[38;5;231m▄▄▄▄▄▄\u001b[38;5;188m▄\u001b[38;5;161m▄\u001b[48;5;125m▄▄\u001b[48;5;161m▄▄\u001b[48;5;145m\u001b[38;5;125m▄\u001b[48;5;231m▄\u001b[48;5;145m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[48;5;145m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄▄\u001b[38;5;161m▄\u001b[38;5;231m▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;181m\u001b[38;5;188m▄\u001b[38;5;181m▄\u001b[48;5;145m\u001b[38;5;145m▄\u001b[48;5;132m\u001b[38;5;89m▄\u001b[48;5;131m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[38;5;161m▄▄▄\u001b[48;5;188m\u001b[38;5;125m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄\u001b[38;5;161m▄\u001b[48;5;132m▄\u001b[48;5;161m▄▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;125m▄▄▄▄\u001b[48;5;188m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄\u001b[38;5;145m▄\u001b[38;5;231m▄\u001b[48;5;138m▄\u001b[48;5;231m\u001b[38;5;138m▄\u001b[38;5;188m▄\u001b[38;5;231m▄▄\u001b[48;5;131m\u001b[38;5;188m▄\u001b[38;5;231m▄\u001b[48;5;231m\u001b[38;5;145m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;89m▄\u001b[48;5;161m▄▄\u001b[48;5;181m▄\u001b[48;5;231m\u001b[38;5;145m▄\u001b[38;5;231m▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄▄▄\u001b[48;5;131m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;231m▄\u001b[38;5;145m▄\u001b[38;5;161m▄\u001b[38;5;131m▄\u001b[48;5;231m\u001b[38;5;188m▄\u001b[38;5;231m▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;138m\u001b[38;5;89m▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;138m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄\u001b[38;5;139m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[48;5;231m▄\u001b[38;5;231m▄▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄▄▄\u001b[38;5;125m▄\u001b[48;5;161m▄▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;131m\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;188m▄\u001b[38;5;231m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;145m\u001b[38;5;188m▄\u001b[48;5;231m\u001b[38;5;231m▄\u001b[48;5;188m▄\u001b[48;5;231m▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;89m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;88m▄\u001b[48;5;89m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;231m\u001b[38;5;161m▄▄\u001b[48;5;188m▄\u001b[48;5;131m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[38;5;231m▄\u001b[48;5;145m▄\u001b[48;5;231m▄▄▄\u001b[48;5;161m▄\u001b[38;5;188m▄\u001b[48;5;125m▄\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;138m\u001b[38;5;181m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m\u001b[38;5;35m▄▄▄▄▄▄\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;161m▄\u001b[48;5;231m▄\u001b[38;5;35m▄▄\u001b[48;5;145m\u001b[38;5;65m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[38;5;125m▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄▄▄\u001b[48;5;125m\u001b[38;5;125m▄▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;35m▄\u001b[48;5;231m▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄\u001b[48;5;95m▄\u001b[48;5;35m▄\u001b[48;5;161m▄\u001b[48;5;89m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;161m▄\u001b[48;5;35m▄\u001b[48;5;125m▄▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;89m▄\u001b[48;5;161m\u001b[38;5;125m▄▄\u001b[48;5;125m\u001b[38;5;161m▄▄\u001b[48;5;161m▄▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;35m▄\u001b[48;5;125m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;161m▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;89m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄▄\u001b[48;5;89m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄▄\u001b[38;5;35m▄\u001b[48;5;65m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;125m▄\u001b[38;5;89m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄▄\u001b[48;5;35m\u001b[38;5;125m▄\u001b[38;5;65m▄\u001b[38;5;35m▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;65m▄\u001b[48;5;125m\u001b[38;5;35m▄\u001b[48;5;35m▄\u001b[38;5;125m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;29m▄\u001b[38;5;161m▄\u001b[38;5;35m▄\u001b[48;5;125m▄\u001b[48;5;131m▄\u001b[48;5;35m▄\u001b[48;5;95m▄\u001b[48;5;161m\u001b[38;5;125m▄▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;35m▄▄\u001b[38;5;95m▄\u001b[38;5;35m▄▄▄▄▄\u001b[48;5;125m\u001b[38;5;59m▄\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;65m▄\u001b[48;5;35m\u001b[38;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;65m▄\u001b[48;5;65m\u001b[38;5;35m▄\u001b[48;5;35m▄\u001b[48;5;161m▄\u001b[48;5;35m▄\u001b[38;5;65m▄\u001b[38;5;89m▄\u001b[38;5;29m▄\u001b[38;5;35m▄▄\u001b[48;5;65m▄\u001b[48;5;89m\u001b[38;5;59m▄\u001b[48;5;161m\u001b[38;5;161m▄▄▄\u001b[48;5;95m\u001b[38;5;35m▄▄\u001b[48;5;29m▄\u001b[48;5;35m\u001b[38;5;59m▄\u001b[38;5;35m▄▄▄\u001b[48;5;65m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;29m\u001b[38;5;35m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄\u001b[48;5;29m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;161m▄\u001b[48;5;65m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[48;5;35m\u001b[38;5;29m▄\u001b[38;5;35m▄▄▄\u001b[38;5;29m▄\u001b[38;5;88m▄\u001b[38;5;125m▄\u001b[48;5;95m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;95m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;59m▄\u001b[48;5;161m\u001b[38;5;35m▄\u001b[48;5;95m▄\u001b[48;5;35m▄▄▄\u001b[38;5;95m▄\u001b[48;5;95m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;35m\u001b[38;5;161m▄▄\u001b[48;5;161m▄▄\u001b[48;5;35m\u001b[38;5;29m▄\u001b[38;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[48;5;65m▄\u001b[48;5;29m▄\u001b[48;5;35m▄▄\u001b[48;5;161m▄\u001b[48;5;65m▄\u001b[48;5;35m▄▄▄\u001b[48;5;65m▄\u001b[48;5;89m▄\u001b[48;5;35m▄▄▄▄\u001b[48;5;29m▄\u001b[48;5;125m▄\u001b[48;5;89m▄\u001b[48;5;35m▄▄▄▄\u001b[48;5;95m▄\u001b[48;5;161m▄\u001b[48;5;35m▄\u001b[48;5;65m▄\u001b[48;5;35m▄▄\u001b[48;5;95m▄\u001b[48;5;131m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[39m                                                  '


const { gql, ApolloServer } = require('apollo-server');
const {  
  ApolloServerPluginInlineTrace, 
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core')

const { Neo4jGraphQL } = require('@neo4j/graphql');
const neo4j = require('neo4j-driver');
const path = require('path');
require('dotenv').config();

const optionDefinitions = [
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
  },
  { 
    name: 'help',    alias: 'h', type: Boolean, 
    description: 'Display this usage guide.'
  },
  { 
    name: 'verbose', alias: 'v', type: Boolean, 
    description: 'Enable verbose output' 
  }
]

const options = commandLineArgs(optionDefinitions)

if (options.help || options ) {
  const usage = commandLineUsage([
    {
      header: 'landgraph',
      content: 'SDL entities --> GraphQL \"executable schema\" for neo4j-graphql'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    },
    {
      content: [
        'Project home: {underline https://github.com/cncf/landscape-graph}',
        '',
        '{italic This schema generation tool has been tested by dragons in Wales.}',
        wales
      ],
      raw:true
    }
  ])
  console.log(usage)
} else {
  if(options.verbose) {
    console.log('CLI args: ' + options)
  }
}

if(!options.sdl) {
  // no SDL file, nothing to do.
  console.log('no --sdl file passed, nothing to do!');
  process.exit(2);
}


sdlFile = path.join(BASE_SDL_PATH, options.sdl);
if(!fs.existsSync(sdlFile)) {
  console.log('ERROR: '+ sdlFile + ' does not exist');
  process.exit(2);
}

var typeDefs = String(fs.readFileSync(sdlFile, { encoding: 'utf-8'}));

if(options.verbose) {
  console.log('GraphQL (SDL) type definitions');
  console.log('------------------------------');
  console.log(typeDefs)
}  

// Connect to Neo4j (creds and uri in .env file)
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, 
                   process.env.NEO4J_PASSWORD));

// create full "executable" schema from the type definitions
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
neoSchema.getSchema().then((schema) => {
    
    if(options.verbose) {
      console.log('GraphQL executable schema');
      console.log('-------------------------');    
      console.log(schema);
    }

    if(options.out) {
      var outputFile = path.join(BASE_SDL_PATH, options.out);
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
          console.log(`(landscape) GraphQL server ready on ${url}`);
        });
    }
});
