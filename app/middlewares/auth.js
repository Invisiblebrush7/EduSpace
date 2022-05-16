const jwt = require("jsonwebtoken");

const superTempSecret = 'my-very-special-secret';

const checkToken = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).send({ message: 'No token provided.' });
    }
    try {
        
        const tokenData = jwt.verify(token, process.env.SECRET || superTempSecret)
        
        if (tokenData && tokenData.email) {
            req.user = {
                email: tokenData.email
            }
            next();
        }
    } catch (error) {
        res.status(401).send({ message: 'Token Inválido! Aca no entras!.' });
    }

}

module.exports = {
    checkToken
}