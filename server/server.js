require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controllers/controller')
const authCtrl = require('./controllers/authController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.post('/api/createSem', ctrl.createSem)
app.get('/api/getAllSeminars', ctrl.getAllSemz)
app.post('/api/createNote', ctrl.createNote)
app.delete(`/api/deleteS/:id`, ctrl.deleteSem)
app.get('/api/getAllMath', ctrl.getAllMathN)
app.get('/api/getAllNotes', ctrl.getAllNotes)
app.delete('/api/deleteN/:id', ctrl.deleteNote)
app.put('/api/editNote/:id', ctrl.editNote)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})

