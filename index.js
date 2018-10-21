let config = require('./config.json');
let apireq = require('apireq');

/**
 * Request a client access token for use with the battlenet API
 * 
 * @returns Promise This promise resolves to an object with three fields. access_token contains a string with your access token, token_type will always contain 'bearer', expires_in contains an integer with the amount of seconds remaining until the acess token expires.
 */
module.exports.clientAuth = function () {
    return apireq.request({
        request: {
            method: 'POST',
            path: '/oauth/token',
            hostname: 'us.battle.net',
            protocol: 'https:',
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        },
        basicAuth: {
            un: config.clientID,
            pw: config.clientSecret
        },
        requestBody: 'grant_type=client_credentials',
    })
    .then((response) => {
        return response.body;
    });
};

module.exports.BnetLib = require('./src/bnet.js');