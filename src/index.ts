import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
 const { url }:{url:String} = await startStandaloneServer(server, {
  listen: { port: 8080 },
});
console.log(`🚀  Server ready at: ${url}`);
})();