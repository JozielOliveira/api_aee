const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const db = require('./db/models/index')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
