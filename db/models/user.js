'use strict'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(30),
        validation: {},
      },
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(30),
      profession: DataTypes.STRING(30),
    }, {})

  user.associate = models => {
    user.hasMany(models.student, { constraints: false, foreignKey: 'professional' })
    user.hasMany(models.advice, { constraints: false, foreignKey: 'professional' })
    user.hasMany(models.objective, { constraints: false, foreignKey: 'creator' })
    user.hasMany(models.test, { constraints: false, foreignKey: 'creator' })
  }

  return user
}
