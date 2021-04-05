
"use strict";

const { Gateway, X509WalletMixin, InMemoryWallet } = require('fabric-network');


module.exports = async function enrollAdmin(mspid, ca, connectionProfile) {
  
  const admin = 'admin';
  const adminPass = 'adminpw';
  
  try {
    // Create a new CA client for interacting with the CA.
// ,{ trustedRoots: caTLSCACerts, verify: false }, caInfo.caName

    const enrollmentAdmin = await ca.enroll({ enrollmentID: admin, enrollmentSecret: adminPass });

    const identity = {
      label: 'client',
      certificate: enrollmentAdmin.certificate,
      privateKey: enrollmentAdmin.key.toBytes(),
      mspId: mspid,
    };

    const mixin = X509WalletMixin.createIdentity(
      mspid,
      identity.certificate,
      identity.privateKey
      );

    const wallet = new InMemoryWallet();

    await wallet.import(identity.label, mixin);

    const connectionOptions = {
      identity: identity.label,
      wallet,
      discovery: { enabled: true, asLocalhost: true },
    };

    const gateway = new Gateway();

    await gateway.connect(connectionProfile, connectionOptions);

    return gateway;

  } catch (error) {
    console.error(`Failed to enroll client ${admin}: ${error}`);
    process.exit(1);
  }
}

// let wallets = {}

// mspIdList.forEach(mspid => {
//   wallets["admin" + mspid] = enrollAdmin(mspid)
// })
  
// export const adminsWallets = wallets;
// enrollAdmin(mspid, walletsStore)