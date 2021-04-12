const CommercialPaper = require("../contract/lib/paper.js");
const { login } = require("./utils/login.js");

// const enrollAdmin = require('./enrollAdmin')
// const { getConnectedProfile } = require('./utils')
// 'issue', 'MagnetoCorp', '00001', '2020-05-31', '2020-11-30', '5000000'

module.exports = async function issue(
  certificate,
  privateKey,
  paperNumber,
  redeemDate,
  cost
) {
  const { network, company, gateway } = await login(certificate, privateKey);
  try {
    
    if (!paperNumber) paperNumber = '00001';
    else{;
      intPaperNumber = (+paperNumber) + 1
      paperNumber = (intPaperNumber+'').padStart(5, '0');
      console.log(paperNumber);
    }

    let date = new Date()
    currentDate = date.toLocaleDateString()

    const contract = await network.getContract("papercontract");


    console.log("Submit commercial paper issue transaction.");

    const issueResponse = await contract.submitTransaction(
      "issue",
      company,
      paperNumber,
      currentDate,
      redeemDate,
      cost
    );

    console.log("Process issue transaction response." + issueResponse);

    let paper = CommercialPaper.fromBuffer(issueResponse);

    console.log(
      `${paper.issuer} commercial paper : ${paper.paperNumber} successfully issued for value ${paper.faceValue}`
    );
    console.log("Transaction complete.");
    gateway.disconnect();
    console.log({Key: paper.class+paper.paperNumber})
    return { Key: paper.class + paper.paperNumber, Record: paper };
    
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {

    console.log("Disconnect from Fabric gateway.");
    
  }
};

