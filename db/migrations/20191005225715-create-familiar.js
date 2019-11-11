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
        type: Sequelize.STRING(20),
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      had_difficulty_learning: {
        type: Sequelize.BOOLEAN,
      },
      graduated: {
        type: Sequelize.BOOLEAN,
      },
      profession: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.JSON,
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
