const { Model, Sequelize } = require('sequelize');

class User extends Model{
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            image: Sequelize.STRING,
            birthdate: Sequelize.STRING,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.User_questions, { foreignKey: 'question_id', as: 'questions' });
        this.hasMany(models.User_lessons, { foreignKey: 'lesson_id', as: 'lesson' });
    }
}

module.exports = User;