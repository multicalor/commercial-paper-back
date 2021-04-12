const CommercialPaper = require("../contract/lib/paper.js");
const { login } = require("./utils/login.js");

module.exports = async function queryApp(certificate, privateKey, paperNumber) {
  const { network, gateway } = await login(certificate, privateKey);
  company = "magnetocorp";
  let queryResponse;
  try {
    // Get addressability to commercial paper contract
    console.log("Use org.papernet.commercialpaper smart contract.");

    const contract = await network.getContract(
      "papercontract",
      "org.papernet.commercialpaper"
    );

    console.log(
      "-----------------------------------------------------------------------------------------"
    );
    console.log("****** Submitting commercial paper queries ****** \n\n ");

    // 1 asset history

    console.log("1. Query Commercial Paper History....");
    console.log(
      "-----------------------------------------------------------------------------------------\n"
    );
    if (paperNumber !== "all") {
      queryResponse = await contract.evaluateTransaction(
        "queryHistory",
        company,
        paperNumber
      );

    } else {
      queryResponse = await contract.evaluateTransaction(
        "queryPartial",
        company
      );
    }
    let json = JSON.parse(queryResponse.toString());
    return json;
    
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {
    // Disconnect from the gateway
    console.log("Disconnect from Fabric gateway.");
    gateway.disconnect();
  }
};
