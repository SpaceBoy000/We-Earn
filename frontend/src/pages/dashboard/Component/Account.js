import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class Account extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='account-preference'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'>
                <p>First Name</p>
                <input type="text" className="form-control" defaultValue="Ausl"/>
              </div>
              <div className='col-md-6'>
                <p>Last Name</p>
                <input type="text" className="form-control" defaultValue="Semon"/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <p>Email</p>
                <input type="email" className="form-control" defaultValue="ausl@businessmail.com"/>
              </div>
              <div className='col-md-6'>
                <p>Phone</p>
                <input type="text" className="form-control" defaultValue="612-840-123"/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <p>Street Address</p>
                <input type="text" className="form-control" defaultValue="724N Texas"/>
              </div>
              <div className='col-md-6'>
                <p>City, Zip Code</p>
                <input type="text" className="form-control" defaultValue="Lose Angeles 90046"/>
              </div>
            </div> 
            <div className='row'>
              <div className='col-md-6'>
                <p>New Password</p>
                <input type="password" className="form-control" defaultValue="*********"/>
                <FontAwesomeIcon icon={faEye} className='password-eye'/>
              </div>
              <div className='col-md-6'>
                <p>Renew Password</p>
                <input type="password" className="form-control" defaultValue="********"/>
              </div>
            </div>
            <div className='btn-area'>
              <button className='btn btn-default cancel-btn'>Cancel</button>
              <button className='btn btn-info save-edit-btn'>Save</button>
            </div>   
          </div>
          <div className='col-md-4'>
            <img src='/img/about.jpg' style={{width: '100%', height: '305px'}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;