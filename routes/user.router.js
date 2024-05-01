const express = require('express');
const UserController = require("../controllers/user.controller");
const {createUserValidation, updateUserValidation} = require("../validation/user.validation");
const userRouter = express.Router();
userRouter.get('/', UserController.getUsers)
userRouter.get('/:id', UserController.getUserById )
userRouter.post('/', [createUserValidation],  UserController.createUser)
userRouter.patch('/:id', [updateUserValidation], UserController.updateUser )
userRouter.delete('/:id', UserController.deleteUser )

module.exports = userRouter;