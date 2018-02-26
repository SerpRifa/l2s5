import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {authorizeUser, isAuthorized} from './AuthorizeApi';

class Auth extends Component {
  state={
    email: '',
    password: '',
    isAuthorized: false,
    clicked: false
  }
  handleEmail = events => {
    const {value} = events.target;
    this.setState({email: value});
  }
  handlerPassword = events => {
    const {value} = events.target;
    this.setState({password: value});
  }
  handleSubmit = () =>{
    const {email, password} = this.state;
    const isAuthorized = authorizeUser(email, password);
    this.setState({isAuthorized: isAuthorized, clicked: true});
  }

  render() {
    const {email, password, isAuthorized, clicked} = this.state;
    const {onClick} = this.props;

    return <div>
        <div>
          <input name="email" onChange={this.handleEmail} placeholder="email" />
          <input name="password" onChange={this.handlerPassword} placeholder="password" />
        </div>
        {clicked && <p className="error">Неверный пароль и/или почта.</p>}        
        <button name="Submit" onClick={this.handleSubmit} >Submit</button>
        {isAuthorized && <Redirect to="/" />}
      </div>;
  }
}

export default Auth;
