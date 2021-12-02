SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;
SHOW TABLES;

CREATE TABLE books(
    id int auto_increment primary key,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description text,
    place_sell char(3),
    stock int default 0,
    creation_date datetime not null default current_timestamp on update current_timestamp
);

ALTER TABLE books
    add price int default 0,
    add status enum('available', 'out of stock', 'limited'),
    drop place_sell;

INSERT INTO books VALUES
    (1, 'agus', 'bagas', 'juli', 'React', 'belajar react', 11, DEFAULT, 15000, 'available'),
    (2, 'fikri', 'gina', 'jess', 'My Sql', 'belajar mysql', 8, DEFAULT, 10000, 'out of stock'),
    (3, 'andi', 'rahmat', 'bambang', 'Vanilla', 'belajar vanilla', 25, DEFAULT, 20000, 'limited');

SELECT * FROM books;

SELECT id as ID, author1 as A1, author2 as A2, author3 as A3 FROM books;

SELECT * FROM books
    WHERE id = 2;

SELECT * FROM books
    WHERE id = 1 AND author2 = 'gina';

SELECT * FROM books
    WHERE stock < 10 OR author3 = 'bambang';

SELECT * FROM books
    WHERE NOT id = 3;

SELECT * FROM books
    WHERE BY id;

SELECT * FROM books
    LIMIT 2;

UPDATE books
    SET author1 = 'Juned', price = 150000,
    WHERE id = 3;

DELETE FROM books
    WHERE id = 3;
