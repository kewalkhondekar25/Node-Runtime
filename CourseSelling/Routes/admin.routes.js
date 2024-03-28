const {Router} = require('express');
const adminMiddleware = require('../Middleware/admin.middleware');
const { Admin, Course } = require('../Models');
const router = Router();

router.post('/signup', (req, res) => {
    //implement admin signup logic
    const username = req.body.username;
    console.log(username);
    const password = req.body.password;
    //check if user exists in db
    Admin.create({
        username: username,
        password: password
    })
    .then(() => {
        res.json({
            msg: 'Admin created successfully'
        })
    })
    .catch(error => {
        console.log(error);
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    //implement creating courses
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newwCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg: 'course created success',
        courseId: newwCourse._id
    })
});


router.get('/courses', adminMiddleware, async (req, res) => {
    //implement fetch all courses
    const response = await Course.find({});
    res.json({
        msg: response
    })
})

module.exports = router;