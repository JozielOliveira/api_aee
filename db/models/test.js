'use strict'
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define(
    'test',
    {
      name: DataTypes.STRING(30),
      description: DataTypes.STRING,
      score_template: DataTypes.ARRAY(DataTypes.JSON),
    },
    {}
  )
  test.associate = function(models) {}
  return test
}
