import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

const generateHash = async (obj) => {
  const hashDigest = await sha256(JSON.stringify(obj));
  const hmacDigest = await Base64.stringify(hmacSHA512(hashDigest, ''));
  console.log(`SHA256 Hash: ${hashDigest}`);
};

export default generateHash;
