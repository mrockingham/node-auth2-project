CREATE DATABASE jwttutorial;


--set extion
CREATE TABLE    users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_department VARCHAR(255) NOT NULL
);


INSERT INTO users (user_name, user_password, user_department)
VALUES ('mike', 'password', 'Operations');
