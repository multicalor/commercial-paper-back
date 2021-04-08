const { authentication } = require("./auth");
const { getConnectedProfile, pemParse } = require("./index.js");

module.exports.login = async function login(certificate, privateKey) {
  try {
    const {name, company} = pemParse(certificate);

    const { connectionProfile, mspid } = getConnectedProfile(company);

    let gateway = await authentication(
      certificate,
      privateKey,
      mspid,
      connectionProfile,
      name
    );

    return { gateway, company, name };
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {
    console.log("Disconnect from Fabric gateway.");
  }
};
