'use strict'
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define(
    'student',
    {
      name: DataTypes.STRING(30),
      date_birth: DataTypes.DATE,
      age: DataTypes.INTEGER(3),
      gender: DataTypes.ENUM('male', 'female'),
      nationality: DataTypes.STRING(15),
      zip_code: DataTypes.STRING(20),
      state: DataTypes.STRING(2),
      city: DataTypes.STRING(50),
      neighborhood: DataTypes.STRING(20),
      address: DataTypes.STRING(50),
      schooling: DataTypes.STRING(20),
    },
    {}
  )
  student.associate = function(models) {
    student.hasMany(models.familiar, {
      constraints: false,
      foreignKey: 'student',
    })
    student.hasMany(models.test_answers, {
      constraints: false,
      foreignKey: 'student',
    })
    student.hasMany(models.user, { constraints: false, foreignKey: 'creator' })
    student.hasMany(models.advice, {
      constraints: false,
      foreignKey: 'student',
    })
  }
  return student
}
