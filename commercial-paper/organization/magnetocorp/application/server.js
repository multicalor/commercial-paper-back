const express =  require("express");
const bodyParser =  require("body-parser");
// import { buildCAClient, registerAndEnrollUser, enrollAdmin } from './CAUtil.js'
const enrollAdmin =  require('./enrollAdmin.js');
// const issue =  require('./issue.js');
// const history =  require('./cpListener.js');




const PORT = process.env.PORT ?? 3001;
let enrollAdminFlag = true;
const app = express();

app.use(bodyParser());

app.post('/api/enrolladmin', (req, res) =>{
    if (enrollAdminFlag) {
        enrollAdminFlag = !enrollAdminFlag
        // enrollAdmin()
        console.log(enrollAdmin)
        enrollAdmin().then(data => {
            console.log(data)
            res.json(data);
        }
        );
        
    } else {
        let answer = 'User registration has already been completed'
        console.log(answer)
        res.send(answer);
    }
    
});

app.post('/api/registerUser', (req, res) =>{
    
        enrollUser().then(data => {
            console.log(data)
            res.json(data);
        }
        );
    
});

app.post('/api/issue', (req, res) =>{
    let data = req.body;
    console.log(data);
    issue()
    // .then(data => {
    //     console.log('test+++++++++', data)
    //     res.send(data)
    // });
    
});

app.post('/api/history', (req, res) =>{
    let data = req.body;
    console.log(data);
    history()
    // .then(data => {
    //     res.json(data);
    // });
    
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
