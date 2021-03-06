require('dotenv/config')

// -- Step 1: Set up the appropriate configuration
var Web3 = require("web3");
var EthereumTransaction = require("ethereumjs-tx").Transaction;
var web3 = new Web3("HTTP://127.0.0.1:7545");

// -- Step 2: Set the sending and receiving addresses for the transaction.
web3.eth.getAccounts().then((accounts) => console.log(accounts));
var sendingAddress = process.env.ADDRESS_SENDER;
var receivingAddress = process.env.ADDRESS_RECEIVE;

// -- Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
  nonce: 0,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: "0x",
};

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = process.env.PRIVATE_KEY_SENDER;
var privateKeySenderHex = new Buffer(privateKeySender, "hex");
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
