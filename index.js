const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { getUser } = require('./helpers/auth')
const db = require('./db/models/index')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const auth = getUser(token)

    return {
      db,
      auth,
    }
  },
})

const port = process.env.PORT || 4000

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
