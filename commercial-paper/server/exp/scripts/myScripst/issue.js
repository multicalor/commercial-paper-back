const CommercialPaper = require("../../contract/lib/paper.js");
const { authentication } = require("./utils/auth");
const { getConnectedProfile, pemParse } = require("./utils");
const enrollAdmin = require('./enrollAdmin')
// const { getConnectedProfile } = require('./utils')
// 'issue', 'MagnetoCorp', '00001', '2020-05-31', '2020-11-30', '5000000'

module.exports = async function issue(
  certificate,
  privateKey,
  paperNumber,
  releaseDate,
  redeemDate,
  cost
) {
    try {
    let {org, name} = pemParse(certificate);
   
    // let name = 'nikolay15@digibank.com';
    // let org = 'org2'
    let company;
 console.log('------------>',org, name)
    
    switch (org) {
        case "org1":
            company  = 'digibank'
          break;
  
        case "org2":
            company  = 'magnetocorp'
          break;
  
        default:
          return { error: "Invalid company mspid." };
      }
  const { connectionProfile, ca, mspid } = getConnectedProfile(company);
  
  const gateway = await enrollAdmin(mspid, ca, connectionProfile, admin='admin', adminPass='adminpw')

  // const { connectionProfile, mspid } = getConnectedProfile(company);
  // const gateway = await enrollAdmin(mspid, ca, connectionProfile, 'admin', 'adminpw');
  // const gateway = await authentication(
  //   certificate,
  //   privateKey,
  //   mspid,
  //   connectionProfile,
  //   name
  // );
  // console.log('1========1')

    console.log('------------>',gateway)
  
    const network = await gateway.getNetwork("mychannel");
    console.log('2========2')
    const contract = await network.getContract("papercontract");

    // issue commercial paper
    console.log("Submit commercial paper issue transaction.");

    const issueResponse = await contract.submitTransaction(
      "issue",
      company,
      paperNumber,
      releaseDate,
      redeemDate,
      cost
    );

    // process response
    console.log("Process issue transaction response." + issueResponse);

    let paper = CommercialPaper.fromBuffer(issueResponse);

    console.log(
      `${paper.issuer} commercial paper : ${paper.paperNumber} successfully issued for value ${paper.faceValue}`
    );
    console.log("Transaction complete.");

    return paper;
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {
    // Disconnect from the gateway
    console.log("Disconnect from Fabric gateway.");
    gateway.disconnect();
  }
};


// 'issue', 'MagnetoCorp', '00001', '2020-05-31', '2020-11-30', '5000000'
// { name, paperNumber, org, releaseDate, redeemDate, cost }
// Main program function
// issue(name)
// exports.module.issue = issue;

// main().then(() => {

//     console.log('Issue program complete.');

// }).catch((e) => {

//     console.log('Issue program exception.');
//     console.log(e);
//     console.log(e.stack);
//     process.exit(-1);

// });
