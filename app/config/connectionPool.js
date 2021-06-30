const dbConfig = require("./dbconfig.js");

const mysql = require("mysql");

const connectionPool = mysql.createPool({
  connectionLimit: dbConfig.pool.max,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});


module.exports = connectionPool;

