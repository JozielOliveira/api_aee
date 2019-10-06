'use strict'
module.exports = (sequelize, DataTypes) => {
  const objective = sequelize.define(
    'objective',
    {
      name: DataTypes.STRING(30),
      description: DataTypes.STRING,
    },
    {}
  )
  objective.associate = function(models) {
    objective.hasMany(models.test, {
      constraints: false,
      foreignKey: 'objective',
    })
  }
  return objective
}
