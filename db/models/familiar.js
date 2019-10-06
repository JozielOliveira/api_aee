'use strict'

module.exports = (sequelize, DataTypes) => {
  const familiar = sequelize.define('familiar', {
      name: DataTypes.STRING(30),
      kinship: DataTypes.ENUM('dad', 'mother', 'brother', 'other'),
      age: DataTypes.INTEGER(3),
      gender: DataTypes.ENUM('male', 'female'),
      schooling: DataTypes.STRING(20),
    }, {})

  familiar.associate = models => {}

  return familiar
}
