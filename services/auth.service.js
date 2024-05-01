const catchAsync = require("../utils/catchAcync");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const generateResponse = require("../utils/generateResponse");

const login = catchAsync(async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    if (!user) {
        throw new Error('User not found');
    }
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
        throw new Error('Invalid password');
    }
    const token = generateAccessToken(user.id, user.roleId)
    return generateResponse(res, {token});
}, "Invalid credentials")

const generateAccessToken = (id, roleId) => {
    const payload = {
        id,
        roleId
    }
    return jwt.sign(payload, config.jwt.secret, {expiresIn: config.jwt.expirationTime} )
}

module.exports = {login}