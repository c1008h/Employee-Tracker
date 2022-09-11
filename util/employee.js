const db = require('../db/connection');

// Get all employees
const getAllEmployees = () => {
    db.query(`SELECT * FROM employees`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}
// Create a employee
const addEmployee = (answers) => {
    console.log(answers)
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}
// Update a employee
const updateEmployee = () => {
    db.query(`UPDATE employees VALUES (?)`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}
// Delete a employee
const deleteEmployee = () => {
    db.query(`DELETE FROM employees WHERE id = ?`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}

module.exports = {getAllEmployees, addEmployee, deleteEmployee, updateEmployee};