// Dependancies. MySQL for DB, inquirer for CLI and cTable for cleaner data return //
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Boilerplate code creating connection to MySQL DB //
var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306, 
    user: "root", 
    password: "SecretGarden13!",
    database: "employee_tracker",
});

// Confirming connection established, start CLI by calling init() //
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

// CLI interface //
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

// Print to console: List of all current employees. SELECT *(all) FROM employee(table)
function viewAllEmployees() {
    connection.query("SELECT * FROM employees", function(err, res) {
      if (err) throw (err);
      console.log(res);
    })
  };








// viewEmployeesByManager();

// addEmployee();

// removeEmployee();

// updateEmployeePosition();

// updateEmployeeManager();

// viewAllPositions();
