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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    //implement course purchase
    const courseId = req.params.courseId;
    console.log(courseId);
    const username = req.headers.username;
    try {
        await User.updateOne({username: username}, {"$push": {purchasedCourses: courseId}});
        res.json({
            msg: 'purchase complete'
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    //fetch purchased courses
    try {
        const user = await User.findOne({
            username: req.headers.username
        });
        const courses = await Course.find({_id: {"$in": user.purchasedCourses}});
        res.json({
            courses: courses
        })
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;