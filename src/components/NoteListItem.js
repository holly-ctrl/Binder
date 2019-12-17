import React, {useState} from 'react'
import InputNote from './InputNote'
import {Link} from 'react-router-dom'
import './NoteListItem.css'

const NoteListItem = ({ title, date, questions, notes, summary, id, deleteNote, updateNote, handleEditTitleChange, handleEditDateChange, handleEditQuestionsChange, handleEditNotesChange, handleEditSummaryChange, stateTitle, stateDate, stateQuestions, stateNotes, stateSummary}) => {
    const [editToggle, setEdit] = useState(false)


    return (
        <div className='item-container'>

                {!editToggle
                ?
                <div>
                    <div>{title}</div>
                    <div>{date}</div>
                </div>
                :
                <form className='frm'>
                    <div className='con'>
                        Title: <input value={stateTitle} id='tit' onChange={e => handleEditTitleChange(e)}/>
                        Date: <input value={stateDate} type='date' id='tit' onChange={e => handleEditDateChange(e)}/>
                    </div>
                    <div>
                        <textarea value={stateQuestions} id='que' onChange={e => handleEditQuestionsChange(e)}></textarea>
                        <textarea value={stateNotes} id='not' onChange={e => handleEditNotesChange(e)}></textarea>
                        <textarea value={stateSummary} id='sum' onChange={e => handleEditSummaryChange(e)} ></textarea>
                        <button className='save' onClick={() => updateNote(id)} >Save</button>
                    </div>
                </form>
                }
            <button onClick={() => {setEdit(!editToggle)}}>Edit</button>
            <button onClick={() => deleteNote(id)}>x</button>
        </div>
    )
}

export default NoteListItem 