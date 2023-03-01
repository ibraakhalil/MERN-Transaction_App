require('dotenv').config()
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWTSECRET


const authenticate = (req, res, next) => {
    const { authorization } = req.headers

    if (authorization) {
        let decode = jwt.verify(authorization, JWTSECRET)
        if (decode) {
            req.user = decode
            return next()
        }
    }
    res.json({ message: "You'r not Authenticate user" })
}


module.exports = authenticate