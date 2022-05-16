var jwt = require('jsonwebtoken');

const superTempSecret = 'my-very-special-secret';
process.env.SECRET || superTempSecret
const generateToken = function(data) {
    
    var token = jwt.sign(data, process.env.SECRET || superTempSecret);
    
    return token

}

module.exports = {
    generateToken
}