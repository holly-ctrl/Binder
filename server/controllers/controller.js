const stripe = require('stripe')(process.env.STRIPE_SECRET)

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
        const {title, date, questions, notes, summary, sub_id } = req.body

        db.add_note(title, date, questions, notes, summary, sub_id)
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
    getAllMathN: (req, res) => {
        const db = req.app.get('db')

        db.get_all_math_notes()
            .then(result => {
                res.status(200).send(result)
            })
    },
    getAllNotes: (req, res) => {
        const db = req.app.get('db')

        db.get_all_notes()
            .then(result => {
                res.status(200).send(result)
            })
    },
    deleteNote: (req, res) => {
        const {id} = req.params 
        const db = req.app.get('db')
        db.delete_note(id)
        .then(data => res.status(200).send(data))
    },
    editNote: (req, res) => {
        // console.log(req.body)
        const db = req.app.get('db')
        const {id} = req.params
        const{title, date, questions, notes, summary } = req.body

        // console.log(+id)
        db.edit_note([ title, date, questions, notes, summary, +id])
        .then(data =>
            res.status(200).send(data))
    },
    pay: (req, res) => {
        const db = req.app.get('db')
        const {token: {id}, amount} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: id,
                description: 'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log('Successful payment', charge)
                    return res.status(200).send(charge)
                }
            }
        )
    }
}