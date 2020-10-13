const yup = require("yup");
const Question = require("../models/Question");

const schema = yup.object().shape({
    question: yup.string().required(),
    //answers: yup,
    right_answer: yup.number().integer().required(),
})

await schema.validate(req.body,{abortEarly: false});