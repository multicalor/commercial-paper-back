endpoint issue new paper

localhost:3000/api/issue

request:

    {
    certificate,
    privateKey,
    paperNumber,
    redeemDate,
    cost
    }
    

response:

    {

    class: 'org.papernet.commercialpaper',
    key: 'magnetocorp:00001',
    currentState: 1,
    issuer: 'magnetocorp',
    paperNumber: '00001',
    issueDateTime: '1617980600302',
    maturityDateTime: '2020-11-30',
    faceValue: 50,
    mspid: 'Org2MSP',
    owner: 'magnetocorp'
    }
