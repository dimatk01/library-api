const express = require('express');
const BookController = require("../controllers/book.controller");
const {createBookValidation, updateBookValidation} = require("../validation/book.validation");

const bookRouter = express.Router();

bookRouter.get('/',   BookController.getAll)
bookRouter.get('/:id', BookController.getBook )
bookRouter.post('/',[createBookValidation], BookController.createBook)
bookRouter.patch('/:id', [updateBookValidation], BookController.updateBook )
bookRouter.delete('/:id', BookController.deleteBook )

module.exports = bookRouter;
