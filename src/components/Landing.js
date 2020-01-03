import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import './Landing.css'
import {connect} from 'react-redux'
import {setUser} from '../ducks/reducer'


class Landing extends Component {
    constructor() {
        super()

        this.state= {
            emailInput: '',
            passwordInput: '',
            user: {},
            amount: 0
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
        const {emailInput, passwordInput} = this.state

        axios.post('/auth/login', {
        email: emailInput,
        password: passwordInput
        }).then((res) => {
            console.log(res.data)
            if (res.data.message === 'logged in') {
                this.props.setUser(res.data.userData)
                this.props.history.push('/dashboard')
            } else {
                this.props.history.push({pathname: '/loginError', state: { message:  res.data.message}})
            }
        })
      }

    

      handleEmailInput(value) {
          this.setState({emailInput: value})
      }

      handlePasswordInput(value) {
          console.log(value)
          this.setState({passwordInput: value})
      }

      onOpened = () => {
        console.log('this is opened')
      }

      onClosed = () => {
          console.log('this is closed')
      }

      onToken = (token) => {
          console.log(token)
          let {amount} = this.state
          amount /= 100
          console.log(amount)
          token.card = void 0 
          axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
              alert(`Congratulations you paid Kevin ${amount}`)
          })
      }

    render() {
        console.log('this.props', this.props)
        return(
            <div className='hey'>
                
                <nav>
                    <h1 className='binder'>
                        Binder
                    </h1>
                    <div className='signIn'>
                        <input value={this.state.emailInput} placeholder='email' onChange={e => this.handleEmailInput(e.target.value)} />
                        <input value={this.state.passwordInput} placeholder='password' onChange={e => this.handlePasswordInput(e.target.value)} />
                        <button onClick={() => this.login()}>Login</button>
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
                    <StripeCheckout
                        name='Class'
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                        token={this.onToken}
                        amount={this.state.amount}
                        currency='USD'
                        panelLabel='Submit Payment'
                        locale='en'
                        opened={this.onOpened}
                        closed={this.onClosed}
                        billingAddress={false}
                        zipCode={false}
                    >
                    <button>Donate</button>
                    </StripeCheckout>
                        $
                        <input 
                        value={this.state.amount}
                        type='number'
                        onChange={ e => this.setState({amount: +e.target.value})}/>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, {setUser}) (Landing))
