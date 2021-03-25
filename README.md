# HlF
Get project.



0. Prerequisites for Linux

Install the latest version of git if it is not already installed.
Enter the command in the terminal:

    sudo apt-get install git

Install the latest version of cURL if it is not already installed.
Enter the command in the terminal:

    sudo apt-get install curl

Install the latest version of Docker if it is not already installed.
Enter the command in the terminal:

    sudo apt-get -y install docker-compose

Add your user to the Docker group.
Enter the command in the terminal:

    sudo usermod -a -G docker <username>

Download project from git.
From the project folder, run the command in the terminal:

    git clone git@github.com:multicalor/hf.git

Download binaries.
Enter the project dir and run the command in the terminal:

    cd hl
    chmod +x
    ./bootstrap.sh

Prerequisites COMPLETE!

1. Create the network
Get project.

    git clone git@github.com:multicalor/HlF.git

From the project root folder.
Enter the command in the terminal:

    cd commercial-paper
    ./network-starter.sh

Create the network COMPLETE!


2. Deploy the smart contract to the channel.

2. 0. Install and approve the smart contract as MagnetoCorp.

Open new terminal from project root dir ENTER command:
Enter the command in the terminal:

    cd /commercial-paper/organization/magnetocorp

    source magnetocorp.sh

    peer lifecycle chaincode package cp.tar.gz --lang node --path ./contract --label cp_0

    peer lifecycle chaincode install cp.tar.gz

OUTPUT:

    2021-03-20 14:14:18.991 EET [cli.lifecycle.chaincode] submitInstallProposal -> INFO 002 cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a

COPY line from output after "Chaincode code package identifier: "
an example of a copied string "cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a" (your string may be different)

paste the copied line after the command "export PACKAGE_ID=" + "cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a" (your string may be different)

    export PACKAGE_ID=cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a

ENTER:

    fabric-samples/commercial-paper/organization/magnetocorp$

Get PACKAGE_ID
OPTION:

    peer lifecycle chaincode queryinstalled

SET:

    export PACKAGE_ID=cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a

Deploy the smart contract to the channel COMPLETE!

2. 1. Approve the chaincode definition for MagnetoCorp.
ENTER:

    peer lifecycle chaincode approveformyorg --orderer localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name papercontract -v 0 --package-id $PACKAGE_ID --sequence 1 --tls --cafile $ORDERER_CA

OUt
    2021-03-21 23:54:56.741 EET [chaincodeCmd] ClientWait -> INFO 001 txid [31b6b54148dc1f5ea1b96ec5d82b5de07fe6537a69bd1230f606d9906be2aa83] committed with status (VALID) at localhost:9051

    Approve the chaincode definition for MagnetoCorp COMPLETE!

Approve the chaincode definition for MagnetoCorp COMPLETE!

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
3. 0. Install chaincode for digiBank.
Open new terminal from project root dir ENTER command:

    cd fabric-samples/commercial-paper/organization/digibank

    source ./digibank.sh

OUT:

    Using organization 1
    Using organization 1
    }
    }
    }
    }
    export BASH_FUNC_errorln%%="() {  println "${C_RED}${1}${C_RESET}""
    export BASH_FUNC_infoln%%="() {  println "${C_BLUE}${1}${C_RESET}""
    export BASH_FUNC_successln%%="() {  println "${C_GREEN}${1}${C_RESET}""
    export BASH_FUNC_warnln%%="() {  println "${C_YELLOW}${1}${C_RESET}""
    export CORE_PEER_ADDRESS="localhost:7051"
    export CORE_PEER_LOCALMSPID="Org1MSP"
    export CORE_PEER_MSPCONFIGPATH="/home/prg/prg/482/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp"
    export CORE_PEER_TLS_ENABLED="true"
    export CORE_PEER_TLS_ROOTCERT_FILE="/home/prg/prg/482/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt"
    export FABRIC_CFG_PATH="/home/prg/prg/482/fabric-samples/commercial-paper/organization/digibank/../../../config"
    export ORDERER_ADMIN_TLS_PRIVATE_KEY="/home/prg/prg/482/fabric-samples/test-network/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/server.key"
    export ORDERER_ADMIN_TLS_SIGN_CERT="/home/prg/prg/482/fabric-samples/test-network/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/server.crt"
    export ORDERER_CA="/home/prg/prg/482/fabric-samples/test-network/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem"
    export PATH="/home/prg/prg/482/fabric-samples/commercial-paper/organization/digibank/../../../bin:/home/prg/prg/482/fabric-samples/test-network:/home/prg/.nvm/versions/node/v12.0.0/bin:/home/prg/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
    export PEER0_ORG1_CA="/home/prg/prg/482/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt"
    export PEER0_ORG2_CA="/home/prg/prg/482/fabric-samples/test-network/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt"
    export PEER0_ORG3_CA="/home/prg/prg/482/fabric-samples/test-network/organizations/peerOrganizations/org3.example.com/peers/peer0.org3.example.com/tls/ca.crt"

