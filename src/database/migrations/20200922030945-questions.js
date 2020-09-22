'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', { 
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      lesson_id:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: { model:'lessons', key: 'lesson_id' },
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answers: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,        
      },
      right_answer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
