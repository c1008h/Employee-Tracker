INSERT INTO department (name)
VALUES 
("Finance"),
("Design"),
("Tech"),
("Management"),
("Sales"),
("Marketing")
;

INSERT INTO role (title, salary, department_id)
VALUES
("Engineer", 80000, 3),
("Accountant", 70000, 1),
("Manager", 100000, 5),
("Salesperson", 100000, 5),;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Chris", "Hong", 1, NULL),
("Ana", "Kim", 2, NULL),
("Benji", "Lei", 3, NULL),
("Seon", "Kim", 4, NULL),
("Tofu", "Hong", 1, NULL),
("Pumpkin", "Kim", 2, NULL)
;

UPDATE employee SET manager_id = 1 WHERE id = 2; 
UPDATE employee SET manager_id = 3 WHERE id = 4;
UPDATE employee SET manager_id = 5 WHERE id = 6;
UPDATE employee SET manager_id = 7 WHERE id = 8;