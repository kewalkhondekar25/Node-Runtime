const {User} = require('../Models/index')

const userMiddleware = (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username: username,
        password: password
    })
    .then(value => {
        if(value){
            next();
        }else{
            res.json({
                msg: 'user do not exist'
            })
        }
    })
};

module.exports = userMiddleware;