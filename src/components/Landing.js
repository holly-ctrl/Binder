import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import './Landing.css'


class Landing extends Component {
    constructor() {
        super()

        this.state= {
            emailInput: '',
            passwordInput: '',
            user: {}
        }
    }

    async signup() {
        let res = await axios.post('/auth/register', {
          email: this.state.emailInput,
          password: this.state.passwordInput
        })
        this.setState({
          user: res.data.userData
        })
      }

      async login() {
        let res = await axios.post('/auth/login', {
          email: this.state.emailInput,
          password: this.state.passwordInput
        })
        this.setState({
          user: res.data.userData
        })
      }

    render() {
        return(
            <div>
                
                <nav>
                    <div class='logo'>
                        <img class='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' />
                        <h1 class='binder'>
                            Binder
                        </h1>
                    </div>
                    <div class='signIn'>
                        <input placeholder='email'/>
                        <input placeholder='password'/>
                        <button onClick={() => this.login()}>
                            <Link to='/dashboard'>Login</Link>
                        </button>
                    </div>
                </nav>
                <div class='signUpForm'>
                    <h3>Create Profile</h3>
                    <input placeholder='First Name'></input>
                    <input placeholder='Last Name'></input>
                    <input onChange={e => this.setState({ emailInput: e.target.value })}
                            type="text" placeholder='Email'/>
                    <input onChange={e => this.setState({ passwordInput: e.target.value })}
                            type="password" placeholder='Password'/>
                    <button onClick={() => this.signup()}>
                        Sign Up
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing)
