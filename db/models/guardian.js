'use strict'
module.exports = (sequelize, DataTypes) => {
  const guardian = sequelize.define(
    'guardian',
    {
      email: DataTypes.STRING(100),
      phone: DataTypes.STRING(20),
      had_difficulty_learning: DataTypes.BOOLEAN,
      graduated: DataTypes.BOOLEAN,
      profession: DataTypes.STRING(30),
      zip_code: DataTypes.STRING(20),
      state: DataTypes.STRING(2),
      city: DataTypes.STRING(50),
      neighborhood: DataTypes.STRING(20),
      address: DataTypes.STRING(50),
    },
    {}
  )
  guardian.associate = function(models) {
    // guardian.belongsTo(models.familiar, { constraints: false,  foreignKey: 'familiar' })
  }
  return guardian
}
