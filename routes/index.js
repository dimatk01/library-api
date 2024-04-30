const BookRouter = require("./book.router");
const setupRouter = (app) => {

    app.use('/api/book', BookRouter);

}

module.exports = setupRouter;