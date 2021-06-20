const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const encrypt = (data) => {
    const cipher = crypto.createCipher(algorithm, secretKey);
    let crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
};

const decrypt = (data) => {
    var decipher = crypto.createDecipher(algorithm, secretKey);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
};

module.exports = {
    encrypt,
    decrypt
};