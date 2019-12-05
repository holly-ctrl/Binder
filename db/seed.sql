create table password (
hash_id serial primary key,
hash_value text
);

create table users (
user_id serial primary key,
email varchar(180),
hash_id int references password(hash_id)
);

create table seminars(
seminar_id serial primary key,
sem_name varchar(60),
subject varchar(60)
);

create table notes (
    notes_id serial primary key,
    note_subject varchar(60),
    title varchar(60),
    date varchar(10),
    questions varchar(500),
    notes varchar(2000),
    summary varchar(1000)
);