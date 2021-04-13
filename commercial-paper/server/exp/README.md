New user registration DigiBank:

endpoint:

POST: /api/registeruser

request:

    {
        "name": "username@email.com",
        "company": "org1"
    }

if you register on behalf of Magnetocorp, the company field changes to "company":"org2"

response:

    {
        "certificate": "-----BEGIN CERTIFICATE-----\nMIIChDCCAiqgAwIBAgIUCZMc4GZixU8pR
            +Zi9TJJOznTO7kwCgYIKoZIzj0EAwIw\naDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\nEwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\nY2Etc2VydmVyMB4XDTIxMDQxMjEzMDUwMFoXDTIyMDQxMjEzMTAwMFowSDEwMA0G\nA1UECxMGY2xpZW50MAsGA1UECxMEb3JnMjASBgNVBAsTC2RlcGFydG1lbnQxMRQw\nEgYDVQQDDAtzYW1AdXNhLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABA8t\n+qEAwl5r6JoKePH+Nptro9mAMHcTGpfYUN1p/WIgvb84yyYgE8g5ru+zJYkFe95X\nk06wdEI1JznK8fD8LK2jgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\nMAAwHQYDVR0OBBYEFAqJbOsHtyI05lvgD2/FcUfgBf6EMB8GA1UdIwQYMBaAFMK0\nKN2qTswAY+B9TUYvLXR/Xdl8MG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\nZmlsaWF0aW9uIjoib3JnMi5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\nInNhbUB1c2EuY29tIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\nADBFAiEAyZeL9X3UO1ctYkE4hZqWBbhIgcLVR0aVMTy4j3DD+rACIB2zuRodsUqI\nXtbUrsG8Io1oHfAPCmwz93ZbYSilGuSy\n-----END CERTIFICATE-----\n",

        "privateKey": "-----BEGIN PRIVATE 
            KEY-----\r\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg1Tz5d4JGmiKI5wnI\r\nrXSu2VwrQ13XdV7NMP0/vIvzvKmhRANCAAQPLfqhAMJea+iaCnjx/jaba6PZgDB3\r\nExqX2FDdaf1iIL2/OMsmIBPIOa7vsyWJBXveV5NOsHRCNSc5yvHw/Cyt\r\n-----END PRIVATE KEY-----\r\n",

        "company": "org2"

    }

Login registered user:

endpoint:

GET: /api/login

    {
        "certificate": "-----BEGIN CERTIFICATE-----\nMIIChDCCAiqgAwIBAgIUCZMc4GZixU8pR+Zi9TJJOznTO7kwCgYIKoZIzj0EAwIw\naDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\nEwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\nY2Etc2VydmVyMB4XDTIxMDQxMjEzMDUwMFoXDTIyMDQxMjEzMTAwMFowSDEwMA0G\nA1UECxMGY2xpZW50MAsGA1UECxMEb3JnMjASBgNVBAsTC2RlcGFydG1lbnQxMRQw\nEgYDVQQDDAtzYW1AdXNhLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABA8t\n+qEAwl5r6JoKePH+Nptro9mAMHcTGpfYUN1p/WIgvb84yyYgE8g5ru+zJYkFe95X\nk06wdEI1JznK8fD8LK2jgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\nMAAwHQYDVR0OBBYEFAqJbOsHtyI05lvgD2/FcUfgBf6EMB8GA1UdIwQYMBaAFMK0\nKN2qTswAY+B9TUYvLXR/Xdl8MG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\nZmlsaWF0aW9uIjoib3JnMi5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\nInNhbUB1c2EuY29tIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\nADBFAiEAyZeL9X3UO1ctYkE4hZqWBbhIgcLVR0aVMTy4j3DD+rACIB2zuRodsUqI\nXtbUrsG8Io1oHfAPCmwz93ZbYSilGuSy\n-----END CERTIFICATE-----\n",

        "privateKey": "-----BEGIN PRIVATE KEY-----\r\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg1Tz5d4JGmiKI5wnI\r\nrXSu2VwrQ13XdV7NMP0/vIvzvKmhRANCAAQPLfqhAMJea+iaCnjx/jaba6PZgDB3\r\nExqX2FDdaf1iIL2/OMsmIBPIOa7vsyWJBXveV5NOsHRCNSc5yvHw/Cyt\r\n-----END PRIVATE KEY-----\r\n",
    }

Issue of new commercial paper on behalf of "Magnetocorp" company.

endpoint:

POST: /api/issue

request:

    {
    certificate,
    privateKey,
    paperNumber,
    redeemDate,
    cost
    }

response:

    Key: "org.papernet.commercialpaper00001",
    Record:{
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 1,
        issuer: 'magnetocorp',
        paperNumber: '00001',
        issueDateTime: '13.04.2021',
        maturityDateTime: '09.04.2021',
        faceValue: 50,
        mspid: 'Org2MSP',
        owner: 'magnetocorp'
    }

Buy commercial paper.

endpoint:

PUT: /api/buy

response:

    {
    certificate: '-----BEGIN CERTIFICATE-----\n' +
        'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
        'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
        'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
        'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
        'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
        'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
        'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
        'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
        'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
        'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
        'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
        'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
        'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
        'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
        '-----END CERTIFICATE-----',
        
    privateKey: '-----BEGIN PRIVATE KEY-----\n' +
        'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
        'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
        '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
        '-----END PRIVATE KEY-----',

    paperNumber: '00001',

    releaseDate: '11.04.2021',

    maturityDateTime: '09.04.2021',

    faceValue: '49',

    owner: 'magnetocorp',

    issuer: 'magnetocorp'
}

request:

    {
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 3,
        faceValue: 50,
        issueDateTime: '13.04.2021',
        issuer: 'magnetocorp',
        maturityDateTime: '13.04.2022',
        mspid: 'Org1MSP',
        owner: 'digibank',
        paperNumber: '00001'
    }


Redeem commercial paper.

endpoint:

PUT: /api/redeem

    response:
    certificate: '-----BEGIN CERTIFICATE-----\n' +
        'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
        'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
        'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
        'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
        'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
        'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
        'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
        'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
        'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
        'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
        'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
        'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
        'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
        'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
        '-----END CERTIFICATE-----',
    privateKey: '-----BEGIN PRIVATE KEY-----\n' +
        'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
        'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
        '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
        '-----END PRIVATE KEY-----',
    issuer: 'magnetocorp',
    paperNumber: '00001',
    issuingOwnerMSP: 'Org2MSP',
    maturityDateTime: '09.04.2021'
    }

request:

    {
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 4,
        faceValue: 44444,
        issueDateTime: '13.04.2021',
        issuer: 'magnetocorp',
        maturityDateTime: '13.04.2022',
        mspid: 'Org2MSP',
        owner: 'magnetocorp',
        paperNumber: '00001',
        redeemDateTime: '09.04.2021'
    }