const express = require('express');
const UserController = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.get('/', UserController.getUsers)
userRouter.get('/:id', UserController.getUserById )
userRouter.post('/', UserController.createUser)
userRouter.patch('/:id',UserController.updateUser )
userRouter.delete('/:id', UserController.deleteUser )

module.exports = userRouter;