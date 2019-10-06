'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('test_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      test: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      answers: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSON),
      },
      total_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      test: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'tests',
          },
          key: 'id',
        },
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
    return queryInterface.dropTable('test_answers')
  },
}
