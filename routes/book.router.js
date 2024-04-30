const express = require('express');
const BookController = require("../controllers/book.controller");
const bookRouter = express.Router();
bookRouter.get('/', BookController.getAll)
bookRouter.get('/:id', BookController.getBook )
bookRouter.post('/', BookController.createBook)
bookRouter.patch('/:id',BookController.updateBook )
bookRouter.delete('/:id', BookController.deleteBook )

module.exports = bookRouter;
