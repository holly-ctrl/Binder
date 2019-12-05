insert into users (email, hash_id)
values (${email}, ${hash_id})
returning*;