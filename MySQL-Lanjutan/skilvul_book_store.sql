-- Create Database --
CREATE DATABASE skilvulbookstore;
USE skilvulbookstore;

-- Create Table Penerbit --
CREATE TABLE penerbit(
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
);

-- Create Table Penulis --
CREATE TABLE penulis(
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
);

-- Create Table Buku --
CREATE TABLE buku(
    id int(10) not null auto_increment primary key,
    ISBN varchar(50) null,
    judul varchar(50) null,
    penulis varchar(50) null,
    penerbit int(10) null,
    harga int(10) null,
    stock int(10) null,
    
    -- penerbit ke buku --
    CONSTRAINT fk_penerbit_buku 
        FOREIGN KEY (penerbit)
        REFERENCES penerbit(id),
    
    -- buku ke penulis --
    CONSTRAINT fk_buku_penulis
     FOREIGN KEY (id)
     REFERENCES penulis(id)
);

-- Inner Join Penerbit --
SELECT * FROM buku
    INNER JOIN penerbit
    ON buku.penerbit = penerbit.id;

-- Left Join Penerbit --
SELECT * FROM buku
    LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;
 
-- Right Join Penerbit --
SELECT * FROM buku
    RIGHT JOIN penerbit
    ON buku.penerbit = penerbit.id;
 
-- Max --
SELECT MAX (harga) FROM buku
    WHERE stock < 10;

-- Min --
SELECT MIN (harga) FROM buku;

-- Count --
SELECT COUNT (id) FROM buku
    WHERE harga < 100000;
