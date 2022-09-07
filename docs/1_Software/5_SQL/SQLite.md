SQlite is a DB that is only in one file.

```md title="creat a sqlite"
> create a .db file

> open up in a GUI to access the SQLite database
```

id serial -->
CREATE TABLE people (
person_id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name text NOT NULL,
last_name text NOT NULL
);

SQLite uses dynamic typing. It does not enforce data type constraints. Data of any type can (usually) be inserted into any column. You can put arbitrary length strings into integer columns, floating point numbers in boolean columns, or dates in character columns. The datatype you assign to a column in the CREATE TABLE command does not restrict what data can be put into that column. Every column is able to hold an arbitrary length string.

SQLite does not enforce the length of a VARCHAR. You can declare a VARCHAR(10) and SQLite will be happy to store a 500-million character string there. And it will keep all 500-million characters intact. Your content is never truncated. SQLite understands the column type of "VARCHAR(N)" to be the same as "TEXT", regardless of the value of N.
