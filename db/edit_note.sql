UPDATE notes
SET title = $1,
    date = $2 ,
    questions = $3,
    notes = $4,
    summary = $5
WHERE
   id = $6; 

select * from notes;