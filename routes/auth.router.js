const express = require("express");
const AuthService = require("../services/auth.service");

const authRouter = express.Router();

authRouter.post('/login',  AuthService.login )

module.exports = authRouter;