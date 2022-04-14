const Sequelize = require('sequelize');
require('dotenv').config();

// const mysql = require('mysql');


// const sequelize = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME
// })

// sequelize.connect(function(err) {
//   if (err) throw err;
//   console.log('Database Connected!');
// })

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;