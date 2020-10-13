const yup = require("yup")
const Lessons = require("../models/Lessons")

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    video: yup.string().required(),
});


await schema.validate(req.body,{abortEarly: false});