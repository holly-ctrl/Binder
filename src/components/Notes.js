import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Notes.css'

class Notes extends Component {
    constructor() {
        super()  

        
    }

    

    render() {
        return (
            <div className='ccontainer'>
                <div class='sideBar'>
                    <Link to='/dashboard'><img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' /></Link>
                    <Link to='/notes'><button>Notes</button></Link>
                    <Link to='/seminars'><button>Seminars</button></Link>
                </div>
                <div className='body'>
                    <h1>Notes</h1>
                    <div className='subs'>
                        <h2>Math</h2>
                        <h2>Science</h2>
                        <h2>Language Art</h2>
                        <h2>Social Studies</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes