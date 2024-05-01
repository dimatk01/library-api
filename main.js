const express = require("express");
const errorMiddleware = require("./middlewares/error.middleware.js");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const fs = require("fs");
const setupRouter = require("./routes");
const bodyParser = require('body-parser')
const config = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupRouter(app)
const swaggerPath =  path.resolve('docs', './docs.json');
const swaggerDocument = fs.readFileSync(swaggerPath,'utf-8' );



app.use('/docs', swaggerUi.serve,
    swaggerUi.setup(JSON.parse(swaggerDocument), { swaggerOptions: {
        url: '/docs/docs.json',
    },}));


app.use(errorMiddleware);

const PORT = config?.port ?? 3000;

/**
 * Запуск додатку
 * @returns Екземпляр додатку
 */
const start = async () => {
    try {
        // await db.sequelize.sync();
        const server = app.listen(PORT, () => console.log(`App started at port: ${PORT}`));

        return server;
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

const server = start();