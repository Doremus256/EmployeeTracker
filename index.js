const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306, 
    user: "root", 
    password: "SecretGarden13!",
    database: "employee_tracker",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

function init() {
    inquirer.prompt([{
        message: "Dynamic Employee DB: What would you like to do?",
        name: "searchType",
        type: "list",
        choices: [
            "View All Employees",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Position",
            "Update Employee Manager",
            "View All Positions",
        ]
    }])
        .then(({ searchType }) => {
            switch (searchType) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Position":
                    updateEmployeePosition();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
                case "View All Positions":
                    viewAllPositions();
                    break;
                default: connection.end();
    }})
}


