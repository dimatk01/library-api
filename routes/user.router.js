const express = require('express');
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/roles.middleware');
const {
  createUserValidation,
  updateUserValidation,
} = require('../validation/user.validation');
const rolesMiddleware = require('../middlewares/roles.middleware');

const userRouter = express.Router();
userRouter.use(authMiddleware, roleMiddleware(['admin']));

userRouter.get('/', UserController.getUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.post('/', [createUserValidation], UserController.createUser);
userRouter.patch('/:id', [updateUserValidation], UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

module.exports = userRouter;
