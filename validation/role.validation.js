const {body} = require("express-validator");

const createRoleValidation = [
    body('name').notEmpty().withMessage('Role name must not be empty').isString().withMessage('Role name  must be a string')
];

const updateRoleValidation = [
    body('name').optional().isString().withMessage('Role name must be a string')
];

module.exports = {createRoleValidation, updateRoleValidation};