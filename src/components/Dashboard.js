import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import InputNote from './InputNote'
import DashPop from './DashPop'
import './Dashboard.css'
import {connect} from 'react-redux'



class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            noteSubject: '',
            title: '',
            date: '',
            questions: '',
            notes: '',
            summary: '',
            showPopup: false
        }

        this.onNoteSubjectChange = this.onNoteSubjectChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onQuestionsChange = this.onQuestionsChange.bind(this)
        this.onNotesChange = this.onNotesChange.bind(this)
        this.onSummaryChange = this.onSummaryChange.bind(this)
        this.onCreateNoteClick = this.onCreateNoteClick.bind(this)
        this.togglePopup = this.togglePopup.bind(this)

    }

    onNoteSubjectChange(e) {
        this.setState({
            noteSubject: e.target.value
        })
    }   

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    onDateChange(e) {
        this.setState({
            date: e.target.value
        })
    }

    onQuestionsChange(e) {
        this.setState({
            questions: e.target.value
        })
    }

    onNotesChange(e) {
        this.setState({
            notes: e.target.value
        })
    }

    onSummaryChange(e) {
        this.setState({
            summary: e.target.value
        })
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    onCreateNoteClick(subject) {
        axios 
            .post('/api/createNote', {
                title: this.state.title,
                date: this.state.date,
                questions: this.state.questions,
                notes: this.state.notes,
                summary: this.state.summary,
                sub_id: subject
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    logout() {
        axios.delete('/auth/logout')
        
        .then((res) => {
            console.log(res.data.message)
            if(res.data.message === 'logged out') {
                this.props.history.push('/')
            } 
        })
    }


    render() {
        console.log(this.state)
        return (
            <div class='dashDiv'>
                <div class='sideBar'>
                    <img className='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' />
                    <Link to='/notes'><img className='not' src='https://cdn.iconscout.com/icon/free/png-256/pencil-60-119100.png'/></Link>
                    {/* <Link to='/seminars'><img className='semm' src='https://crosbycc.org/wp-content/uploads/2019/06/group-icon-png-7.png'/></Link> */}
                </div>
                <div>
                <header class='dashHeader'>Welcome, start taking notes... </header>
                    <div class='note'>
                    <InputNote 
                        onNoteSubjectChange={this.onNoteSubjectChange}
                        onTitleChange={this.onTitleChange}
                        onDateChange={this.onDateChange}
                        onQuestionsChange={this.onQuestionsChange}
                        onNotesChange={this.onNotesChange}
                        onSummaryChange={this.onSummaryChange}
                        onCreateNoteClick={this.onCreateNoteClick}
                        togglePopup={this.togglePopup}
                    />
                    
                    </div>
                </div>
                {this.state.showPopup && <DashPop closePopup={this.togglePopup} onCreateNoteClick={this.onCreateNoteClick}/>}
                
                <button className='logout' onClick={() => this.logout()} >Log Out</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default withRouter( connect(mapStateToProps) (Dashboard))