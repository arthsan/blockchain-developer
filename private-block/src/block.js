const generateBlock = (data) => {
  const blockData = {
    id: 0,
    nonce: 144444,
    body: data,
    hash: '',
  };
  return blockData;
};

export default generateBlock;
