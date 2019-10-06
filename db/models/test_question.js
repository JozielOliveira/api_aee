'use strict'
module.exports = (sequelize, DataTypes) => {
  const test_question = sequelize.define(
    'test_question',
    {
      description: DataTypes.STRING,
      type: DataTypes.ENUM(
        'unique',
        'multiple',
        'describe',
        'boolean',
        'file',
        'date'
      ),
      options: DataTypes.ARRAY(DataTypes.JSON),
      template: DataTypes.ARRAY(DataTypes.JSON),
      score: DataTypes.INTEGER(3),
    },
    {}
  )
  test_question.associate = function(models) {}
  return test_question
}
