'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      header: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      suggestions: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      comments: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('advice')
  },
}
