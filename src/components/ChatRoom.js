import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ChatRoom.css'

class ChatRoom extends Component {
    constructor() {
        super()

        this.state = {
            messages: []
        }
    }

    render() {
        return(
            <div class='chatContainer'> 
                <div class='sideBar'>
                    <Link to='/dashboard'><img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' /></Link>
                    <Link to='/notes'><button>Notes</button></Link>
                    <Link to='/seminars'><button>Seminars</button></Link>
                </div>
                <div class='chatroom'>
                    <h1>
                        Chat Room
                    </h1>
                </div>
            </div>
        )
    }
}

export default ChatRoom 