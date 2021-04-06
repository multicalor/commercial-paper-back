'use strict';

const { InMemoryWallet } = require("fabric-network");

const enrollAdmin = require('./enrollAdmin')

const getConnectedProfile = require('./utils')

const { enrollment } = require('./utils/auth')

module.exports = async function registerUser(name, company) {


    try {

    const { connectionProfile, ca, mspid } = getConnectedProfile(company);

    const org = connectionProfile.client.organization.toLowerCase();

    // Как при каждой регистрации не инролить нового админа???????

    const gateway = await enrollAdmin(mspid, ca, connectionProfile, 'admin', 'adminpw');

    const admin = await gateway.getCurrentIdentity();

    const secret = await ca.register({
            affiliation: `${org}.department1`,
            enrollmentID: name,
            role: 'client',
        }, admin);

    const {certificate, privateKey} = await enrollment(ca, mspid, name, secret)

    return {certificate, privateKey};   //, secret


    } catch (error) {
        console.log(`Failed to register user ${name}: ${error}`) ;
        process.exit(1);
        
    }
}

