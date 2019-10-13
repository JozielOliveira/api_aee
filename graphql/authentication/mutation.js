const { addUser } = require('../../helpers/auth')

module.exports.authentication = {
  login: async (parent, { email, password }, { db }, info) => {
    if (!email || !password) throw new Error('Invalid Login')

    const user = await db.user.findOne({ where: { email } })

    if(!db.user.isPassword(user.password, password)) throw new Error('Invalid Login')

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
