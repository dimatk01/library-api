import dotenv from 'dotenv';
import express from "express";
import errorMiddleware from './middlewares/error-middleware.js';
import swaggerUi from "swagger-ui-express";
import * as path from "node:path";
import * as fs from "node:fs";

dotenv.config();


const app = express();

const swaggerPath =  path.resolve('docs', './docs.json');
const swaggerDocument = fs.readFileSync(swaggerPath,'utf-8' );

app.use('/docs', swaggerUi.serve,  swaggerUi.setup(JSON.parse(swaggerDocument), { swaggerOptions: {
        url: '/docs/docs.json',
    },}));


app.use(errorMiddleware);

const PORT = process.env.API_PORT ?? 3000;

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