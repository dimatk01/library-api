const BookRouter = require("./book.router");
const UserRouter = require("./user.router");
const RoleRouter = require("./role.router");
const AuthRouter = require("./auth.router");

const setupRouter = (app) => {
    app.use('/api/book', BookRouter);
    app.use('/api/role', RoleRouter)
    app.use('/api/user', UserRouter);
    app.use('/api/auth', AuthRouter);
}

module.exports = setupRouter;