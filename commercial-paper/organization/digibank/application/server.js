import express from "express";
import bodyParser from "body-parser";
// import { buildCAClient, registerAndEnrollUser, enrollAdmin } from './CAUtil.js'
import enrollUser from './enrollUser.js'
import buy from './buy.js'
import redeem from './redeem.js'
import queryApp from './queryapp.js'



const PORT = process.env.PORT ?? 3002;

const app = express();

app.use(bodyParser());

app.post('/api/enrolluser', (req, res) =>{
    let data = req.body;
    console.log(data);
    res.end('ok');
    enrollUser();
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
