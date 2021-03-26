import express from "express";
import bodyParser from "body-parser";
// import { buildCAClient, registerAndEnrollUser, enrollAdmin } from './CAUtil.js'
import enrollUser from './enrollUser.js'
import buy from './buy.js'
import redeem from './redeem.js'
import queryApp from './queryapp.js'

let enroll = true;

const PORT = process.env.PORT ?? 3002;

const app = express();

app.use(bodyParser());

app.post('/api/enrolluser', (req, res) =>{
    if (enroll) {
        enroll = !enroll
        enrollUser().then(data => {
            console.log(data)
            res.send(data);
        }
        );
        
    } else {
        let answer = 'User registration has already been completed'
        console.log(answer)
        res.send(answer);
    }

});

app.post('/api/buy', (req, res) =>{
    buy()
    res.end('ok');
});

app.post('/api/redeem', (req, res) =>{
    redeem()
    res.end('ok');
});

app.post('/api/queryapp', (req, res) => {  
    let data = req.body;
    console.log(data);
    queryApp();
    res.end('ok');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
