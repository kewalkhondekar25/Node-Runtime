const express = require('express');
const app = express();
const adminRouter = require('./Routes/admin.routes');
const userRouter = require('./Routes/user.routes')

app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
})
