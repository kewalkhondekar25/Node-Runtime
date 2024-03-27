const {Router} = require('express');
const userMiddleware = require('../Middleware/user.middleware')
const router = Router();

router.post('/signup', (req, res) => {
    //implement user logic
});

router.get('/courses', (req, res) => {
    //implement listing all courses
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    //implement course purchase
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    //fetch purchased courses
});

module.exports = router;