const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {
        name: 'john',
        kidneys: [
            {healthy: false}
        ]
    }
];

app.get('/', (req, res) => {
    // console.log(req.query);//obj
    const numberOfKidneys = users[0].kidneys.length;
    let numberOfHealthykidney = 0;
    for(let i = 0; i < users[0].kidneys.length; i++)
    {
        if(users[0].kidneys[i].healthy)
        {
            numberOfHealthykidney = numberOfHealthykidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthykidney;
    res.json([{
        numberOfKidneys,
        numberOfHealthykidney,
        numberOfUnhealthyKidney
    }]);
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: 'done'
    })
});

app.put('/', (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: 'put done'
    });
});

app.listen(8080, () => {
    console.log('server is listening on port 8080 ...');
});