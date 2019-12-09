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
                    <Link to='/notes'><button className='butt' onClick= {() => {this.props.onCreateNoteClick()}}>Math</button></Link>
                    <Link to='/notes'><button className='butt' >Science</button></Link>
                    <Link to='/notes'><button className='butt' >Language Arts</button></Link>
                    <Link to='/notes'><button className='butt'>Social Studies</button></Link>
                    <button className='x' onClick={this.props.closePopup}>X</button>
                </div>
            </div>
        )
    }
}

export default DashPop 