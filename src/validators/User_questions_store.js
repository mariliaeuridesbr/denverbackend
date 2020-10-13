const yup = require("yup");
const User_questions = require("../models/User_questions");

const schema = yup.object().shape({
    answer: yup.number().integer().required(),

});

await schema.validate(req.body,{abortEarly: false});