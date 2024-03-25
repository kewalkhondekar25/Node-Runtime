const express = require('express');
const app = express();
app.use(express.json());

//using middleware
const verifyUser = (req, res, next) => {
    const userName = req.headers.username;
    const userPwd = req.headers.password;
    // const age = req.query.age;
    if(userName === 'john' && userPwd === 'john69'){
        res.json({
            msg: 'user authorize'
        });
        next();
    }else{
        res.json({
            msg: 'unauthorize user'
        });
    }
};

let count = 0;
const calculateRequests = (req, res, next) => {
    count++;
    console.log(`visits: ${count}`);
    next();
};
app.use(calculateRequests);


app.get('/', (req, res) => {
    //query param
    const url = req.query;
    console.log(url);
    res.json({
        msg: 'get ok'
    });
});

app.get('/check', (req, res) => {
    const userName = req.headers.username;
    const passWord = req.headers.pwd;
    const age = req.query.age;
    console.log(age);
    if(userName === 'john' && passWord === 'john69')
    {
        if(age >= 18){
            res.json({
                msg: 'authorize user'
            })
        }else{
            res.json({
                msg: 'not an adult'
            })
        }
    }else{
        res.json({
            msg: 'unauthorize user'
        })
    }
});

//using middleware
app.get('/middleware', verifyUser, (req, res) => {
    res.json({
        msg: 'ok'
    });
});

app.listen(8080, () => {
    console.log('server is listening on port 8080...');
})