'use strict';
// const wallet = require("./inMemoryWallet");
// const { Wallets } = require('fabric-network');
const { Gateway, InMemoryWallet, X509WalletMixin } = require ('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const fs = require('fs');
const path = require('path');
const enrollAdmin = require('./enrollAdmin')

const getConnectedProfile = require('./utils')

// let company = 'magnetocorp';
let name = 'Nikolay5'

async function registerUser(name, company) { // module.exports = 

    let mspid = {
        magnetocorp:'Org2MSP',
        digibank: 'Org1MSP'
    };
    
    const { connectionProfile, caInfo } = getConnectedProfile(mspid[company]);

    const org = connectionProfile.client.organization.toLowerCase();

    console.log(org)

    const ca = new FabricCAServices(caInfo.url)

    const gateway = await enrollAdmin(mspid[company], ca, connectionProfile);

    const admin = await gateway.getCurrentIdentity();

    const secret = await ca.register({
            affiliation: `${org}.department1`,
            enrollmentID: name,
            role: 'client',
        }, admin);

    const enrollment = await ca.enroll({
        enrollmentID: name,
        enrollmentSecret: secret
        });

    const x509Identity = {
        credentials: {
            certificate: enrollment.certificate,
            privateKey: enrollment.key.toBytes(),
        },
        mspId: mspid[company],
        type: 'X.509',
    };
    console.log(x509Identity)
    return x509Identity;   

    try {
        
  
        // return {x509Identity: x509Identity, password: secret, name: name };
    } catch (error) {
        console.error(`Failed to register user ${name}: ${error}`);
        process.exit(1);
    }
}

registerUser(name, 'magnetocorp')
// registerUser(name)

// exports.module.registerUser = registerUser;
