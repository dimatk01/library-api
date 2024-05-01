const dotenv = require('dotenv');
const Joi = require('joi');

dotenv.config();

const envVarsSchema = Joi.object()
    .keys({
        PORT: Joi.number().default(3000),
        JWT_SECRET: Joi.string().required().description('JWT secret key'),
        JWT_ACCESS_EXPIRATION: Joi.required().description('time after which access tokens expire'),
        DB_NAME: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required().default('root'),
        DB_HOST: Joi.string().required().default('localhost'),
        DB_PORT: Joi.number().integer().default(5432),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    port: envVars.PORT,
    db: {
       name: envVars.DB_NAME,
        host: envVars.DB_HOST,
        password: envVars.DB_PASSWORD,
        username: envVars.DB_USERNAME,
        port: envVars.DB_PORT,
    },
    jwt: {
        secret: envVars.JWT_SECRET,
        expirationTime: envVars.JWT_ACCESS_EXPIRATION,
    },
};