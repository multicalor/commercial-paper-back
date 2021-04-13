const CommercialPaper = require('../contract/lib/paper.js');
const { login } = require("./utils/login.js");


// Main program function
module.exports = async function redeem(certificate, privateKey, issuer, paperNumber, redeemDateTime) { 

  const { network, gateway, company } = await login(certificate, privateKey);
  let issuingOwnerMSP = {
    magnetocorp: 'Org2MSP',
  }
 try{

    const contract = await network.getContract('papercontract', 'org.papernet.commercialpaper');

    console.log('Submit commercial paper redeem transaction.'); 
                                                                   // issuer, paperNumber, redeemingOwner, issuingOwnerMSP, redeemDateTime
    const redeemResponse = await contract.submitTransaction('redeem', issuer, paperNumber, company, issuingOwnerMSP[issuer], redeemDateTime);

    let paper = CommercialPaper.fromBuffer(redeemResponse);

    console.log(`${paper.issuer} commercial paper : ${paper.paperNumber} successfully redeemed with ${paper.owner}`);

    return paper
  } catch (error) {

    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);

  } finally {

    console.log('Disconnect from Fabric gateway.')
    gateway.disconnect();

  }
}
