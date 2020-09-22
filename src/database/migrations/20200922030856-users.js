'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('users', { 
       user_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       age: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
       },
       password: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       image: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       birthdate: {
         type: Sequelize.DATEONLY,
         allowNull: false,
       },
       finished_lessons: {
         type: Sequelize.ARRAY(Sequelize.TEXT),
         allowNull: true,
         references: { model: 'lessons', key: 'lesson_id' },
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
