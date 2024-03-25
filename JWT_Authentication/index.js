const express = require('express');
const port = 8082;
const jwt = require('jsonwebtoken');
const jwtPassword = "iknowexactlywhereyouare";

const app = express();
app.use(express.json());

const agent = [
    {
        name: 'cypher',
        email: 'cypher@valorant.gg'
    },
    {
        name: 'omen',
        email: 'omen@valorant.gg'
    }
];


const handleVerify = (name, email) => {
    let isVerify = false;
    for(let i = 0; i < agent.length; i++){
        if(agent[i].name == name && agent[i].email == email){
            isVerify = true;
        }
    }
    return isVerify;
}

app.get('/', (req, res) => {
    res.json({
        msg: 'authentication running'
    })
})

app.post('/signin', (req, res) => {
    const agentName = req.body.name;
    const agentEmail = req.body.email;

    if(!handleVerify(agentName, agentEmail)){
        return res.json({
            msg: 'agent doesnt exist in database'
        })
    }
    let token = jwt.sign({name: agentName}, jwtPassword);
    res.json({
        token
    })
});

app.get('/agents', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword);
        res.json({
            agent: agent.filter(item => item.name !== decode.name)
        })
    } catch (error) {
        res.json({
            msg: error
        })
    }
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}...`);
})