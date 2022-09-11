const db = require('../db/connection');

const getAllRoles = () => {db.query(`SELECT * FROM roles`, function(err, results) {
    if(err) console.error(err)

    console.log(results);
    })
}
const getManager = () => {db.query(`SELECT manager FROM roles`, function(err, results) {
    if(err) console.error(err)
    console.log(results)
})}
// Create a role
const addRole = () => {
    db.query(`INSERT INTO roles (employees_db) VALUES (?)`, function(err, results) {
        if(err) console.error(err)
        console.log(results);
    })
}

module.exports = {getAllRoles, addRole, getManager};