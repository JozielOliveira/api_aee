const { gql } = require('apollo-server')

module.exports = gql`
  scalar JSON

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

  type Student {
    id: String,
    name: String,
    date_birth: String,
    age: String,
    gender: String,
    mother: JSON,
    father: JSON,
    address: JSON,
    school: JSON,
    others: JSON,
    createdAt: String,
    updatedAt: String,
  }

  type FormGeneric {
    title: String,
    steps: [JSON],
  }

  type Attend {
    name: String,
    age: String,
    gender: String,
    grade: String,
    flow: [JSON]
  }

  type Auth {
    token: String,
    user: User
  }

  type Query {
    me(id: String, title: String, profession:String): Auth!
    user(title: String, profession:String): User!
    users(title: String, profession:String): [User]!

    student(id: String, name: String, date_birth: String, gender: String): Student!
    students(name: String, date_birth: String, gender: String): [Student]!
    # BFF
    formReferral(id: String!): FormGeneric!
    formAnamnese(id: String!): FormGeneric!
    attend(id: String!): Attend!
  }

  type Mutation {
    # AUTH
    login(email: String!, password: String!): Auth
    register(name: String!, email: String!, password: String!, profession: String!): Auth
    # USER
    createUser(name: String!, email: String!, password: String!, profession: String!): User
    updateUser(id: String!, name: String, email: String, password: String, profession: String): User
    deleteUser(id: String!): Status

    # STUDENT
    createStudent(
      name: String!,
      date_birth: String!,
      gender: String!,
      mother: JSON!,
      father: JSON!,
      address: JSON!,
      school: JSON!
    ): Student!
    saveReferral(id: String!, referral: JSON! ): Student
  }
`
