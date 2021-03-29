/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

// import FabricCAServices from "fabric-ca-client";
// import { Wallets } from "fabric-network";
// import fs from "fs";
// import yaml from "js-yaml";
// import path from "path";
const FabricCAServices = require('fabric-ca-client');
const { Wallets } = require('fabric-network');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const user = 'user2'
const userPass = 'SdZgLqyjBfQD';
const admin = 'admin';
const adminPass = 'adminpw'


async function enrollUser(user, userPass, admin, adminPass) {
  try {
    // load the network configuration
    let connectionProfile = yaml.safeLoad(
      fs.readFileSync("../gateway/connection-org2.yaml", "utf8")
    );

    // Create a new CA client for interacting with the CA.
    const caInfo =
      connectionProfile.certificateAuthorities["ca.org2.example.com"];

    const caTLSCACerts = caInfo.tlsCACerts.pem;
    const ca = new FabricCAServices(
      caInfo.url,
      { trustedRoots: caTLSCACerts, verify: false },
      caInfo.caName
    );

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(
      process.cwd(),
      "../identity/user/isabella/wallet"
    );
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    //Check to see if we've already enrolled the admin user.
    const userExists = await wallet.get(user);
    if (userExists) {
      console.log(
        `An identity for the client user ${user} already exists in the wallet`
      );
      return;
    }

    // Enroll the admin user, and import the new identity into the wallet.
    const enrollment = await ca.enroll({
      enrollmentID: admin,
      enrollmentSecret: adminPass,
    });
    const x509Identity = {
      credentials: {
        certificate: enrollment.certificate,
        privateKey: enrollment.key.toBytes(),
      },
      mspId: "Org2MSP",
      type: "X.509",
    };
    await wallet.put(user, x509Identity);
    console.log(
      `Successfully enrolled client user ${user} and imported it into the wallet`
    );
    // return (x509Identity);
  } catch (error) {
    console.error(`Failed to enroll client user ${user}: ${error}`);
    process.exit(1);
  }
}

enrollUser(user, userPass, admin, adminPass)