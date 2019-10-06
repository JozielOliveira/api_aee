'use strict'

module.exports = (sequelize, DataTypes) => {
  const advice = sequelize.define('advice', {
      header: DataTypes.STRING,
      suggestions: DataTypes.STRING,
      comments: DataTypes.STRING,
    }, {})

  advice.associate = models => {}

  return advice
}
