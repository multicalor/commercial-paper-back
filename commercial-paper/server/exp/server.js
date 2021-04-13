const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')


const registerUser = require("./src/registerUser");
const {login} = require("./src/utils/login");
const issue = require("./src/issue");
const buy = require("./src/buy");
const queryApp = require("./src/queryapp");
const redeem = require("./src/redeem");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(bodyParser());


app.post("/api/user", (req, res) => {
    const { name, company} = req.body;
    // console.log(name, company, csr );
    registerUser( name, company).then((data) => {
      console.log('res--------->', data);
      res.send(data? data: {error: "no response"});
    });
  });

  app.get("/api/user", (req, res) => {
    const {certificate, privateKey, flag } = req.body;
    console.log('res--------->', req.body)
    login(certificate, privateKey, flag).then((data) => {
      console.log(data);
      res.send({name: data.name, company: data.org});
    });
  });


app.post("/api/issue", (req, res) => {
  
  const { certificate, privateKey, paperNumber,  redeemDate, cost } = req.body;//releaseDate,

  issue(certificate, privateKey, paperNumber, redeemDate, cost)
  .then(data => {
      console.log('res--------->', data);
      res.send(data);
  });
});




app.put("/api/buy", (req, res) => {
                            // 'magnetocorp', '00001', 'magnetocorp', 'DigiBank', '4900000', '2020-05-31'
  const { certificate, privateKey,  issuer, paperNumber, owner, faceValue, maturityDateTime } = req.body;
  console.log('body----->',req.body);
  buy( certificate, privateKey,  issuer, paperNumber, owner, faceValue, maturityDateTime )
  .then(data => {
      console.log('res--------->', data)
      res.send(data)
  });
});


app.put("/api/redeem", (req, res) => {
                             // 'magnetocorp', '00001', , '2020-11-30'
  const { certificate, privateKey, issuer, paperNumber, maturityDateTime } = req.body;
  console.log('REDEEM+++++++++++++++++++++++++++++++++++++++++++++++', req.body);
  redeem( certificate, privateKey, issuer, paperNumber, maturityDateTime )
  .then(data => {
      console.log('res--------->', data)
      res.send(data)
  });
});


app.post("/api/history", (req, res) => {
  
  const { certificate, privateKey, paperNumber } = req.body;
  console.log('history---body>',req.body);
  queryApp( certificate, privateKey, paperNumber )
  .then(data => {
      // console.log('res--------->', data)
      res.send(data)
  });
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
