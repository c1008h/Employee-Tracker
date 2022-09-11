INSERT INTO departments(name)
VALUES ("Finance"),
("Design"),
("Tech"),
("Management");

INSERT INTO roles(title, salary, department_id)
VALUES("Engineer", 80000, 2),
("Accountant", 70000, 1),
("Manager", 100000, 3);

INSERT INTO employees(first_name, last_name,role_id,manager_id)
VALUES ("Chris", "Hong", 0, NULL);