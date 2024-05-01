const catchAsync = require("../utils/catchAcync");
const RoleService = require("../services/role.service");
const generateResponse = require("../utils/generateResponse");
const {NO_CONTENT, CREATED} = require("http-status");


const getRoles = catchAsync(async (req, res) => {
    const {page = 1, perPage = 10} = req.query;
    const roles =  await RoleService.getRoles();
    return generateResponse(res, roles)
})

const getRoleById = catchAsync(async (req, res) => {
    const {id} = req.params
    const role =  await RoleService.getRoleById(Number(id));
    return generateResponse(res, role)
})

const createRole = catchAsync(async (req, res) => {
    const data =  await RoleService.createRole(req.body)
    return generateResponse(res, data, CREATED)
})

const updateRole = catchAsync(async (req, res) => {
    const {id} = req.params
     await RoleService.updateRole(req.body, Number(id))
    return generateResponse(res, {}, NO_CONTENT)
})

const deleteRole = catchAsync(async (req, res) => {
    const {id} = req.params
     await RoleService.deleteRole( Number(id))
    return generateResponse(res, {}, NO_CONTENT)
})

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getRoles,
    getRoleById,
}