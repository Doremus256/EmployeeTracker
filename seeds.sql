INSERT INTO departments (deptname) VALUES 
("sales"),
("engineering"),
("legal"),
("finance");

INSERT INTO positions (title, salary, dept_id) VALUES 
("Sales Rep", 50000, 1),
("Sales Director", 90000, 1),
("Software Engineer", 120000, 2),
("Engineering Director", 190000, 2),
("Legal Assistant", 50000, 3),
("General Counsel", 150000, 3),
("Accountant", 60000, 4),
("Finance Director", 100000, 4);

INSERT INTO employees (first_name, last_name, position_id, manager_id) VALUES
("Carson", "Minish", 2, null),
("Matt", "McNickle", 1, 1),
("Jeff", "Kitchens", 1, 1),
("Ray", "Gross", 1, 1), 
("Lisa", "Bradburry", 4, null),
("Eduardo", "Reyes", 3, 5), 
("Phillip", "Morgan", 3, 5),
("Axel", "Witsel", 3, 5), 
("Lance", "Everett", 6, null), 
("Christian", "Montoya", 5, 9), 
("Anthony", "Fuentes", 5, 9), 
("Clint", "Twinning", 5, 9), 
("Zora", "Underwood", 8, null), 
("Kyle", "Washington", 7, 13),
("Andrew", "Magnolia", 7, 13), 
("Xander", "Billingsley", 7, 13);


SELECT * FROM employees INNER JOIN positions ON positions.title = employees.position_id;