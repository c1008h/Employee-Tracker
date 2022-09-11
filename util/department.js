const db = require('../db/connection');

const getAllDepartments = () => {db.query(`SELECT * FROM departments`, function(err, results) {
    if(err) console.error(err)

    console.log(results);
    })
}

// Create a department
const addDepartment = () => {
    db.query(`INSERT INTO departments (employees_db) VALUES (?)`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}

module.exports = {getAllDepartments, addDepartment};