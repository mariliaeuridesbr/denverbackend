const User = require("../models/User");

module.exports = {
    async store (req, res) {
        const { name, age, email, password, image, birthdate } = req.body;

        const user = await User.create({ name, age, email, password, image, birthdate });

        return res.json(user);
    },
}