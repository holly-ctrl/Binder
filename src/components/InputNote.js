import React, {Component} from 'react'
import './InputNote.css'

class InputNote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <form>
                    Subject: <input value={this.props.noteSubject} onChange={e => this.props.onNoteSubjectChange(e)} />
                    Title: <input value={this.props.title} onChange={e => this.props.onTitleChange(e)}/>
                    Date: <input value={this.props.date} onChange={e => this.props.onDateChange(e)} type='date' size='5'/><br/>
                    <textarea value={this.props.questions} onChange={e => this.props.onQuestionsChange(e)} placeholder='Questions' id='questy'></textarea>
                    <textarea value={this.props.notes} onChange={e => this.props.onNotesChange(e)} placeholder='Notes' id='notey'></textarea><br/>
                    <textarea value={this.props.summary} onChange={e => this.props.onSummaryChange(e)} placeholder='Summary' id='summy'></textarea>
                </form>
                <button onClick={ () => {
                    this.props.togglePopup()
                    this.props.onCreateNoteClick()}} class='save'>Save </button>
            </div>
        )
    }
}

export default InputNote