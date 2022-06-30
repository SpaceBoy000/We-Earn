import React from "react";
import '../assets/css/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

class Login extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Hamburger size={20} />
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg"/>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-form">
              <form>
                <div className="brand">
                  <h1 className="text-center logo">LOGO</h1>
                  <h3 className="text-left title">Login</h3>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="pwd" placeholder="Password"/>
                  <FontAwesomeIcon icon={faEye} className="eye-svg"/>
                </div>
                <div className="forget-password">
                  <label>Forget your password?</label>
                </div>
                <Link to='/dashboard'><button className="login-btn">Login</button></Link>
                <div className="register">
                  <label>Don't have an account ?</label>
                  <Link to='/register' className='register-link'>Register</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}

export default Login;
