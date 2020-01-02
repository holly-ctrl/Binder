import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CreateSem from './CreateSem'
import axios from 'axios'
import './Seminars.css'

class Seminars extends Component {
        constructor() {
            super()

        this.state = {
            seminarName: '',
            subject: '',
            allSems: [],
        }

        this.onSeminarNameChange = this.onSeminarNameChange.bind(this)
        this.onSubjectChange = this.onSubjectChange.bind(this)
        this.onCreateSemClick = this.onCreateSemClick.bind(this)
    }

    componentDidMount() {
        this.getAllSems()
    }

onSeminarNameChange(e) {
    this.setState({
        seminarName: e.target.value
    })
}

onSubjectChange(e) {
    this.setState({
        subject: e.target.value
    })
}

    onCreateSemClick(){
       axios
        .post('/api/createSem', {
            seminarName: this.state.seminarName,
            subject: this.state.subject
        })
        .then(res => this.getAllSems())
        .catch(err => console.log(err))
    }

    getAllSems() {
        axios
            .get('/api/getAllSeminars')
            .then(res => ( 
                this.setState({
                    allSems: res.data
                })
            ))
    }

    deleteSem(id) {
        axios.delete(`/api/deleteS/${id}`)
        .then(() => {
           this.getAllSems()
        })
    }

    render() {
        return(
            <div class='container'>
                <div class='sideBar'>
                    <Link to='/dashboard'><img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' /></Link>
                    <Link to='/notes'><img className='not' src='https://cdn.iconscout.com/icon/free/png-256/pencil-60-119100.png'/></Link>
                    <Link to='/seminars'><img className='semm' src='https://crosbycc.org/wp-content/uploads/2019/06/group-icon-png-7.png'/></Link>
                    {/* <Link to='/'><button>Log Out</button></Link> */}
                </div>
                <div class='semz'>
                    <div className='mySems'>
                            <h3>My Seminars:</h3>
                            {this.state.allSems.map((sem) => (
                                <div key={sem.seminar_id}>
                                    <Link to='/chatroom'> 
                                        {sem.sem_name}, 
                                        {sem.subject}
                                    </Link>
                                    <button onClick={() => this.deleteSem(sem.seminar_id)}>X</button>
                                </div>
                            ))}
                    </div>
                    <div className='lowerBoxes'>
                            <CreateSem 
                            onSeminarNameChange={this.onSeminarNameChange}
                            onSubjectChange={this.onSubjectChange}
                            seminarName = {this.state.seminarName}
                            subject = {this.state.subject}
                            onCreateSemClick = {this.onCreateSemClick}
                            />
                            <div class='findSem'>
                                <h1>Find a Seminar:</h1>
                                <div class='findSemInputs'>
                                    <input placeholder='By Seminar Name'/>
                                    <button className='search'>Search!</button>
                                    <input placeholder='By Subject'/>
                                    <button className='search'>Search!</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Seminars 