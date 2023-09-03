INSERT INTO department (name)
VALUES  ("Information Technology"), 
        ("Human Resources"), 
        ("Marketing"), 
        ("Sales"), 
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Software Engineer", 200000.00, 1), 
        ("HR Manager", 150000.00, 2), 
        ("Marketing Analyst", 75000.00, 3), 
        ("Sales Representative", 70000.00, 4), 
        ("Financial Analyst", 90000.00, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VAlUES ("Marshawn", "Lynch", 1, NULL),
       ("Micheal", "Jordan", 2, NULL),
       ("Kareem", "Abdul-Jabbar", 3, NULL),
       ("Rocky", "Balboa", 4, NULL),
       ("James", "Baldwin", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VAlUES ("Harry", "Bladder", 1, NULL),
       ("Colen", "Oscopy", 2, NULL),
       ("Rectus", "Amos", 3, NULL),
       ("Goat", "Cheese", 4, NULL),
       ("Lydia", "Cumberbum", 5, NULL);
        
