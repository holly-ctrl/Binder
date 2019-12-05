import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Notes from './components/Notes'
import Seminars from './components/Seminars'
import ChatRoom from './components/ChatRoom'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/notes' component={Notes}/>
        <Route path='/seminars' component={Seminars}/>
        <Route path='/chatroom' component={ChatRoom}/>
    </Switch>
)