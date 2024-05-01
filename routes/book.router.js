const express = require('express');
const BookController = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/roles.middleware');
const {
  createBookValidation,
  updateBookValidation,
} = require('../validation/book.validation');

const bookRouter = express.Router();
bookRouter.use(authMiddleware);

bookRouter.get(
  '/',
  [authMiddleware, roleMiddleware(['user', 'admin'])],
  BookController.getAll,
);
bookRouter.get(
  '/:id',
  [authMiddleware, roleMiddleware(['user', 'admin'])],
  BookController.getBook,
);
bookRouter.post(
  '/',
  [createBookValidation, authMiddleware, roleMiddleware(['admin'])],
  BookController.createBook,
);
bookRouter.patch(
  '/:id',
  [updateBookValidation, authMiddleware, roleMiddleware(['admin'])],
  BookController.updateBook,
);
bookRouter.delete(
  '/:id',
  [authMiddleware, roleMiddleware(['admin'])],
  BookController.deleteBook,
  authMiddleware,
);

module.exports = bookRouter;
