'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('familiars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      kinship: {
        allowNull: false,
        type: Sequelize.ENUM('dad', 'mother', 'brother', 'other'),
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER(3),
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('male', 'female'),
      },
      schooling: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      student: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'students',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('familiars')
  },
}
