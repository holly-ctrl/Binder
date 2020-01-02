import React, {Component} from 'react'
import axios from 'axios'
import InputNote from './InputNote'
import {Link} from 'react-router-dom'
import './NoteListItem.css'

class NoteListItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            date: '',
            question: '',
            notes: '',
            summary: '',
            setEdit: false
        }
    }

componentDidMount() {
        this.setState({
            title: this.props.title,
            date: this.props.date,
            questions: this.props.questions,
            notes: this.props.notes,
            summary: this.props.summary
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

editToggle() {
    this.setState({
        setEdit: !this.state.setEdit
    })
}


render() {
    const{title, date, question, notes, summary} = this.state
    return (
        <div className='item-container'>

                {!this.state.setEdit
                ? 
                <div className='show'>
                    <div>{this.state.date}</div>
                    <div>{this.state.title}</div>
                </div>
                :
                <form className='frm'>
                    <div className='con'>
                        Title: <input value={this.state.title} id='tit' onChange={e => this.handleEditTitleChange(e)}/>
                        Date: <input value={this.state.date} type='date' id='tit' onChange={e => this.handleEditDateChange(e)}/>
                    </div>
                    <div>
                        <textarea value={this.state.questions} id='que' onChange={e => this.handleEditQuestionsChange(e)}placeholder='Questions'></textarea>
                        <textarea value={this.state.notes} id='not' onChange={e => this.handleEditNotesChange(e)} placeholder='Notes'></textarea>
                        <textarea value={this.state.summary} id='sum' onChange={e => this.handleEditSummaryChange(e)} placeholder='Summary'></textarea>
                        <button className='save' onClick={() => {
                            this.props.updateNote(this.props.id, title, date, question, notes, summary )
                            this.editToggle()
                        }}>Save</button>
                    </div>
                </form>
                }
            <div>
            <img className='editb' onClick={() => {this.editToggle()}} src='https://cdn.iconscout.com/icon/free/png-256/pencil-60-119100.png'/> 
            <img className='deleteb' onClick={() => this.props.deleteNote(this.props.id)} src='http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Trash-icon.png' />
            </div>
        </div>
    )
   }
}
        

export default NoteListItem 