import express from "express";
import bodyParser from "body-parser";
// import { buildCAClient, registerAndEnrollUser, enrollAdmin } from './CAUtil.js'
import enrollUser from './enrollUser.js'
import issue from './issue.js'
import history from './cpListener.js'


const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(bodyParser());

app.post('/api/enrolluser', (req, res) =>{
    let data = req.body;
    console.log(data);
    enrollUser()
    .then(data => {
    res.send(data)}
    );
    
});

app.post('/api/issue', (req, res) =>{
    let data = req.body;
    console.log(data);
    issue().then(data => {
        console.log('test+++++++++', data)
        res.send(data)
    });
    
});

app.post('/api/history', (req, res) =>{
    let data = req.body;
    console.log(data);
    history().then(data => {
        res.json(data);
    });
    
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
