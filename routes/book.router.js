const express = require('express');
const BookController = require("../controllers/book.controller");
const bookRouter = express.Router();
bookRouter.get('/', BookController.getAll)
bookRouter.get('/:bookId', )
bookRouter.post('/', )
bookRouter.put('/', )
bookRouter.delete('/:bookId', )

module.exports = bookRouter;
