const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const data = require('./util/employee')
// console.log(data)

const { getAllDepartments, addDepartment } = require('./util/department')
const { getAllEmployees, addEmployee, deleteEmployee, updateEmployee } = require('./util/employee')
const { getAllRoles, addRole, getManager } = require('./util/role')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: ['Add Employee', 
            'Update Employee Role', 
            'View All Roles', 
            'Add Role', 
            'View All Departments', 
            'Add Department']
        },  
    ])
    .then((answer) => {
        console.log(answer)
        if(answer.options == 'Add Employee') {
            return inquirer.prompt([
                {
                    type:'input',
                    message: 'What is the employees first name?',
                    name: 'firstname',
                },
                {
                    type:'input',
                    message: 'What is the employees last name?',
                    name: 'lastname',
                },
                {
                    type:'list',
                    message: 'What is the employees role?',
                    name: 'role',
                    choices: getAllRoles(),
                },
                {
                    type:'list',
                    message: 'What is the employees manager?',
                    name: 'manager',
                    choices: getManager()
                }
            ])
            .then((answers) => {
                console.log(answers)
                addEmployee(answers)
            })
        }
    
        if(answer.options == 'Update Employee Role') {
            return inquirer.prompt([
                {
                    type:'list',
                    message: 'Which employees role do you want to update?',
                    name:'employees',
                    choices:getAllEmployees()
                },
                {
                    type:'list',
                    message: 'Which role do you want to assign the selected employee?',
                    name:'role',
                    choices:getAllRoles()
                },
            ])
            .then(updateEmployee())
        }
        if(answer.options == 'View All Roles') {
            getAllRoles()
            return
        }
        if(answer.options == 'Add Role') {
            return inquirer.prompt([
                {
                    type:'input',
                    message: 'What is the name of the role?',
                    name: getAllRoles(),
                },
                {
                    type:'input',
                    message: 'What is the salary of the role?',
                    name: 'salary',
                },
                {
                    type:'list',
                    message: 'What department does that role belong to?',
                    name: 'deparments',
                    choices: getAllDepartments()
                },
            ])
            .then(addRole())
        }
        if(answer.options == 'View All Departments') {
            getAllDepartments()
        }
        if(answer.options == 'Add Department') {
            return inquirer.prompt([
                {
                    type:'input',
                    message: 'What is the name of the department?',
                    name: 'department',
                }
            ])
            .then(addDepartment())
        }
    })
};
promptUser();
