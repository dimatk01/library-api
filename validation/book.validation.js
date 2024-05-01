const { body } = require('express-validator');

const createBookValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title must not be empty')
    .isString()
    .withMessage('Title must be a string'),
  body('author')
    .notEmpty()
    .withMessage('Author must not be empty')
    .isString()
    .withMessage('Author must be a string'),
  body('year')
    .notEmpty()
    .withMessage('Year must not be empty')
    .isNumeric()
    .withMessage('Year must be a number'),
  body('genre')
    .notEmpty()
    .withMessage('Genre must not be empty')
    .isString()
    .withMessage('Genre must be a string'),
];

const updateBookValidation = [
  body('title').optional().isString().withMessage('Title must be a string'),
  body('author').optional().isString().withMessage('Author must be a string'),
  body('year').optional().isNumeric().withMessage('Year must be a number'),
  body('genre').optional().isString().withMessage('Genre must be a string'),
];

module.exports = { createBookValidation, updateBookValidation };
