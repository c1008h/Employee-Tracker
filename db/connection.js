const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password:'Anything$1',
        database:'employees_db'
    },
    console.log(`Connected to the employees_db`)
);


module.exports = db;
