const catchAsync = require('../utils/catchAcync');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../db/models/').User;
const generateResponse = require('../utils/generateResponse');
const { BAD_REQUEST } = require('http-status');
const HttpError = require('../utils/httpError');

const login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new HttpError(BAD_REQUEST, 'Invalid credentials');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new HttpError(BAD_REQUEST, 'Invalid credentials');
  }
  const token = generateAccessToken(user.id, user.roleId);
  return generateResponse(res, { token });
});

const generateAccessToken = (id, roleId) => {
  const payload = {
    id,
    roleId,
  };
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expirationTime,
  });
};

module.exports = { login };
