insert into notes (title, date, questions, notes, summary, sub_id)
values ($1, $2, $3, $4, $5, $6);

select * from notes;