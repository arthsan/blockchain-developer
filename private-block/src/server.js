import generateHash from './hashing';
import generateBlock from './block';

const data1 = 'Blockchain Rock!';
const dataObject = {
  id: 1,
  body: 'With Object Works too',
  time: new Date().getTime().toString().slice(0, -3),
};

const buildBlock = async (data) => {
  const block = generateBlock(data);
  await generateHash(block);
};

buildBlock('Test Block');
