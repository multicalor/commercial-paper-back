const express = require("express");
const bodyParser = require("body-parser");

const enrollAdmin = require("./scripts/enrollAdmin");
const issue = require("./scripts/issue.js");
const buy = require("./scripts/buy.js");
const history = require("./scripts/history.js");
// const enrollUser = require("./scripts/enrollAdmin");

// const history = require("./cpListener.js");


const registerUser = require("./scripts/registerUser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser());

app.post("/api/enrolladmin", (req, res) => {

    const { company } = req.body;
    console.log(company)
    enrollAdmin(company).then((data) => {
      console.log(data);
      res.json(data);
    });

});

app.post("/api/registeruser", (req, res) => {
    const { name, company } = req.body;
    console.log(name, company);
    registerUser( name, company ).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.post("/api/issue", (req, res) => {
  
  const { name, certificate, paperNumber, company, releaseDate, redeemDate, cost } = req.body;
  console.log(req.body);
  issue(name, certificate, paperNumber, company, releaseDate, redeemDate, cost)
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

app.post("/api/buy", (req, res) => {
  
  const { name, company } = req.body;
  console.log(req.body);
  buy( name, company )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

app.post("/api/history", (req, res) => {
  
  const { name, company } = req.body;
  console.log(req.body);
  history( name, company )
  .then(data => {
      console.log('test+++++++++', data)
      res.send(data)
  });
});

// app.get("/api/enrolluser", (req, res) => {
//   const { name, admin, adminPass } = req.body;
//   enrollUser(name, admin, adminPass).then((data) => {
//     console.log(data);
//     res.json(data);
//   });
// });




// app.post("/api/history", (req, res) => {
//   let data = req.body;
//   console.log(data);
//   history();
//   // .then(data => {
//   //     res.json(data);
//   // });
// });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
