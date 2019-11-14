const { AuthenticationError } = require('apollo-server')
const { referral } = require('./bff/referral')
const { anamnese } = require('./bff/anamnese')

module.exports.queryStudent = {
  attend: async (parent, { id }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')

    let user = await db.student.findOne({
      where: { id },
      attributes: [ 'id', 'name', 'age', 'gender', 'school', 'referral', 'anamnese']
    })

    let statusReferral= user.referral === null ? false : true
    let statusAnamnese= user.anamnese === null ? false : true

    return {
      name: user.name,
      age: user.age,
      gender: user.gender,
      grade: user.school.grade,
      flow: [
        { title: 'Encaminhamento', route: 'encaminhamento', status: true },
        { title: 'Anamnese', route: 'anamnese', status: statusReferral },
        { title: 'Testes', route: 'testes', status: statusAnamnese },
      ]
    }
  },
  formReferral: async (parent, { id }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')

    let user = await db.student.findOne({ where: { id },  attributes: ['referral'] })

    if(user.referral !== null)
      return JSON.parse(JSON.stringify(user)).referral
    else
      return referral
  },

  formAnamnese: async (parent, { id }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')

    let user = await db.student.findOne({ where: { id },  attributes: ['anamnese'] })

    if(user.anamnese !== null)
      return JSON.parse(JSON.stringify(user)).anamnese
    else
      return anamnese
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
