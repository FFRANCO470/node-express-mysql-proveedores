-- crear base de datos
CREATE DATABASE dbproveedores;

-- usar base de datos
use dbproveedores;

-- crear tabla de proveedores
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- mostrar tablas de la bd
SHOW TABLES;

-- ver estructura de tablas
describe customer;