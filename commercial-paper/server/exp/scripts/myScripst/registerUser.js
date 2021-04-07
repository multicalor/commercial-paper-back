'use strict';

const enrollAdmin = require('./enrollAdmin')
const issue = require('./issue')


const { getConnectedProfile } = require('./utils')

const { enrollment } = require('./utils/auth')

module.exports = async function registerUser(name, company) {

    try {
        console.log(company)
    const { connectionProfile, ca, mspid } = getConnectedProfile(company);
    console.log(connectionProfile, mspid)

    const org = connectionProfile.client.organization.toLowerCase();
    console.log('+++++++')
    const gateway = await enrollAdmin(mspid, ca, connectionProfile, 'admin', 'adminpw');

        

    const admin = await gateway.getCurrentIdentity();
    console.log(`${org}.department1`)

    const secret = await ca.register({
            affiliation: `${org}.department1`,
            enrollmentID: name,
            role: 'client',
        }, admin);
        console.log(secret)

        // console.log(certificate, privateKey)
    //     await issue(certificate, privateKey, '00001', '2020-05-31', '2020-11-30', '5000000')
    const { certificate, privateKey } = await enrollment(ca, mspid, name, secret)
        console.log('victory------------------->',certificate, privateKey)
    return { certificate, privateKey }


    } catch (error) {
        console.log(`Failed to register user ${name}: ${error}`) ;
        process.exit(1);
        
    }
}

