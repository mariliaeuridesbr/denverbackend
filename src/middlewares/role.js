const User = require('../models/User');

function role (req, res, next){
    const id = req.id;
    
    const user = User.findOne({ where: { id }});
    
    try {
        req.user.role = user.role;
        return next();
    } catch (err) {
        return res.status(401); 
    }
}

module.exports = role;