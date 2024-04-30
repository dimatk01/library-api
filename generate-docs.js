import ExpressSwaggerGenerator from "express-swagger-generator";
import * as fs from "node:fs";
import express from "express";
const app = express();
    const expressSwagger =ExpressSwaggerGenerator(app);

    let options = {
        swaggerDefinition: {
            info: {
                description: 'This is a sample server',
                title: 'Swagger',
                version: '1.0.0',
            },
            host: 'localhost:3000',
            basePath: '/api',
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            }
        },
        basedir: './',
        files: ['./routes/**/*.js'] //Path to the API handle folder
    };
    const docs = expressSwagger(options)
    fs.writeFileSync('docs/docs.json', JSON.stringify(docs));

