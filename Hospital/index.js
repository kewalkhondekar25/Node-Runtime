const express = require('express');
const app = express();

const users = [
    {
        name: 'john',
        kidneys: [
            {healthy: false}
        ]
    }
];

app.get('/', (req, res) => {
    const numberOfKidneys = users[0].kidneys.length;
    const numberOfHealthykidney = numberOfKidneys;
    for(let i = 0; i < numberOfHealthykidney.length; i++)
    {
        if(numberOfHealthykidney)
        {
            numberOfHealthykidney += 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfHealthykidney - 1;
    res.json([{
        numberOfKidneys,
        numberOfHealthykidney,
        numberOfUnhealthyKidney
    }]);
});

app.listen(8080, () => {
    console.log('server is listening on port 8080 ...');
})