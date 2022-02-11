import React, { Component } from 'react';
import '../components/Login.scss'
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'nhandeptrai',
            password: '123',
        }
    }
    onchangeInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    onchangeInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onClickLogin = () => {
        console.log('email: ', this.state.email, 'password: ', this.state.password)
        console.log('all state', this.state)
    }
    render() {
        return(
            <div className="login-backgroup">
      <div className="login-style">
      <div className="login-container row ">
          <div className="col-12 login-text ">Login</div>
          <div className="col-12 form-group input-text">
              <label>Email:</label>
              <input type='text' 
                    className="form-control form-input" 
                    placeholder='Please enter your email' 
                    value={this.state.email} 
                    onChange={(event) => {this.onchangeInputEmail(event)}}></input>
          </div>
          <div className="col-12 form-group input-text">
              <label>Password:</label>
              <input type='password' 
                    className="form-control form-input" 
                    placeholder='Please enter your password'
                    value={this.state.password} 
                    onChange={(event) => {this.onchangeInputPassword(event)}}></input>
          </div>
          <div className='col-12 '>
              <button className="btn-login" onClick={()=>{this.onClickLogin()}}>Login</button>
          </div>
          <div className='col-12'>
              <span className="forgot-password">Forgot your password?</span>
          </div>
      </div>
      </div>
    </div>
        )
    }
}
export default Login;