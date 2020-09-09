// Dependancies. MySQL for DB, inquirer for CLI and cTable for cleaner data return //
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Boilerplate code creating connection to MySQL DB //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SecretGarden13!",
    database: "employee_tracker",
});

// Confirming connection established, start CLI by calling init() //
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

// CLI interface //
function init() {
    inquirer.prompt([{
        message: "Dynamic Employee DB: What would you like to do?",
        name: "mainMenu",
        type: "list",
        choices: [
            "View All Employees",
            "View All Employees by Manager",
            "View Departments",
            "Add Employee",
            "Add Position",
            "Add Department",
            "Remove Employee",
            "Update Employee Position",
            "Update Employee Manager",
            "View All Positions",
            "Exit"
        ]
    }])
        .then(({ mainMenu }) => {
            switch (mainMenu) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "View Departments":
                    viewDepartments();
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
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Position":
                    addPosition();
                    break;
                case "View All Positions":
                    viewAllPositions();
                    break;
                case "Exit":
                    connection.end();
                    break;
                default: connection.end();
            }
        })
}

// Print to console as table (console.table): List of all current employees. SELECT *(all) FROM employee(table)
function viewAllEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw (err)
        console.table(res)
        init();
    })
};

function viewAllPositions() {
    connection.query("SELECT * FROM positions", function (err, res) {
        if (err) throw (err)
        console.table(res)
        init();
})
};

function viewDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw (err)
        console.table(res)
        init();
})
};

function addDepartment() {
    inquirer.prompt([{
        message: "Enter the department name:",
        name: "newDepartment",
        type: "input",
    }]) .then (function(response){
        connection.query("INSERT INTO departments (deptname) VALUES (?)", response.newDepartment,  function (err, res) {
            if (err) throw (err)
            console.table(res)
            init();
    })}
    )};

    function addPosition() {
        inquirer.prompt([
            {
            message: "Enter the position title:",
            name: "newPosition",
            type: "input",
        }, {
            message: "Enter the position salary:",
            name: "newSalary",
            type: "input",
        },{
            message: "Enter the position department id:",
            name: "newDeptId",
            type: "list",
            choices: [
                1, 2, 3, 4
            ]
        }]) .then (function(response){
            connection.query("INSERT INTO positions (title, salary, dept_id) VALUES (?,?,?)", [response.newPosition, response.newSalary, response.newDeptId], function (err, res) {
                if (err) throw (err)
                console.table(res)
                init();
        })}
        )};

function viewEmployeesByManager() {
    inquirer.prompt([{
        message: "Enter manager name to see his/her staff:",
        name: "employeesByManager",
        type: "input",
    }]).then; {
        connection.query("SELECT * FROM employees WHERE manager_id = res")

        // need to use INNER JOIN here but return value not id //
    }
}










// viewEmployeesByManager();

// addEmployee();

// removeEmployee();

// updateEmployeePosition();

// updateEmployeeManager();

// viewAllPositions();
