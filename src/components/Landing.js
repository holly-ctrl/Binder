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
                    <div className='logo'>
                        <img className='logoImg' src='https://user-images.githubusercontent.com/25514513/39216803-fa84ab40-47d1-11e8-8ebe-9d69b9e484b4.png' />
                        <h1 className='binder'>
                            Binder
                        </h1>
                    </div>
                    <div className='signIn'>
                        <input placeholder='email'/>
                        <input placeholder='password'/>
                        <Link to='/dashboard'><button onClick={() => this.login()}>Login</button></Link>
                    </div>
                </nav>
                <div className='signUpForm'>
                    <h3>Create Profile</h3>
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
