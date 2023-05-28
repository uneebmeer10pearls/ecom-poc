// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient() 

// import express from 'express';

// const app = express();
// const port = 8080;

// app.use(express.static("public"));

// app.get("/", async (req:any, res:any) => {
//   res.setHeader("Content-Type", "application/json");
//   res.status(200);
//   res.send(await prisma.user.findMany());
//   // res.send("bla!")
// });

// app.listen(port, async () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
  Query: {
    books: () => books,
  },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
 const { url } = await startStandaloneServer(server, {
  listen: { port: 8080 },
});
console.log(`🚀  Server ready at: ${url}`);
})();