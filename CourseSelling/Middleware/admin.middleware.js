const {Admin} = require('../Models/index')
const adminMiddleware = (req, res, next) => {
    //check header & validate the admin from admin db
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password
    })
    .then(value => {
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: 'user do not exist'
            })
        }
    })
};

module.exports = adminMiddleware;