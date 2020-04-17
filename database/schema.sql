USE ReviewDB;

CREATE TABLE Food (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  rating int
);