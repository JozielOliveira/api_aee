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

  type Query {
    user: User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, profession: String!): User!
    updateUser(id: ID!, title: String, content:String!): [Int!]!
    deleteUser(id: ID!): Int!
  }
`
