import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NoteListItem from './NoteListItem'
import NotePop from './NotePop'
import './Notes.css'
import axios from 'axios'

class Notes extends Component {
    constructor() {
        super()  

        this.state = {
            mathNotes: [],
            sciNotes: [],
            laNotes: [],
            ssNotes: [],
            title: '',
            date: '',
            questions: '',
            notes: '',
            summary: '',
            showPop: false
        }

        this.deleteNote = this.deleteNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.handleEditTitleChange = this.handleEditTitleChange.bind(this)
        this.handleEditDateChange = this.handleEditDateChange.bind(this)
        this.handleEditQuestionsChange = this.handleEditQuestionsChange.bind(this)
        this.handleEditNotesChange = this.handleEditNotesChange.bind(this)
        this.handleEditSummaryChange = this.handleEditSummaryChange.bind(this)
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

    updateNote(id) {
        console.log(id)
        axios
            .put(`/api/editNote/${id}`, {
                title: this.state.title,
                date: this.state.date,
                questions: this.state.questions,
                notes: this.state.notes,
                summary: this.state.summary
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

handleEditTitleChange(e) {
    this.setState({
        title: e.target.value
    })
}

handleEditDateChange(e) {
    this.setState({
        date: e.target.value
    })
}

handleEditQuestionsChange(e) {
    this.setState({
        questions: e.target.value
    })
}

handleEditNotesChange(e) {
    this.setState({
        notes: e.target.value
    })
}

handleEditSummaryChange(e) {
    this.setState({
        summary: e.target.value
    })
}

    deleteNote(id) {
        axios
            .delete(`/api/deleteN/${id}`)
            .then((res) => {
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


    render() {
        return (
            <div className='ccontainer'>
                <div class='sideBar'>
                    <Link to='/dashboard'><img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' /></Link>
                    <Link to='/notes'><button>Notes</button></Link>
                    <Link to='/seminars'><button>Seminars</button></Link>
                    <Link to='/'><button>Log Out</button></Link>
                </div>
                <div className='body'>
                        <h1>Notes</h1> 
                    <div className='subs'>
                        <div className='box'>
                            <h2>Math</h2>
                                {this.state.mathNotes.map((mNote) => (
                                <NoteListItem 
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
                                stateTitle={this.state.title}
                                stateDate={this.state.date}
                                stateQuestions={this.state.questions}
                                stateNotes={this.state.notes}
                                stateSummary={this.state.summary}
                                />
                            ))}
                        </div>
                        <div className='box'>
                            <h2>Science</h2>
                                {this.state.sciNotes.map((mNote) => (
                                <NoteListItem 
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
            </div>
        )
    }
}

export default Notes