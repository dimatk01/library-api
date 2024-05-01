const express = require('express');
const RoleController = require("../controllers/role.controller");
const roleRouter = express.Router();
roleRouter.get('/', RoleController.getRoles)
roleRouter.get('/:id', RoleController.getRoleById )
roleRouter.post('/', RoleController.createRole)
roleRouter.patch('/:id',RoleController.updateRole )
roleRouter.delete('/:id', RoleController.deleteRole )

module.exports = roleRouter;