const Lessons = require("../models/Lessons");

module.exports = {
    async index (req, res){
        const lessons = await Lessons.findAll();

        return res.json(lessons);
    },
    async store (req, res) {
        const { title, description, video } = req.body;

        const lesson = await Lessons.create({ title, description, video });

        return res.json(lesson);
    },
}