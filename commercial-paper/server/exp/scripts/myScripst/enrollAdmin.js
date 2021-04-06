
"use strict";

// const { Gateway, X509WalletMixin, InMemoryWallet } = require('fabric-network');
const { authentication, enrollment } = require('./utils/auth')


module.exports = async function enrollAdmin(mspid, ca, connectionProfile, admin='admin', adminPass='adminpw') {
   
  try {
    // Enroll admin
    const identity = await enrollment(ca, mspid, admin, adminPass, "admin",)

    // auth admin
    const gateway = await authentication(identity.certificate, identity.privateKey, mspid, connectionProfile, identity.label);
    // console.log('gateway----------------------->', gateway)

    return gateway;
    
  } catch (error) {
    console.error(`Failed to enroll client ${admin}: ${error}`);
    process.exit(1);
  }
}

