module.exports = {
    createSem: (req, res) => {
        const db = req.app.get('db')
        const { seminarName, subject } = req.body

        db.add_seminar(seminarName, subject)
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => console.log(err))
    },
    getAllSemz: (req, res) => {
        const db = req.app.get('db')

        db.get_all_seminars()
            .then(result => {
                res.status(200).send(result)
            })
    },
    createNote: (req, res) => {
        const db = req.app.get('db')
        const { noteSubject, title, date, questions, notes, summary } = req.body

        db.add_note(noteSubject, title, date, questions, notes, summary)
            .then(result => {
                res.status(200).send(result)
            })
    },
    deleteSem: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        const new_data = db.delete_sem(id)
        .then(data => console.log(data))
    
        res.status(200).send(new_data)
    }, 
}