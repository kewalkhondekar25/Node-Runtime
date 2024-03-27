const mongoose = require('mongoose');

//create schemas
const adminSchema = new mongoose.Schema({

});
const userSchema = new mongoose.Schema({
    //schema defination
});
const courseSchema = new mongoose.Schema({

});

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = {
    adminSchema,
    userSchema,
    courseSchema
};