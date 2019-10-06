const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID!,
    name: String,
    email: String,
    password: String,
    profession: String,
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    user: User
    users: [User]
  }
`
