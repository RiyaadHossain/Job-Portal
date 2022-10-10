const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
        res.status(403).json({ status: 'Failed', error: "Authentication Required!" })
    }

    try {
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
        req.user = decode
        next()

    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }

}