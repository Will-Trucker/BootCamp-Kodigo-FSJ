CREATE DATABASE kodigo;

USE kodigo;

CREATE TABLE productos(
	id int auto_increment primary key,
	nombre varchar(100) NOT NULL,
    precio DECIMAL(10,5) NOT NULL,
    cantidad int DEFAULT 0
);

ALTER TABLE productos ADD proveedor varchar(50) NOT NULL;