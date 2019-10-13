const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID!,
    name: String,
    email: String,
    profession: String,
    createdAt: String,
    updatedAt: String,
  }

  type Auth {
    token: String,
    user: User
  }

  type Query {
    me(id: ID, title: String, profession:String): Auth!
    user(id: ID, title: String, profession:String): User!
    users(id: ID, title: String, profession:String): [User]!
  }

  type Mutation {
    # AUTH
    login(email: String!, password: String!): Auth!
    register(name: String!, email: String!, password: String!, profession: String!): Auth!
    # USER
    createUser(name: String!, email: String!, password: String!, profession: String!): User!
    updateUser(id: ID!, title: String, profession:String!): User!
    deleteUser(id: ID!): Int!
  }
`
