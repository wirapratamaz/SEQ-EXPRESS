const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');

module.exports = function verifyTokenMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decodedToken = jwt.verify(token, secretKey);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user = decodedToken; // simpan data user
  next(); // lanjut ke middleware berikutnya
};
