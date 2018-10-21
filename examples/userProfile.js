let bnet = require('./index.js');

bnet.clientAuth()
.then((response) => {
    console.log(response);
    let token = response.access_token;

    let lib = new bnet.BnetLib(token);

    return lib.request('GET', '/wow/character/wildhammer/adannim');
})
.then((response) => {
    console.log(response);
});