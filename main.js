import dotenv from 'dotenv';
import express from "express";
// import errorMiddleware from './middlewares/error-middleware.js';
// import swaggerUi from 'swagger-ui-express';
import ExpressSwaggerGenerator from 'express-swagger-generator';
import swaggerUi from "swagger-ui-express";
import * as path from "node:path";
import * as fs from "node:fs";

dotenv.config();




const app = express();

const swaggerPath =  path.resolve('docs', './docs.json');
const swaggerDocument = fs.readFileSync(swaggerPath,'utf-8' );
console.log(swaggerDocument)
// app.use(express.json({ extended: true }));
// app.use(cookieParser());
app.use('/docs', swaggerUi.serve,  swaggerUi.setup(JSON.parse(swaggerDocument), { swaggerOptions: {
        url: '/docs/docs.json',
    },}));

// // Установка маршрутов авторизации
// app.use(AuthRouteBase, AuthRouter);

// Установка промежуточного ПО для обработки ошибок
// app.use(errorMiddleware);

const PORT =  3000;

/**
 * Запуск серверного приложения
 * @returns Экземпляр серверного приложения
 */
const start = () => {
    try {
        const server = app.listen(PORT, () => console.log(`Сервер запущен с портом ${PORT}`));

        return server;
    } catch (e) {

        process.exit(1);
    }
}

// Запуск сервера
const server = start();