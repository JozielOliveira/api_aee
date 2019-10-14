const { AuthenticationError, ApolloError } = require('apollo-server')

module.exports.mutationUser = {
  createUser : async (parent, { name, email, profession, password }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else if (auth.profession === 'ADMIN')
      return db.user.create({ name, email, profession, password })
    else
      throw new ApolloError('Acesso não autorizado', 'Unauthorized access')
  },
  updateUser: async (parent, { id, name, email, profession, password }, { db, auth }, info) =>{
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else if (auth.profession === 'ADMIN')
      await db.user.update({ name, email, profession, password }, { where: { id } })
    else
      throw new ApolloError('Acesso não autorizado', 'Unauthorized access')

    return db.user.findOne({ where: { id } })
  },
  deleteUser: async (parent, { id }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else if (auth.profession === 'ADMIN')
      await db.user.update({ disable: true },{ where: { id } })
    else
      throw new ApolloError('Acesso não autorizado', 'Unauthorized access')

    return { id }
  }
}
