const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')


// const enrollAdmin = require("./scripts/enrollAdmin");registerUser
const registerUser = require("./scripts/myScripst/registerUser");
const login = require("./scripts/myScripst/login");
const issue = require("./scripts/myScripst/issue.js");
const buy = require("./scripts/buy.js");
const queryApp = require("./scripts/queryapp.js");
const redeem = require("./scripts/redeem.js");
const queryAllPaper = require("./scripts/queryAllPaper.js");

// const wallets = require('./scripts/myScripst/inMemoryWallet')
// const history = require("./cpListener.js");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(bodyParser());

app.post("/api/registeruser", (req, res) => {
    const { name, company } = req.body;
    console.log(name, company );
    registerUser( name, company ).then((data) => {
      console.log(data);
      res.json(data);
    });
  });



  app.post("/api/login", (req, res) => {
    const {certificate, privateKey } = req.body;
    console.log(req.body)
    login(certificate, privateKey).then((data) => {
      console.log(data);
      res.json(data);
    });
  });


app.post("/api/issue", (req, res) => {
  
  const { certificate, privateKey, paperNumber, releaseDate, redeemDate, cost } = req.body;
  // console.log(req.body);
  // issue(
  //   certificate,
  //   privateKey,
  //   paperNumber,
  //   releaseDate,
  //   redeemDate,
  //   cost
  // )
  issue(certificate, privateKey, paperNumber, releaseDate, redeemDate, cost)
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});



app.post("/api/buy", (req, res) => {
  
  const { name, company, x509Identity } = req.body;
  console.log(req.body);
  buy( name, company, x509Identity )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});


app.post("/api/redeem", (req, res) => {
  
  const { name, company, x509Identity } = req.body;
  console.log(req.body);
  redeem( name, company, x509Identity )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

app.post("/api/history", (req, res) => {
  
  const { name, company, paper, x509Identity } = req.body;
  console.log(x509Identity);
  queryApp( name, company, paper, x509Identity )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

app.get("/api/historyall", (req, res) => {
  
  const { name, company } = req.body;
  queryAllPaper( name, company )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
