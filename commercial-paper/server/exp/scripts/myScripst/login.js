const { authentication } = require("./utils/auth");
const { getConnectedProfile, pemParse } = require("./utils");

module.exports = async function login(
    certificate,
    privateKey,

  ) {
      
    let company

      try {
    
      let {org, name} = pemParse(certificate);
  
      let company;
  
      
      switch (org) {
          case "org1":
              company  = 'digibank'
            break;
    
          case "org2":
              company  = 'magnetocorp'
            break;
    
          default:
            return { error: "Invalid company mspid." };
        }
      
    const { connectionProfile, mspid } = getConnectedProfile(company);
  
      //   console.log(certificate,'\\\\\\\\\\\\\\' , privateKey)     
    const gateway = await authentication(
      certificate,
      privateKey,
      mspid,
      connectionProfile,
      name + mspid
    );
    console.log('1========1')
  
    console.log(gateway)
    
    // const network = await gateway.getNetwork("mychannel");

  
    
    } catch (error) {
      console.log(`Error processing transaction. ${error}`);
      console.log(error.stack);
      company = null;
    } finally {
      // Disconnect from the gateway
      console.log("Disconnect from Fabric gateway.");

      gateway.disconnect();
      return company
    }
  };