/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

import FabricCAServices from 'fabric-ca-client';
import Wallets from 'fabric-network';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';


export default async function enrollUser(name) {
    try {
        // load the network configuration
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));
        

        // Create a new CA client for interacting with the CA.
        const caInfo = connectionProfile.certificateAuthorities['ca.org2.example.com'];
        console.log(caInfo.caName)
        const caTLSCACerts = caInfo.tlsCACerts.pem; // сертификат организации

        console.log(connectionProfile.certificateAuthorities['ca.org2.example.com'].tlsCACerts.pem);

        const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), `../identity/user/isabella/wallet`); //${name}
        // https://hyperledger-fabric.readthedocs.io/en/latest/developapps/wallet.html?highlight=Wallets
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // +++++++++++++++++++++++++++++++++++++++++
        console.log(Wallets);
        // ++++++++++++++++++++++++++++++++++++++++




        // Check to see if we've already enrolled the admin user.
        // const userExists = await wallet.get(name);
        // if (userExists) {
        //     console.log('An identity for the client user "user1" already exists in the wallet');
        //     return;
        // }

        // Enroll the admin user, and import the new identity into the wallet.
        const enrollment = await ca.enroll({ enrollmentID: 'admin', enrollmentSecret: 'adminpw' });
        // console.log(enrollment);
        // console.log(enrollment.key._key.readCertPubKeyHex());
        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes(),
            },
            mspId: 'Org2MSP',
            type: 'X.509',
        };
        // await wallet.put(name, x509Identity);
        console.log('Successfully enrolled client user "isabella" and imported it into the wallet');
        // console.log(x509Identity.credentials)
        // return x509Identity.credentials;
    } catch (error) {
        console.error(`Failed to enroll client user ${name}: ${error}`);
        process.exit(1);
    }
}


// main();
