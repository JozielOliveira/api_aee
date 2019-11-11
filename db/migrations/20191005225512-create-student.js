'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('male', 'female'),
      },
      address: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      school: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      others: {
        type: Sequelize.JSON
      },
      referral: {
        type: Sequelize.JSON
      },
      anamnese: {
        type: Sequelize.JSON
      },
      professional: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'users',
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
    return queryInterface.dropTable('students')
  },
}
