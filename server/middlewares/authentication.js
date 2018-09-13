const User = require('../models/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = (req, res, next) => {
    let token = req.headers.access_token
    if (token) {
        let decode = jwt.verify(token, process.env.JWT_KEY)
        User.findOne({ _id: decode.id })
        .then((data) => {
            if (data) {
                req.user = data
                next()
            } else {
                res.status(400).json({
                    message: "User not found"
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: 'Login failed'
            })
        });
    } else {
        res.status(400).json({
            message: 'User must be Log In'
        })
    }
}

module.exports = authentication