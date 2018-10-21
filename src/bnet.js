"use strict";

let apireq = require('apireq');

module.exports = class BnetLib {
    /**
     * Create a new BnetLib class, by passing in your access token
     * 
     * @param {string} accessToken 
     */
    constructor (accessToken) {
        if (!accessToken) {
            throw new Error('You must provide an access token when creating a new BnetLib');
        }

        this.accessToken = accessToken;
    }

    /**
     * Make an API call to the battlenet API
     * 
     * @param {string} method 
     * @param {string} path 
     * @param {object} requestBody 
     * @param {object} headers 
     */
    request (method, path, requestBody, headers) {
        headers = headers ? headers : {};
        headers.authorization = 'Bearer ' + this.accessToken;

        return apireq.request({
            request: {
                method: method,
                path: path,
                hostname: 'us.api.blizzard.com',
                protocol: 'https:',
                headers: headers
            },
            requestBody: requestBody,
            followRedirects: true
        });
    }
};

