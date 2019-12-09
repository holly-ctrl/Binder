create table password (
hash_id serial primary key,
hash_value text
);

create table users (
id serial primary key,
email varchar(180),
hash_id int references password(hash_id)
);

create table seminars(
seminar_id serial primary key,
sem_name varchar(60),
subject varchar(60),
user_id references users(id),
sub_id references subjects(id),
chat_id references chatrooms(id)
);

create table notes (
    id serial primary key,
    subject varchar(60),
    title varchar(60),
    date varchar(10),
    questions varchar(500),
    notes varchar(2000),
    summary varchar(1000),
    user_id int references users(id),
    sub_id int references subjects(id),
    sem_id int references seminars(seminar_id)
);

create table chatrooms (
id serial primary key, 
name varchar(255),
subject varchar(255),
message varchar(255),
sem_id int REFERENCES seminars(seminar_id),
user_id int references users(id),
sub_id int REFERENCES subjects(id),
note_id int REFERENCES notes(id)
);