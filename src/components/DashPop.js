import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './DashPop.css'

class DashPop extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='popup'>
                <div className='innerPop' >
                    <Link to='/notes'><button className='butt' onClick= {() => {this.props.onCreateNoteClick(1)}}>Math</button></Link>
                    <Link to='/notes'><button className='butt' onClick= {() => {this.props.onCreateNoteClick(2)}}>Science</button></Link>
                    <Link to='/notes'><button className='butt' onClick= {() => {this.props.onCreateNoteClick(3)}}>Language Arts</button></Link>
                    <Link to='/notes'><button className='butt' onClick= {() => {this.props.onCreateNoteClick(4)}}>Social Studies</button></Link>
                    <button className='x' onClick={this.props.closePopup}>X</button>
                </div>
            </div>
        )
    }
}

export default DashPop 