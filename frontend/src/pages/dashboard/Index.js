import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './index.css'
import Membership from './Component/Membership';
import {Footer} from '../../components/footer';
import Account from './Component/Account';
import Feed from './Component/Feed';
import Benefit from './Component/Benefit';
import $ from 'jquery';
import Hamburger from 'hamburger-react';

class Dashboard extends React.Component {
  componentDidMount () {
    $('.nav-item button').click(function () {
      $('.refair-section, .banner').css({
        display: 'none'
      });
    });
  }

  render() {
    return (
      <div>
        <Hamburger size={20}/>
        <div className='body-content'>
          <div className='container'>
            <Tabs
              defaultActiveKey=""
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Membership">
                <Membership/>
              </Tab>
              <Tab eventKey="account" title="Account">
                <Account/>
              </Tab>
              <Tab eventKey="benefits" title="Benefits">
                <Benefit/>
              </Tab>
              <Tab eventKey="feed" title="Feed">
                <Feed/>
              </Tab>
            </Tabs>
            <div className='logo-area'>
              <h1>Logo</h1>
              <h4>A</h4>
            </div>
            <div className='banner'>
              <div>
                <h1>Hi, Calt</h1>
                <p>#000000</p>
                <div>
                  <button className='btn mebership-btn'>Membership Card</button>
                </div>
                <div>
                  <button className='btn add-btn'>Add a Spause</button>
                </div>
                <div>
                  <button className='btn emergency-btn'>Emergency Help</button>
                </div>
              </div>
              <div className='detail-info'>
                <h1>201 Days</h1>
                <h3 className='title mt-3'>Auto Renew</h3>
                <p>October 12, 2022</p>
                <h3 className='title'>Questions</h3>
                <p>Call +1877 ******</p>
              </div>
            </div>
          </div>
        </div>
        <div className='refair-section mt-5'>
          <div>
            <h1><b>Fairline defense <br/>is awesome</b></h1>
            <h1>Refer a Friend and make $20</h1>
            <button className='btn refer-btn'>
              Refer a Friend
            </button>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Dashboard;