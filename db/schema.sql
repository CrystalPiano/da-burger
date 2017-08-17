create database burgerDB;

USE burgerDB;

CREATE TABLE burgers (
	item_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NULL,
    devoured BOOLEAN DEFAULT NULL,
    ts TIMESTAMP,
    PRIMARY KEY (item_id)
    );