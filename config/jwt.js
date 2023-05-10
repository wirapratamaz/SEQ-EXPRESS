const jwt = require('jsonwebtoken');
const secretKey = 'xcidic-secret';

module.exports = {
    //generate Token
    generateToken(payload){
        return jwt.sign(payload, secretKey, { expiresIn: '1h'})
    },

    //verify Token
    verifyToken(token){
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            //token tidak valid
            return null;
        }
    },

    
}