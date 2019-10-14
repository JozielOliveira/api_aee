const { gql } = require('apollo-server')

module.exports = gql`
  type Status {
    id: String,
  }

  type User {
    id: String!,
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
    me(id: String, title: String, profession:String): Auth!
    user(id: String, title: String, profession:String): User!
    users(id: String, title: String, profession:String): [User]!
  }

  type Mutation {
    # AUTH
    login(email: String!, password: String!): Auth
    register(name: String!, email: String!, password: String!, profession: String!): Auth
    # USER
    createUser(name: String!, email: String!, password: String!, profession: String!): User
    updateUser(id: String!, name: String, email: String, password: String, profession: String): User
    deleteUser(id: String!): Status
  }
`
