const catchAsync = require('../utils/catchAcync');
const generateResponse = require('../utils/generateResponse');
const { NO_CONTENT, CREATED, UNPROCESSABLE_ENTITY } = require('http-status');
const UserService = require('../services/user.service');
const { validationResult } = require('express-validator');
const HttpError = require('../utils/httpError');

const getUsers = catchAsync(async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  const users = await UserService.getUsers(page, perPage);
  return generateResponse(res, users);
});

const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { dataValues } = await UserService.getUserById(id);
  const {password, ...user} = dataValues
  return generateResponse(res, user);
});

const createUser = catchAsync(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(
      UNPROCESSABLE_ENTITY,
      'Validation error',
      errors.array(),
    );
  }
  const {dataValues} = await UserService.createUser(req.body);
 const {password, ...user} = dataValues
  return generateResponse(res, user, CREATED);
});

const updateUser = catchAsync(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(
      UNPROCESSABLE_ENTITY,
      'Validation error',
      errors.array(),
    );
  }
  const { id } = req.params;
  const body = req.body;
  const user = await UserService.updateUser(id, body);
  return generateResponse(res, user, NO_CONTENT);
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  await UserService.deleteUser(id);
  return generateResponse(res, {}, NO_CONTENT);
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
