'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('test_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(
          'unique',
          'multiple',
          'describe',
          'boolean',
          'file',
          'date'
        ),
      },
      options: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSON),
      },
      template: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSON),
      },
      score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      topic: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'test_topics',
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
    return queryInterface.dropTable('test_questions')
  },
}
