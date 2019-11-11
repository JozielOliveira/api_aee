'use strict'
const md5 = require('md5')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validation: {
          notEmpty: true,
          len: [6, 30]
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validation: {
          isEmail: true
        },
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        set(val) {
          this.setDataValue('password', md5(val));
        }
      },
      profession: {
        type: DataTypes.STRING(30),
        allowNull: false,
        valueDefault: 'COMMON'
      },
      disable: {
        type: DataTypes.BOOLEAN,
      }
    }, {})

  user.isPassword = (encryption, decrypted) => md5(decrypted) === encryption

  user.associate = models => {
    user.hasMany(models.student, { constraints: false, foreignKey: 'professional' })
    user.hasMany(models.advice, { constraints: false, foreignKey: 'professional' })
    user.hasMany(models.objective, { constraints: false, foreignKey: 'creator' })
    user.hasMany(models.test, { constraints: false, foreignKey: 'creator' })
  }

  return user
}
