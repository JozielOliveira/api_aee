const { AuthenticationError, ApolloError } = require('apollo-server')
const { addUser } = require('../../helpers/auth')

module.exports.authentication = {
  login: async (parent, { email, password }, { db }, info) => {
    if (!email || !password) throw new Error('Email ou senha inválida')

    const user = await db.user.findOne({ where: { email } })

    if(!user)
      throw new Error('Email ou senha inválida')
    else
      if(!db.user.isPassword(user.password, password)) throw new Error('Email ou senha inválida')

    return {
      token : addUser(user),
      user,
    }
  },
  register: async (parent, { name, email, profession, password }, { db }, info) =>{
    const user = await db.user.create({ name, email, profession, password })

    return {
      token : addUser(user),
      user,
    }
  },
}
