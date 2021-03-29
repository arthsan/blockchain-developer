import SHA256 from 'crypto-js/sha256';

const chain = [];
let newBlock;

const blockCreator = (data) => {
  newBlock = {
    hash: '',
    height: 0,
    body: [data],
    time: new Date().getTime().toString().slice(0, -3),
    previousblockhash: '',
  };

  return newBlock;
};

const blockChainCreator = (newBlock) => {
  if (chain.length > 0) {
    newBlock.previousblockhash = chain[chain.length - 1].hash;
  }

  newBlock.height = chain.length;

  newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
  chain.push(newBlock);
  return chain;
};

blockChainCreator(blockCreator(`genesis block`));
setTimeout(() => {
  blockChainCreator(blockCreator(`genesis block 2`));
  console.log(chain);
}, 1500);
