'use strict'
module.exports = (sequelize, DataTypes) => {
  const test_answers = sequelize.define(
    'test_answers',
    {
      test: DataTypes.BIGINT,
      answers: DataTypes.ARRAY(DataTypes.JSON),
      total_score: DataTypes.INTEGER(4),
    },
    {}
  )
  test_answers.associate = function(models) {}
  return test_answers
}
