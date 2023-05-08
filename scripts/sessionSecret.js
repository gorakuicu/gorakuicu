const { randomBytes } = require('crypto');

console.info(randomBytes(64).toString('hex'));
