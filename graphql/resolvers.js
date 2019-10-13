const { authentication } = require('./authentication/mutation')

// USER
const { queryUser } = require('./user/query')
const { mutationUser } = require('./user/mutation')

module.exports = {
  Query: {
    ...queryUser
  },

  Mutation: {
    ...authentication,
    ...mutationUser
  }
}
