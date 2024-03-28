const {Router} = require('express');
const userMiddleware = require('../Middleware/user.middleware');
const { User, Course } = require('../Models');
const router = Router();

router.post('/signup', (req, res) => {
    //implement user logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        msg: 'user created successfully'
    })
});

router.get('/users', userMiddleware, async (req, res) => {
    const response = await User.find({})
    res.json({
        response
    })
})

router.get('/courses', async (req, res) => {
    //implement listing all courses
    const response = await Course.find({})
    res.json({
        response
    })

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    //implement course purchase
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    //fetch purchased courses
});

module.exports = router;