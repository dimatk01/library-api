const jwt = require('jsonwebtoken')
const {UNAUTHORIZED} = require("http-status");
const config = require("../config");
const extractJwtFromHeader = require("../utils/extractJwtFromHeader");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = extractJwtFromHeader(req)
        if (!token) {
            return res.status(UNAUTHORIZED).json({message: "User unauthorized"})
        }
        req.user = jwt.verify(token, config.jwt.secret)
        next()
    } catch (e) {
        console.log(e)
        return res.status(UNAUTHORIZED).json({message: "User unauthorized"})
    }
};