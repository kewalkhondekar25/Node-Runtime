const express = require('express');
const app = express();

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

// app.get('/middleware', (req, res))
app.listen(8080, () => {
    console.log('server is listening on port 8080...');
})