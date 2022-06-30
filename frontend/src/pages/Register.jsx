import React from "react";
import '../assets/css/register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <Hamburger size={20} />
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg"/>
        <div className="register-form">
          <form>
            <div className="brand">
              <h1 className="text-center register-title">Register</h1>
            </div>
            <div className="row form-content">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="fname" placeholder="First Name"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="pwd" placeholder="Password"/>
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                </div>
                <div className="form-group phone-group">
                  <input type="text" className="form-control" id="pcountry" placeholder="+1"/>
                  <input type="text" className="form-control" id="pnum" placeholder="Phone"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="cpwd" placeholder="Create Password"/>
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </div>

            </div>
            <div>
              <p className="special-item">
                Min 8 char, with at least upper case letter <br/>
                one number, and one special char.:!, @, $, #, &, *.
              </p>
              <p className="text-center special-item service">By clicking "create account"  you agree <br/> to our <Link to=''>Terms & Service</Link></p>

            </div>
            <div className="register-btn-area">
              <button className="register-btn">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
