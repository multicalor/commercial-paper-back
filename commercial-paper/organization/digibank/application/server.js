import express from "express";
import bodyParser from "body-parser";
// import { buildCAClient, registerAndEnrollUser, enrollAdmin } from './CAUtil.js'
import enrollUser from './enrollUser.js'

const PORT = process.env.PORT ?? 3001;
let credential;

const app = express();

app.use(bodyParser());

app.post('/api/enrolladmin', (req, res) =>{
    let data = req.body;
    console.log(data);
    res.end('ok');
    // enrollAdmin(data.name)
});

app.post('/api/enrolluser', (req, res) =>{
    let data = req.body;
    console.log(data);
    res.end('ok');
    enrollUser(data.name).then(credentials => {

        console.log(credentials)
    })
    
}
)
// Про регистрацию админа
// https://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html#first-the-application-enrolls-the-admin-user

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
