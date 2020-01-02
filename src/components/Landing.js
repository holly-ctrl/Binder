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

      login() {
         axios.post('/auth/login', {
        email: this.state.emailInput,
        password: this.state.passwordInput
        })
        .then((res)=> {
            this.setState({
                user: res.data.userData
              })
        })
        
      }

      handleEmailInput(value) {
          this.setState({emailInput: value})
      }

      handlePasswordInput(value) {
          console.log(value)
          this.setState({passwordInput: value})
      }

    render() {
        return(
            <div>
                
                <nav>
                    <h1 className='binder'>
                        Binder
                    </h1>
                    <div className='signIn'>
                        <input value={this.state.emailInput} placeholder='email' onChange={e => this.handleEmailInput(e.target.value)} />
                        <input value={this.state.passwordInput} placeholder='password' onChange={e => this.handlePasswordInput(e.target.value)} />
                        <Link to='/dashboard'><button onClick={() => this.login()}>Login</button></Link>
                    </div>
                </nav>
                <div className='signUpForm'>
                    <h3>Create Profile</h3>
                    <input onChange={e => this.setState({ emailInput: e.target.value })}
                            type="text" placeholder='Email'/><br/>
                    <input onChange={e => this.setState({ passwordInput: e.target.value })}
                            type="password" placeholder='Password'/>
                    <button className='sb' onClick={() => this.signup()}>
                        Sign Up
                    </button>
                </div>
                <div>
                        Donate!... Its for the children! <button>Donate</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing)
