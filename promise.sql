CREATE TABLE promise (
    id SERIAL PRIMARY KEY,
    name varchar(20),
    country varchar(20),
    age integer,

);

INSERT INTO promise VALUES
(
    DEFAULT, 'Barça', 21
),
(
    DEFAULT, 'Olive', 21
),
(
    DEFAULT, 'ManCity', 21
),
(
    DEFAULT, 'Dynamo', 21
);