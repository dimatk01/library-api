const { body } = require('express-validator');

const createUserValidation = [
    body('username').notEmpty().withMessage('Username must not be empty').isString().withMessage('Username must be a string'),
    body('password').notEmpty().withMessage('Password must not be empty').isString().withMessage('Password must be a string').isLength({ min: 8 }).withMessage('Password must be longer than 8 characters')
];

const updateUserValidation = [
    body('username').optional().isString().withMessage('Username must be a string'),
    body('password').optional().isString().withMessage('Password must be a string')
];


module.exports = {createUserValidation, updateUserValidation};