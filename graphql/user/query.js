const { AuthenticationError, ApolloError } = require('apollo-server')

module.exports.queryUser = {
  me: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Not Authenticated')
    else
      return db.user.findAll()
  },
  users: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Not Authenticated')
    else if (auth.profession === 'ADMIN')
      return db.user.findAll()
    else
      throw new ApolloError('Unauthorized access', 'Unauthorized access')
  },
  user: (parent, args, { db }, info) => {
    if (!auth)
      throw new AuthenticationError('Not Authenticated')
    else if (auth.profession === 'ADMIN')
      return db.user.findOne({ where: { ...args } })
    else
      throw new ApolloError('Unauthorized access', 'Unauthorized access')
  },
}
