const yup = require("yup");
const User = require("../models/User")

const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email().required(),
    password:yup.string().required().min(6),
    birthdate: yup.string().required(),
  });

  await schema.validate(req.body,{abortEarly: false});