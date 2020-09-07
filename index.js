const mysql = require("mysql");
var inquirer = require("inquirer");
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
});

