const { authentication } = require("./auth");
const { getConnectedProfile, pemParse } = require("./index.js");

module.exports.login = async function login(certificate, privateKey, flag) {
  try {
    const { name, org, company } = pemParse(certificate);

    const { connectionProfile, mspid } = getConnectedProfile(org);

    let gateway = await authentication(
      certificate,
      privateKey,
      mspid,
      connectionProfile,
      name
    );
    console.log("<------------------------------------------>");
    const network = await gateway.getNetwork("mychannel");
    console.log("<------------------------------------------>");
    if (flag === 'login') {
      gateway.disconnect();

      return { org, name };
    }
    return { network, gateway, org, company, name, mspid };
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {
    console.log("Disconnect from Fabric gateway.");
  }
};
