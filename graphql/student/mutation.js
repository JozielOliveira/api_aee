const { AuthenticationError } = require('apollo-server')
const moment = require('moment')

module.exports.mutationStudent = {
  createStudent : async (parent, {
    name,
    date_birth,
    gender,
    mother,
    father,
    school,
    address,
  }, { db, auth }, info) => {
    let birthDay = date_birth
    let age = Math.floor(moment(new Date()).diff(moment(birthDay),'years',true))

    const student = {
      professional: auth.id,
      name,
      gender,
      date_birth,
      age,
      address,
      school,
    }
    const parents = [
      {
        mother,
        gender: 'female',
        kinship: 'mother',
      }, {
        ...father,
        gender: 'male',
        kinship: 'dad',
      }
    ]

    const newStudent = await db.student.create(student)
    if (newStudent)
      parents.map( async parent => {
        const objFamiliar = {
          name: parent.name,
          phone: phone.phone,
          address: parent.address,
          student : newStudent.id,
        }
        await db.familiar.create(objFamiliar)
      })

    return newStudent
  },

  saveReferral: (parent, { id, referral }, { db, auth }, info) => {
    if (!auth)
      throw new AuthenticationError('Não Autenticado')
    else
      return db.student.update({ referral },{ where: { id } })
  },
}
