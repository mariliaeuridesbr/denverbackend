const Question = require("../models/Question");
const Lessons = require("../models/Lessons")

module.exports = {
    async index (req, res){
        const questions = await Question.findAll();

        return res.json(questions);
    },
    async store (req, res) {
        const { lessonid } = req.params;
        const { question, answers, right_answer, lesson_id } = req.body;

        const lessons = await Lessons.findByPk(lessonid);

        if(!lessons){
            return res.status(400).json({ error: 'Lesson not found' });
        }

        const questions = await Question.create({ question, answers, right_answer, lesson_id });

        return res.json(questions);
    },
}