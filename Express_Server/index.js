const express = require('express');
const app = express();
const port = 8080;

const sum = (n) => {
    let compute = 0;
    for(let i = 0; i <= n; i++)
    {   
        compute += i;
    }
    return compute;
}

app.get('/', (req, res) => {
    const param = req.query.n;
    const ans = sum(param);
    res.send(`hello world  ${ans}`);
});

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
