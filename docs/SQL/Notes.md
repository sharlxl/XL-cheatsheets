---
title: Notes(to be sorted)
sidebar_position: 1
---

ERD = Entity Relationship Diagrams
SQL = structured query language

#### One to One

not frequently used
A student has_one SSN, and a SSN belongs_to a specific student - that lets us look up solely by SSN, and see the connected student
Often, in situations like that, you can make the SSN an attribute of the student, but when the associated resource has, for example, multiple fields (e.g. an address), it might make sense to create another table for addresses and set up a has_one relationship

#### One to Many

the most common type of database relationship
an university has_many classes, but a classes belongs_to only one university

#### Many to Many

also very frequent
a student probably has_many classes, and a class also probably has_many students

---

### DataTypes

Postgres has the following data types (most common):

int - whole number
decimal - float/decimal
bool - boolean
varchar(n) - small text
text - large text
timestamp - date

---

> CLI
> `psql -l` -> list all subdatabases

unlike Mongodb(which creates a db for you), SQL you have to

> `CREATE DATABASE` < db name >

:::tip
SQL is not case sensitive
:::

```sql title="creates a table for your DB"
CREATE TABLE dbname (key(type))
```

```sql title="drops a table for your DB"
DROP TABLE dbname
```

```sql title="inserting into the table"
INSERT INTO dbname (key)
VALUES (values)
```

:::tip
`*` is a shorthand for all
:::

```sql title="getting data from the table/db"
SELECT key FROM dbname;
```

-- select all rows from the actors table where the name column is set to 'Tala'
SELECT \* FROM dbname WHERE key = 'value';

ILIKE

LIKE

%value%

AND OR

IS NOT

IS NULL

IS NOT NULL

`UPDATE` dbname `SET` key = value `WHERE` key=value

`DELETE FROM` dbname `WHERE` key = value;

`SELECT` \* `FROM` dbname `ORDER BY` key `LIMIT` 5

`SELECT` \* `FROM` dbname `ORDER BY` key `LIMIT` 5 `OFFSET` 1 (nextpage)

---

```sql title="CHEATSHEET IN CHEETSHEETS"
-- CREATE DB/TABLES
SHOW DATABASES;
CREATE DATABASE our_database_name;
USE our_database_name;
CREATE TABLE people (first_name VARCHAR(20), age INT);
DESCRIBE people;

-- CRUD
INSERT INTO people (first_name, age) VALUES ('Matt' , 34);
SELECT age FROM people;
SELECT * FROM people;
UPDATE people SET weight = 300 WHERE first_name = 'Bill';
DELETE FROM people WHERE first_name = "Bill";

-- OPERATORS
SELECT _ FROM people WHERE age != 63;
SELECT _ FROM people WHERE age < 63;
SELECT _ FROM people WHERE age > 63;
SELECT _ FROM people WHERE age >= 63;
SELECT _ FROM people WHERE age <= 63;
SELECT _ FROM people WHERE first_name first_name LIKE "%Charlie%";
SELECT _ FROM people WHERE first_name NOT LIKE "%Charlie%";
SELECT _ FROM people WHERE age IS NULL;
SELECT * FROM people WHERE age IS NOT NULL;

-- AND/OR
SELECT _ FROM people WHERE first_name = 'Matt' AND age = 43;
SELECT _ FROM people WHERE first_name = 'Matt' OR age = 49;

-- ORDER
SELECT _ FROM people ORDER BY age DESC;
SELECT _ FROM people ORDER BY first_name DESC;
SELECT _ FROM people ORDER BY age ASC LIMIT 2;
SELECT _ FROM people ORDER BY age ASC LIMIT 2 OFFSET 1;
SELECT * FROM people ORDER BY age DESC, first_name ASC;

-- ALTER TABLE
ALTER TABLE people ADD COLUMN weight FLOAT;
ALTER TABLE people DROP COLUMN height;
ALTER TABLE people MODIFY COLUMN height FLOAT;

ALTER TABLE people ADD COLUMN height FLOAT AFTER first_name;
ALTER TABLE people MODIFY COLUMN height FLOAT AFTER age;

ALTER TABLE people ADD COLUMN id INT FIRST;
ALTER TABLE people MODIFY COLUMN height FLOAT FIRST;

ALTER TABLE people ADD COLUMN dob DATETIME;
ALTER TABLE people CHANGE dob date_of_birth DATETIME;

ALTER TABLE people ADD COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST;

-- AGGREGATION
SELECT COUNT(*), age FROM people GROUP BY age;
SELECT SUM(salary), age FROM people GROUP BY age;
SELECT AVG(salary), age FROM people GROUP BY age;
SELECT MIN(salary), age FROM people GROUP BY age;
SELECT MAX(salary), age FROM people GROUP BY age;
SELECT GROUP_CONCAT(first_name), age FROM people GROUP BY age;
SELECT GROUP_CONCAT(first_name), age, height FROM people GROUP BY age, height;

-- JOINS
SELECT _ FROM people JOIN companies ON people.employer_id = companies.id;
SELECT _ from people JOIN companies;
SELECT _ FROM people RIGHT JOIN companies ON people.employer_id = companies.id;
SELECT _ FROM people LEFT JOIN companies ON people.employer_id = companies.id;
```

---

Joining table

```sql title="joining"
SELECT * FROM ice_creams JOIN plants ON plants.ice_cream_id = ice_creams.id;
SELECT * FROM ice_creams LEFT JOIN plants ON plants.ice_cream_id = ice_creams.id;
SELECT * FROM ice_creams RIGHT JOIN plants ON ice_creams.id = plants.ice_cream_id;
SELECT * FROM ice_creams FULL OUTER JOIN plants ON ice_creams.id = plants.ice_cream_id;
SELECT * FROM ice_creams CROSS JOIN plants; -- wow that's every row from one table multiplied by the row of every table!

```

normalisation reduce duplication

migration
