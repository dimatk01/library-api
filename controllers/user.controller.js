const catchAsync = require("../utils/catchAcync");
const generateResponse = require("../utils/generateResponse");
const {NO_CONTENT, CREATED} = require("http-status");
const UserService = require("../services/user.service");

const getUsers = catchAsync(async (req, res) => {
    const { page = 1, perPage = 10  } = req.query;
    const users = await UserService.getUsers(page, perPage);
    return generateResponse(res, users);
})

const getUserById = catchAsync(async (req, res) => {
    const {id} = req.params
    const user = await UserService.getUserById(id);
    return generateResponse(res, user);
})

const createUser = catchAsync(async (req, res) => {
    const data =  await UserService.createUser(req.body);
    return generateResponse(res, data, CREATED)
})

const updateUser = catchAsync(async (req, res) => {
    const {id} = req.params
    const body = req.body;
    const user = await UserService.updateUser(id, body);
    return generateResponse(res, user, NO_CONTENT);
})

const deleteUser = catchAsync(async (req, res) => {
    await UserService.deleteUser(id);
    return generateResponse(res, {}, NO_CONTENT);
})

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}