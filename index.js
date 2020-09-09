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

        function addEmployee() {
            inquirer.prompt([
                {
                message: "Enter the employee first name:",
                name: "newEmployeeFirstName",
                type: "input",
            }, {
                message: "Enter the employee last name:",
                name: "newEmployeeLastName",
                type: "input",
            },{
                message: "Enter the position id:",
                name: "newPositionId",
                type: "list",
                choices: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                ]
            }, 
            {
                message: "Enter the manager id:",
                name: "newPositnewManagerId",
                type: "list",
                choices: [
                    1, 5, 9, 13
                ]
            }]) .then (function(response){
                connection.query("INSERT INTO employees (first_name, last_name, position_id, manager_id) VALUES (?,?,?,?)", 
                [response.newEmployeeFirstName, response.newEmployeeLastName, response.newPositionId, response.newPositnewManagerId], function (err, res) {
                    if (err) throw (err)
                    console.table(res)
                    init();
            })}
            )};

            function updateEmployeePosition() {
                inquirer.prompt ([ 
                {
                    message: "Enter employee id:",
                    name: "newEmployeeId",
                    type: "list",
                    choices: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
                    ]
                }, 
                {
                    message: "Enter the position id:",
                    name: "newPositionId",
                    type: "list",
                    choices: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    ]
                }]) .then (function(response){
                    connection.query("UPDATE employees SET position_id = ? WHERE id = ?;", 
                    [response.newEmployeeId, response.newPositionId], function (err, res) {
                        if (err) throw (err)
                        console.table(res)
                        init();
                })}
                )};


        function viewEmployeesByManager() {
            inquirer.prompt([{
                message: "Enter the manager id:",
                name: "newManagerId",
                type: "list",
                choices: [
                    1, 5, 9, 13
                ]
            }]).then; {
                connection.query("SELECT * FROM employees AS a WHERE a.manager_id = ?", response.newManagerId)
            }
        }










