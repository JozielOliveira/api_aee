'use strict'

module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
      name: DataTypes.STRING(30),
      date_birth: DataTypes.DATE,
      age: DataTypes.INTEGER(3),
      gender: DataTypes.ENUM('male', 'female'),
      others: DataTypes.JSON,
      address: DataTypes.JSON,
      school: DataTypes.JSON,
      referral: DataTypes.JSON,
      anamnese: DataTypes.JSON,
    }, {})

  student.associate = models => {
    student.belongsTo(models.user, { constraints: false, foreignKey: 'professional' })
    student.hasMany(models.familiar, { constraints: false, foreignKey: 'student' })
    student.hasMany(models.test_answers, { constraints: false, foreignKey: 'student' })
    student.hasMany(models.advice, { constraints: false, foreignKey: 'student' })
  }

  return student
}
