const User = require('../models/User');
const Lessons = require('../models/Lessons');
const User_lessons = require('../models/User_lessons');
const { where } = require('sequelize');

module.exports = {
    async index (req,res){
        const { id } = req.params;
        
        const userLessons = await User_lessons.findAll({ where: { user_id: id } });

        return res.json(userLessons);
    },

    async store (req,res){
        const { user_id, lesson_id } = req.body;

        const userLesson = await User_lessons.create({ user_id, lesson_id });

        return res.json(userLesson);
    },

    async patch (req,res){

    },

    async delete (req,res){

    }
}