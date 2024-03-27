const {Router} = require('express');
const adminMiddleware = require('../Middleware/admin.middleware');
const router = Router();

router.post('/signup', (req, res) => {
    //implement admin signup logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    //implement fetching all courses
});


router.post('/courses', adminMiddleware, (req, res) => {
    //implement course creation
})

module.exports = router;