ENTER:

    peer lifecycle chaincode package cp.tar.gz --lang node --path ./contract --label cp_0

    fabric-samples/commercial-paper/organization/digibank$

    peer lifecycle chaincode install cp.tar.gz

OUT:

    2021-03-22 00:07:28.650 EET [cli.lifecycle.chaincode] submitInstallProposal -> INFO 001 Installed remotely: response:<status:200 payload:"\nEcp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a\022\004cp_0" >
    2021-03-22 00:07:28.652 EET [cli.lifecycle.chaincode] submitInstallProposal -> INFO 002 Chaincode code package identifier: cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a

COPY line from output after "Chaincode code package identifier: "
an example of a copied string "cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a" (your string may be different)

paste the copied line after the command "export PACKAGE_ID=" + "cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a" (your string may be different)

ENTER:

    export PACKAGE_ID=cp_0:ddca913c004eb34f36dfb0b4c0bcc6d4afc1fa823520bb5966a3bfcf1808f40a

Get PACKAGE_ID
OPTION:

    peer lifecycle chaincode queryinstalled



3. 1. Approve the chaincode definition for DigiBank
ENTER: 

    fabric-samples/commercial-paper/organization/digibank$

    peer lifecycle chaincode approveformyorg --orderer localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name papercontract -v 0 --package-id $PACKAGE_ID --sequence 1 --tls --cafile $ORDERER_CA

OUT:

    2021-03-22 00:12:42.281 EET [chaincodeCmd] ClientWait -> INFO 001 txid [cc80399ec549a80263796312e380e4e73ada7c4d157479f5a161ece68ba802de] committed with status (VALID) at localhost:7051

Install chaincode for digiBank COMPLETE!

4. Commit the chaincode definition to the channel.
ENTER:

    peer lifecycle chaincode commit -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --peerAddresses localhost:7051 --tlsRootCertFiles ${PEER0_ORG1_CA} --peerAddresses localhost:9051 --tlsRootCertFiles ${PEER0_ORG2_CA} --channelID mychannel --name papercontract -v 0 --sequence 1 --tls --cafile $ORDERER_CA --waitForEvent

OUT:

    2021-03-24 11:31:41.510 EET [chaincodeCmd] ClientWait -> INFO 001 txid [5ee8e2a5abe6f2ff6b47ce5c9a2828f485a95e5ccd8d9bc56abf16e1662fc76b] committed with status (VALID) at localhost:7051

    2021-03-24 11:31:41.649 EET [chaincodeCmd] ClientWait -> INFO 002 txid [5ee8e2a5abe6f2ff6b47ce5c9a2828f485a95e5ccd8d9bc56abf16e1662fc76b] committed with status (VALID) at localhost:9051

Commit the chaincode definition to the channel COMPLETE!

5. Instale app js.
Open new terminal from project root dir ENTER command:
ENTER:

    cd fabric-samples/commercial-paper/organization/magnetocorp/application

Intall npm module.

    nvm i 15.0.1
    npm i

OPTIONS: for manual use app from terminal.

    node enrollUser.js
    node issue.js

Open new terminal from project root dir ENTER command:
ENTER:

    cd fabric-samples/commercial-paper/organization/magnetocorp/application

    nvm i 15.0.1
    npm i


OPTIONS: for manual use app from terminal.

    node enrollUser.js
    node buy.js
    node redeem.js
    
+++++++++++++++++++++++++++++++++++++++++++++++++++++

Useful links

https://docs.google.com/document/d/1oJUy5Q8gu5i9L6uUsTFW-njdSQR8flHw_xhXAYH8yN4/edit
Полезные ссылки
https://habr.com/ru/company/ibm/blog/444874/
https://kctheservant.medium.com/an-implementation-of-api-server-for-hyperledger-fabric-network-8764c79f1a87
https://www.blockchainexpert.uk/blog/step-by-step-guide-to-install-hyperledger-in-ubuntu
https://medium.com/coinmonks/install-and-configure-hyperledger-fabric-v1-4-on-ubuntu-18-04-3-lts-2ccbc7176887
https://developer.mozilla.org/ru/docs/Web/API/Body/json
https://hyperledger-fabric.readthedocs.io/en/latest/deployorderer/ordererdeploy.html?highlight=binary%20get#start-the-orderer
