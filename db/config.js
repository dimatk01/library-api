const { db } = require('../config');
module.exports = {
  username: db.username,
  password: db.password,
  database: db.name,
  host: db.host,
  port: db.port,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
