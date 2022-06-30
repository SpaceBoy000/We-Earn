import { Link } from "react-router-dom";
import React from 'react';

const investStyle = {
  border: '2px solid #337ab7'
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      investionEnable: 'off'
    }
  }

  onInvestHandle () {
    this.setState({
      investionEnable: 'on'
    });
  }

  render() {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <Link className='navbar-brand page-scroll' to='/'>
              <img src='img/logo.png' style={{width: '45px', position: 'fixed', top: '20px'}}/>
            </Link>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#about' className='page-scroll'>
                  about us
                </a>
              </li>
              <li>
                <a href='#works' className='page-scroll'>
                  how it works
                </a>
              </li>
              <li>
                <a href='#service' className='page-scroll'>
                  how it start
                </a>
              </li>
              <li onClick={this.onInvestHandle.bind(this)}>
                <Link to='/invest' className='page-scroll' 
                  style={this.state.investionEnable == 'off' ? {} : investStyle}>
                  Invest Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
