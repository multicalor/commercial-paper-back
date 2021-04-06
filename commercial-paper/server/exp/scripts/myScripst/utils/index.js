const { Gateway, InMemoryWallet } = require("fabric-network");
const FabricCAServices = require("fabric-ca-client");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { Console } = require("console");
const { spawn } = require("child_process");
const pki = require("node-forge").pki;

module.exports.getConnectedProfile = function getConnectedProfile(company) {
  try {
    let mspId = {
      magnetocorp: "Org2MSP",
      digibank: "Org1MSP",
    };

    let ccpPath;
    let connectionProfile;
    let caInfo;
    let caTLSCACerts;
    let mspid = mspId[company];
    let ca;

    switch (mspid) {
      case "Org1MSP":
        // load the network configuration
        ccpPath = path.resolve("../exp/gateway/connection-org1.yaml");

        connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath, "utf8"));
        caInfo =
          connectionProfile.certificateAuthorities["ca.org1.example.com"];
        caTLSCACerts = caInfo.tlsCACerts.pem;
        ca = new FabricCAServices(caInfo.url);
        return { connectionProfile, ca, caTLSCACerts, mspid };
        break;

      case "Org2MSP":
        // load the network configuration
        ccpPath = path.resolve("../exp/gateway/connection-org2.yaml");
        connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath, "utf8"));
        caInfo =
          connectionProfile.certificateAuthorities["ca.org2.example.com"];
        caTLSCACerts = caInfo.tlsCACerts.pem;
        ca = new FabricCAServices(caInfo.url);
        return { connectionProfile, ca, caTLSCACerts, mspid };
        break;

      default:
        return { error: "Invalid company mspid." };
    }
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};

module.exports.pemParse = function pemParse(pemStr) {
    console.log(pemStr)
  //   const cert = pki.certificateFromPem(pemStr);
  // const subject = cert.subject.attributes
  //   .map(attr => [attr.shortName, attr.value].join('='))
  //   .join(', ');

  // console.log(subject); // "C=US, ST=California, ..."
  // return subject
  const child = spawn("openssl", ["x509", "-subject", "-noout"]);

  let org
  let name
  child.stdin.write(pemStr);

  let data = "";
  child.stdout.setEncoding("utf-8");
  child.stdout.on("data", (chunk) => {
    console.log(chunk);
    data += chunk;
  });
  child.on("close", () => {
    console.log(data);

    org = data.slice(data.indexOf("org"), data.indexOf("org") + 4);
    name = data.split(/[ |=|+|\n]/).reverse()[1];
    
  });
  child.stdin.end();
  return { name, org };
  // child.on("close", () => {
  //   console.log(org, name);
  // });
  // console.log("1", org, name);

  // console.log("2", org, name);
};
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
