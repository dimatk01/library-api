const express = require('express');
const RoleController = require("../controllers/role.controller");
const {createRoleValidation, updateRoleValidation} = require("../validation/role.validation");

const roleRouter = express.Router();
roleRouter.get('/', RoleController.getRoles)
roleRouter.get('/:id', RoleController.getRoleById )
roleRouter.post('/', [createRoleValidation], RoleController.createRole)
roleRouter.patch('/:id', [updateRoleValidation], RoleController.updateRole )
roleRouter.delete('/:id', RoleController.deleteRole )

module.exports = roleRouter;