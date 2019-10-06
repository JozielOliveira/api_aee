'use strict'
module.exports = (sequelize, DataTypes) => {
  const test_topic = sequelize.define(
    'test_topic',
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER(3),
    },
    {}
  )
  test_topic.associate = function(models) {
    test_topic.hasMany(models.test_question, {
      constraints: false,
      foreignKey: 'topic',
    })
  }
  return test_topic
}
