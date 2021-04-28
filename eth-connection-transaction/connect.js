var Web3 = require("web3");
var web3 = new Web3("HTTP://127.0.0.1:7545");

web3.eth.getTransactionCount('0x5D09A964d271abdE484D8fE2f00226d5650Ae661').then(console.log);
