const { authentication } = require('./authentication/mutation')

// USER
const { queryUser } = require('./user/query')
const { mutationUser } = require('./user/mutation')

const { queryStudent } = require('./student/query')
const { mutationStudent } = require('./student/mutation')

module.exports = {
  Query: {
    ...queryUser,
    ...queryStudent,
  },

  Mutation: {
    ...authentication,
    ...mutationUser,
    ...mutationStudent,
  }
}
