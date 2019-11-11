const { AuthenticationError } = require('apollo-server')
const { referral } = require('./bff/referral')

module.exports.queryStudent = {
  formReferral: async (parent, { id }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')

    let user = await db.student.findOne({ where: { id },  attributes: ['referral'] })

    if(user.referral !== null)
      return JSON.parse(JSON.stringify(user)).referral
    else
      return referral
  },

  students: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else
      return db.student.findAll({ where: { professional: auth.id }})
  },
  student: (parent, args, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else
      return db.student.findOne({ where: { ...args, professional: auth.id } })
  },
}
