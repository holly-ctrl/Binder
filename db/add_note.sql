insert into notes (note_subject, title, date, questions, notes, summary)
values ($1, $2, $3, $4, $5, $6);

select * from notes;