const jwt = require('../config/jwt');

module.exports = {
    login(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        if (username === 'admin' && password === 'admin') {
            const token = jwt.generateToken({ username });
            return res.json({ token });
        }

        return res.status(400).json({
            message: 'Invalid username or password'
        });
    }
};