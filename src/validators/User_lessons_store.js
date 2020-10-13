const yup = require("yup");
const User_lessons = require("../models/User_lessons");

const schema = yup.object().shape({


});

await schema.validate(req.body,{abortEarly: false});