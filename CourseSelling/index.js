const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const adminRouter = require('./Routes/admin.routes');
const userRouter = require('./Routes/user.routes')

app.use(bodyParse.json())
app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
})
