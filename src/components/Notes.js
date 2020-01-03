import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NoteListItem from './NoteListItem'
import NotePop from './NotePop'
import './Notes.css'
import axios from 'axios'
import {connect} from 'react-redux'

class Notes extends Component {
    constructor() {
        super()  

        this.state = {
            mathNotes: [],
            sciNotes: [],
            laNotes: [],
            ssNotes: [],
        }

        this.updateNote = this.updateNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
    }

    componentDidMount() {
        console.log('hit')
        axios
            .get('/api/getAllNotes')
            .then(res => {
                console.log(res.data)
                const mathNotes = res.data.filter(note => note.sub_id === 1)
                const sciNotes = res.data.filter(note => note.sub_id === 2)
                const laNotes = res.data.filter(note => note.sub_id === 3)
                const ssNotes = res.data.filter(note => note.sub_id === 4)
                this.setState({
                    mathNotes,
                    sciNotes,
                    laNotes,
                    ssNotes
                })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.mathNotes.length !== this.state.mathNotes.length|| 
            prevState.sciNotes.length !== this.state.sciNotes.length ||
            prevState.laNotes.length !== this.state.laNotes.length ||
            prevState.ssNotes.length !== this.state.ssNotes.length
            )    
            {axios
                .get('/api/getAllNotes')
                .then(res => {
                    console.log(res.data)
                    const mathNotes = res.data.filter(note => note.sub_id === 1)
                    const sciNotes = res.data.filter(note => note.sub_id === 2)
                    const laNotes = res.data.filter(note => note.sub_id === 3)
                    const ssNotes = res.data.filter(note => note.sub_id === 4)
                    this.setState({
                        mathNotes,
                        sciNotes,
                        laNotes,
                        ssNotes
                    })
            })}
    }

    updateNote(id, title, date, questions, notes, summary) {
        axios
            .put(`/api/editNote/${id}`, {
                title,
                date,
                questions,
                notes,
                summary
            })
            .then(res => {
                const mathNotes = res.data.filter(note => note.sub_id === 1)
                const sciNotes = res.data.filter(note => note.sub_id === 2)
                const laNotes = res.data.filter(note => note.sub_id === 3)
                const ssNotes = res.data.filter(note => note.sub_id === 4)
                this.setState({
                    mathNotes,
                    sciNotes,
                    laNotes,
                    ssNotes
            })
    })
}


    deleteNote(id) {
        axios
            .delete(`/api/deleteN/${id}`)
            .then((res) => {
                console.log(res.data)
                const mathNotes = res.data.filter(note => note.sub_id ===1)
                const sciNotes = res.data.filter(note => note.sub_id === 2)
                const laNotes = res.data.filter(note => note.sub_id === 3)
                const ssNotes = res.data.filter(note => note.sub_id === 4)
                this.setState({
                    mathNotes,
                    sciNotes,
                    laNotes,
                    ssNotes
                })
            })
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
        console.log(this.props)
        return (
            <div className='ccontainer'>
                <div class='sideBar'>
                    <Link to='/dashboard'><img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' /></Link>
                    <Link to='/notes'><img className='nott' src='https://cdn.iconscout.com/icon/free/png-256/pencil-60-119100.png'/></Link>
                    {/* <Link to='/seminars'><img className='semm' src='https://crosbycc.org/wp-content/uploads/2019/06/group-icon-png-7.png'/></Link> */}
                </div>
                <div className='body'>
                        <h1>Notes</h1> 
                    <div className='subs'>
                        <div className='box'>
                            <h2>Math</h2>
                                {this.state.mathNotes.map((mNote) => (
                                    <NoteListItem 
                                    key={mNote.id}
                                    id={mNote.id} 
                                    title={mNote.title} 
                                    date={mNote.date} 
                                    questions={mNote.questions} 
                                    notes={mNote.notes} 
                                    summary={mNote.summary} 
                                    deleteNote={this.deleteNote} 
                                    updateNote={this.updateNote}
                                    handleEditTitleChange = {this.handleEditTitleChange}
                                handleEditDateChange = {this.handleEditDateChange}
                                handleEditQuestionsChange = {this.handleEditQuestionsChange}
                                handleEditNotesChange = {this.handleEditNotesChange}
                                handleEditSummaryChange = {this.handleEditSummaryChange}
                                />
                                ))}
                        </div>
                        <div className='box'>
                            <h2>Science</h2>
                                {this.state.sciNotes.map((mNote) => (
                                    <NoteListItem 
                                    key={mNote.id}
                                    id={mNote.id} 
                                    title={mNote.title} 
                                date={mNote.date} 
                                questions={mNote.questions} 
                                notes={mNote.notes} 
                                summary={mNote.summary}
                                deleteNote={this.deleteNote}
                                updateNote={this.updateNote} 
                                handleEditTitleChange = {this.handleEditTitleChange}
                                handleEditDateChange = {this.handleEditDateChange}
                                handleEditQuestionsChange = {this.handleEditQuestionsChange}
                                handleEditNotesChange = {this.handleEditNotesChange}
                                handleEditSummaryChange = {this.handleEditSummaryChange}
                                />
                                ))}
                        </div>
                        <div className='box'>
                        <h2>Language Art</h2>
                            {this.state.laNotes.map((mNote) => (
                                <NoteListItem 
                                key={mNote.id}
                                id={mNote.id} 
                                title={mNote.title} 
                                date={mNote.date} 
                                questions={mNote.questions} 
                                notes={mNote.notes} 
                                summary={mNote.summary} 
                                deleteNote={this.deleteNote} 
                                updateNote={this.updateNote} 
                                handleEditTitleChange = {this.handleEditTitleChange}
                                handleEditDateChange = {this.handleEditDateChange}
                                handleEditQuestionsChange = {this.handleEditQuestionsChange}
                                handleEditNotesChange = {this.handleEditNotesChange}
                            handleEditSummaryChange = {this.handleEditSummaryChange}
                            />
                            ))}
                        </div>
                        <div className='box'>
                        <h2>Social Studies</h2>
                            {this.state.ssNotes.map((mNote) => (
                                <NoteListItem
                                key={mNote.id}
                                id={mNote.id} 
                                title={mNote.title} 
                                date={mNote.date} 
                            questions={mNote.questions} 
                            notes={mNote.notes} 
                            summary={mNote.summary} 
                            deleteNote={this.deleteNote} 
                            updateNote={this.updateNote} 
                            handleEditTitleChange = {this.handleEditTitleChange}
                            handleEditDateChange = {this.handleEditDateChange}
                            handleEditQuestionsChange = {this.handleEditQuestionsChange}
                            handleEditNotesChange = {this.handleEditNotesChange}
                            handleEditSummaryChange = {this.handleEditSummaryChange}
                            />
                        ))}
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps) (Notes)