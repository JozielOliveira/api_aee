module.exports = {
  Query: {
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findOne(({ where: { id } }))
  },

  Mutation: {
    createUser : (parent, { name, email, profession, password }, { db }, info) =>
      db.user.create({ name, email, profession, password }),
    updateUser: (parent, { id, name, email, profession, password }, { db }, info) =>
      db.user.update({ name, email, profession, password }, { where: { id } }),
    deleteUser: (parent, {id}, { db }, info) =>
      db.user.destroy({ where: { id } })
  }
}
