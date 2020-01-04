const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'namdev',
  database: 'burger_builder',
});

module.exports = con;