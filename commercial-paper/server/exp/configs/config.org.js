
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

let name = 'admin';
let admin = 'admin'
let adminPass = 'adminpw'

const config = {
  magnetocorp: {
    connectionProfile: yaml.safeLoad(
      fs.readFileSync("../gateway/connection-org2.yaml", "utf8")
    ),
    caInfo :this.connectionProfile.certificateAuthorities["ca.org2.example.com"],
      
    mspId: "Org2MSP",

    affiliation: 'org2.department1',

    admin: {
        name:"admin",
        admin:"admin",
        pass:"adminpw",
        affiliation: 'org2.department1',
    }
  },

  digibank: {


    
    connectionProfile: yaml.safeLoad(
      fs.readFileSync("../gateway/connection-org2.yaml", "utf8")
    ),
    caInfo :this.connectionProfile.certificateAuthorities["ca.org2.example.com"],
      
    mspId: "Org2MSP",

    affiliation: 'org2.department1',

    admin: {
        name:"admin",
        admin:"admin",
        pass:"adminpw",
        affiliation: 'org2.department1',
    }
  },


};
