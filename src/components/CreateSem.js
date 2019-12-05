import React, {Component} from 'react'
import './CreateSem.css'

class CreateSem extends Component {
    constructor(props) {
        super(props)

    }

    

    render() {
        return(
            <div class='create'>
                <h1>
                    Create a Seminar:
                </h1>
                <div class='inputs'>
                    Seminar Name: <input class='semNa' value={this.props.seminarName} onChange={e => this.props.onSeminarNameChange(e)}/>
                    Subject: <input value={this.props.subject} onChange={e => this.props.onSubjectChange(e)} />
                </div><br/>
                <button onClick={this.props.onCreateSemClick}>Create!</button>
            </div>
        )
    }
}

export default CreateSem