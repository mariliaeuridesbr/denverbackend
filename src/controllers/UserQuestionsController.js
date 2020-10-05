const User_questions = require('../models/User_questions');

module.exports = {
    async index (req,res){
        const { id } = req.params;
        
        const userQuestions = await User_questions.findAll({ where: { user_id: { id } } });

        return res.json(userQuestions);
    },

    async store (req,res){
        const { user_id, question_id } = req.body;

        const userQuestions = await User_questions.create({ user_id, question_id });

        return res.json(userQuestions);
    },

    async delete (req,res){
        const { user_id } = req.params;
        const { question_id } = req.params.question_id;
        
        const userQuestions = await User_questions.findOne({ where: { user_id, question_id  } });

        if (!userQuestions){
            return res.status(401).send('User or Question not found');
        }

        userQuestions.destroy();

        return res.send('Relation deleted');
    }
}
