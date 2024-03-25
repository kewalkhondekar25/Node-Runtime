const express = require('express');
const app = express();
const port = 8081;
const zod = require('zod');

const moneySchema = zod.array(zod.number());
const inputSchame = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal('IND').or('USA'),
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: 'this is get req'
    })
});

app.post('/input', (req, res) => {
    const money = req.body.array;
    const response = moneySchema.safeParse(money);
    res.json({
        response
    })
});

app.post('/info', (req, res) => {
    const data = req.body;
    const response = inputSchame.safeParse(data);
    res.json({
        response
    })
});


app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});