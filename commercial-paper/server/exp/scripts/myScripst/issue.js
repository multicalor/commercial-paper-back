/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * This application has 6 basic steps:
 * 1. Select an identity from a wallet
 * 2. Connect to network gateway
 * 3. Access PaperNet network
 * 4. Construct request to issue commercial paper
 * 5. Submit transaction
 * 6. Process response
 */

"use strict";

// Bring key classes into scope, most importantly Fabric SDK network class

const fs = require("fs");
const yaml = require("js-yaml");
const { Wallets, Gateway } = require("fabric-network");
// const pki = require('node-forge').pki;
// const { spawn } = require('child_process');
// const child = spawn('openssl', ['x509', '-subject', '-noout']);

// const certPem = fs.readFileSync('./certificates/Nikolay2.pem')
// child.stdin.write(certPem);

// let data = '';
// child.stdout.setEncoding('utf-8');
// child.stdout.on('data', (chunk) => {
//     console.log(chunk)
//     data += chunk
// });

// child.on('close', () => {
//     console.log(typeof data)
//     let org = data.slice(data.indexOf('org'), data.indexOf('org')+4)
//     let name = data.split(/[ |=|+|\n]/).reverse()[1]

//     console.log(org, name.length)
// });

// child.stdin.end();

const CommercialPaper = require("../../contract/lib/paper.js");
const { authentication, enrollment } = require("./utils/auth");
const { getConnectedProfile, pemParse } = require("./utils");

// 'issue', 'MagnetoCorp', '00001', '2020-05-31', '2020-11-30', '5000000'
// { name, paperNumber, org, releaseDate, redeemDate, cost }
// Main program function
module.exports = async function issue(
  userName,
  certificate,
  paperNumber,
  company,
  releaseDate,
  redeemDate,
  cost
) {
  let test = pemParse(certificate); //const { org, name }
  console.log('---->', test);
  const { connectionProfile, mspid } = getConnectedProfile(company);

  // const org = connectionProfile.client.organization.toLowerCase();

  const gateway = await authentication(
    certificate,
    privateKey,
    mspid,
    connectionProfile,
    userName + mspid
  );

  // const gateway = await enrollAdmin(mspid, ca, connectionProfile, userName, userPass);

  try {
    const network = await gateway.getNetwork("mychannel");

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
