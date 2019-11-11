'use strict'

module.exports = (sequelize, DataTypes) => {
  const familiar = sequelize.define('familiar', {
      name: DataTypes.STRING(30),
      kinship: DataTypes.ENUM('dad', 'mother', 'brother', 'other'),
      age: DataTypes.INTEGER(3),
      gender: DataTypes.ENUM('male', 'female'),
      schooling: DataTypes.STRING(20),
      email: DataTypes.STRING(100),
      phone: DataTypes.STRING(20),
      had_difficulty_learning: DataTypes.BOOLEAN,
      graduated: DataTypes.BOOLEAN,
      profession: DataTypes.STRING(30),
      address: DataTypes.JSON,
    }, {})

  familiar.associate = models => {}

  return familiar
}
