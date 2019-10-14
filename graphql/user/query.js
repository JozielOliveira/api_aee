const { AuthenticationError, ApolloError } = require('apollo-server')

module.exports.queryUser = {
  me: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else
      return db.user.findOne({ where: { id: auth.id, disable: false } })
  },
  users: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else if (auth.profession === 'ADMIN')
      return db.user.findAll({ where: { disable: false }})
    else
      throw new ApolloError('Acesso não autorizado', 'Unauthorized access')
  },
  user: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else if (auth.profession === 'ADMIN')
      return db.user.findOne({ where: { ...args, disable: false } })
    else
      throw new ApolloError('Acesso não autorizado', 'Unauthorized access')
  },
}
