const { Gateway, InMemoryWallet } = require('fabric-network');
const FabricCAService = require ('fabric-ca-client');
const fs = require ('fs');
const path = require ('path');
const yaml = require ('js-yaml');

module.exports = function getConnectedProfile (company) {

    let mspid = {
        magnetocorp:'Org2MSP',
        digibank: 'Org1MSP'
    };

  try {

    let ccpPath;
    let connectionProfile;
    let caInfo;
    let caTLSCACerts;
    let mspid = mspid[company];

    switch(mspid) {

        case 'Org1MSP':
          // load the network configuration
          ccpPath = path.resolve('../../gateway/connection-org1.yaml'); //myScripst
          connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath , 'utf8'));
          caInfo = connectionProfile.certificateAuthorities['ca.org1.example.com']
          caTLSCACerts = caInfo.tlsCACerts.pem;
          const ca = new FabricCAServices(caInfo.url)
          return {connectionProfile, ca, caTLSCACerts, mspid}
        break;
    
        case 'Org2MSP':
          // load the network configuration
          ccpPath = path.resolve('../../gateway/connection-org2.yaml')
          connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath , 'utf8'));
          caInfo = connectionProfile.certificateAuthorities['ca.org2.example.com']
          caTLSCACerts = caInfo.tlsCACerts.pem;
          return {connectionProfile, ca, caTLSCACerts}
        break;
    
        default:
          return ({ error: 'Invalid company mspid.'})
      }
  }catch (e){
    console.error(e)
    throw new Error(e.message)
  }
}
// export const getConnectedWallet = async (label, mixin) => {
//   const wallet = new InMemoryWallet();
//   await wallet.import(label, mixin);
//   const gateway = new Gateway();
//   const connectionProfile = yaml.safeLoad(
//     fs.readFileSync(path.resolve(__dirname, '../gateway/networkConnection.yaml'), 'utf8'),
//   );
//   const connectionOptions = {
//     identity: label,
//     wallet,
//     discovery: { enabled: true, asLocalhost: true },
//   };
//   await gateway.connect(connectionProfile, connectionOptions);
//   return gateway;
// }
// export const registerUser = async (ca, adminWallet, userData) => {
//   try {
//     await ca.register({
//       enrollmentID: userData.login,
//       enrollmentSecret: userData.password,
//       role: 'peer',
//       affiliation: `org1.${userData.affiliation}`,
//       maxEnrollments: -1,
//     }, adminWallet);
//   }
//   catch (e) {
//     console.error(e.message)
//     throw new Error(e.message);
//   }
// }

// export const sendTransaction = async(gateway, transaction) => {
//   try {
//     // console.log(await gateway.getChannel())

//     const network = await gateway.getNetwork('testchannel');
//     const contract = await network.getContract('recordcontract',
//       'org.fabric.studentRecordsStorage');
//     const issueResponse = await contract.submitTransaction(transaction.name, ...transaction.props);
//     return JSON.parse(issueResponse.toString());
//   }
//   catch (error) {
//     console.log(`Error processing transaction. ${error.stack}`);
//     gateway.disconnect();
//     return null;
//   }
// }