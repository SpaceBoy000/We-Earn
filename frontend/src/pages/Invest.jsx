import React from 'react';
import Navigation from "../components/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../components/footer";
import '../assets/invest.css';

export default class Invest extends React.Component {
  render () {
    return (
      <>
        <Navigation />
        <div className='content'>
          <div className="invest-card invest-1">
            <div className="invest-card-header" style={{backgroundImage: "url('img/invest-header1.png')"}}>
              <h3>YOUR PROFILE</h3>
            </div>
            <div className="invest-card-body">
              <div className="invest-info">
                <div className="row">
                  <div className="col-md-4">
                    <p>Your received: <font>0 BNB</font></p>
                  </div>
                  <div className="col-md-4">
                    <p className='invest-count'>Tour invest count: <font>0 BNB</font></p>
                  </div>
                  <div className="col-md-4">
                    <p>REAL DEPOSIT: <font>0.01 BNB</font></p>
                  </div>
                </div>
              </div>
              <div className="invest-detail">
                <div className="row">
                  <div className="col-md-4">
                    <div className='invest-catagory'>
                      <p className='text-center'>My Deposits</p>
                      <h3 className='text-center'><font>0.01BNB</font> ($2.24)</h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>Widthrawn</p>
                      <h3 className='text-center'><font>0BNB</font> ($0.00)</h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>Last Action</p>
                      <h3 className='text-center'><font>2h ago</font></h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='invest-catagory'>
                      <p className='text-center'>Max Payout Left</p>
                      <h3 className='text-center'><font>0.0365BNB</font> ($8.18)</h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>Total roi</p>
                      <h3 className='text-center'><font>0%</font></h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>
                        <img src="img/reinvest.png" alt="" />
                      </p>
                      <p className='text-center' style={{fontSize: '12px'}}>18h 24m until your next action</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='invest-catagory'>
                      <p className='text-center'>Unwidthrawn</p>
                      <h3 className='text-center'><font>0.0000001BNB</font> ($0.00)</h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>airdrops</p>
                      <h3 className='text-center'><font>0 BNB</font>($0.000)</h3>
                    </div>
                    <div className='invest-catagory'>
                      <p className='text-center'>
                        <img src="img/withdraw.png" alt="" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: '20px'}}>
                <div className="col-md-6">
                  <p >
                    <FontAwesomeIcon icon={faCopy}/>
                    copy a real link
                  </p>
                </div>
                <div className="col-md-6">
                  <p className='text-right'>
                    <FontAwesomeIcon icon={faGear}/>
                    setting
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="invest-card invest-2">
            <div className="invest-card-body">
              <div className="invest-info">
                <div className="row">
                  <div className="col-md-4">
                    <p>MY 5x status: 1x: <font>1x</font></p>
                  </div>
                  <div className="col-md-4">
                    <p className='invest-count'>MAx deposits: <font>0.05 BNB</font></p>
                  </div>
                  <div className="col-md-4">
                    <p>REAL DEPOSIT: <font>0.01 BNB</font></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='text-center invest-explain'>
              The total amount in “MY DEPOSITS” cannot be more than 5 times the amount of real deposits of BNB. If you hit the 5x limit, you must deposit
              more BNB if you wish to continue reinvesting or receiving airdrops, referral benefits, etc.</p>
          </div>
          <div className="invest-card invest-3">
            <div className="invest-card-header" style={{backgroundImage: "url('img/invest-header2.png')"}}>
              <h3>make a deposit</h3>
            </div>
            <div className="invest-card-body">
              <div className="invest-detail">
                <form action="" className='invest-form'>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Your Sponsor</p>
                      <input type="text" className='form-control input' defaultValue="Type your sponsor"/>
                    </div>
                    <div className="col-md-6">
                      <p>Amount in BNB</p>
                      <input type="number" className='form-control input' placeholder='0.00BNB'/>
                    </div>
                  </div>
                  <div className='deposit-btn-group'>
                    <div>
                      <button className='deposit-btn'>deposit</button>
                      <button className='credit-card-btn'>buy with credit card</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="invest-card invest-4">
            <div className="invest-card-header" style={{backgroundImage: "url('img/invest-header3.png')"}}>
              <h3>REINVEST CALCULATOR</h3>
            </div>
            <div className="invest-card-body">
              <div className="invest-detail">
                <form action="" className='invest-form'>
                  <p>Initial investment in BNB</p>
                  <div className="reinvest-input">
                    <input type="number" className='form-control input revenue-input' defaultValue="Type your sponsor"/>
                    <div className='revenue-info'>
                      <p>Your revenue: Daily 1.5% 0.015BNB</p>
                    </div>
                  </div>
                  <p style={{marginTop: '20px'}}>Total days of reinvestment</p>
                  <div className="reinvest-input" >
                    <input type="number" className='form-control input deposit-input' defaultValue="Type your sponsor"/>
                    <div className='deposit-info'>
                      <p>Deposit after 73 Days: 3.129 BNB | Daily 1.5%: 0.015 BNB</p>
                    </div>
                  </div>
                  <div className='deposit-btn-group'>
                    <button className='deposit-btn'>invest now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="invest-card invest-4">
            <div className="invest-card-header" style={{backgroundImage: "url('img/card-header.png')"}}>
              <h3>YOUR STATISTICS</h3>
            </div>
            <div className="invest-card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="statistics">
                    <h3 className='text-center'>personal statistics</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>NEXT INCOME (1.5%)</p>
                      <p className='statistics-detail text-center'>10/07/2022 11:30:00</p>
                      <p className='text-center statistics-title'>estimated 1.5% daily earnings</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>accumulated income</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>direct referral income</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>matching bonus</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>top sponsor rewards</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>Your Address</p>
                      <p className='text-center'>0x31484A76BB061BBAb1202D91f5BefC2F1878bA44</p>
                      <p className='text-center statistics-title'>referred by</p>
                      <p className='text-center'>?</p>
                    </div>
                    <h3 className='text-center'>user totals</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>total amount of deposits</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>total amount of received bnb</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>direct bonus withdrawn</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>bonus reinvested (direct/match/pool)</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>match bonus withdrawn</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>pool bonus withdrawn</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>income reinvested</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>reinvested gross</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="statistics">
                  <h3 className='text-center'>smart contract statistics</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>total members</p>
                      <p className='statistics-detail text-center'>44.530</p>
                      <p className='text-center statistics-title'>total bnb deposits all time</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>total withdrawn by members</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>total reinvested by members</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>top sponsor reward pool</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                      <p className='text-center statistics-title'>next top sponsor pool reward</p>
                      <p className='statistics-detail text-center'>10/07/2022 11:30:00</p>
                      <p className='text-center statistics-title'>maximum amount from top referrer</p>
                      <p className='statistics-detail text-center'>1.039847 BNB</p>
                    </div>
                    <h3 className='text-center'>organization</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>personal invited partners</p>
                      <p className='statistics-detail text-center'>149</p>
                      <p className='text-center statistics-title'>total number of partners</p>
                      <p className='statistics-detail text-center'>19</p>
                      <p className='text-center statistics-title'>All downline’s investments</p>
                      <p className='statistics-detail text-center'>0 BNB</p>
                    </div>
                    <h3 className='text-center'>my referral team</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>team id</p>
                      <p className='statistics-detail text-center'>purpleVikings</p>
                    </div>
                    <h3 className='text-center'>my upline team</h3>
                    <div className="statistics-body">
                      <div className='upline-team'>
                        <p className='text-center'>TEAM ID</p>
                        <div className="child">
                          <input type="checkbox" id="type1" className="toggle_checkbox"/>
                          <label htmlFor="type1" className="toggle_label type1">
                              <span className="toggle_span type1"></span>
                          </label>
                        </div>
                      </div>
                      <p className='text-center statistics-title team-address'>
                        0x918919422635291f02ee56108618753c4fa0901f<br/>(owner)
                      </p>
                      <p className='text-center statistics-title team-address'>
                        0xae2d4617c862309a3d75a0ffb358c7a5009c673f
                      </p>
                    </div>
                    <h3 className='text-center'>next top referrers</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>
                        next reward: <font>14/06/2022, 01:22:53</font>
                      </p>
                      <p className='text-center statistics-title'>
                        <span className='text-center team-address'>0x918919422635291f02ee56108618753c4fa0901f</span><br/>
                        <span>
                          zygardude has 28 BNB referral investments
                        </span>
                      </p>
                      <p className='text-center statistics-title'>

                        <span className='text-center team-address'>0xbe2fd46639eae548552aa79b1245d65718cb89d9</span><br/>
                        <span>
                          tommybones has 17  BNB referral investments
                        </span>
                      </p>
                      <p className='text-center statistics-title'>
                        <span className='text-center team-address'>0x1aceeeca69b4618c7d09a32f0e1ef6da3565c4c1</span><br/>
                        <span>
                          frankygoes has 10.22 BNB referral investments
                        </span>
                      </p>
                    </div>
                    <h3 className='text-center'>last top referrers</h3>
                    <div className="statistics-body">
                      <p className='text-center statistics-title'>
                        last reward: <font>14/06/2022, 01:22:53</font>
                      </p>
                      <p className='text-center statistics-title'>
                        <span className='text-center team-address'>0x918919422635291f02ee56108618753c4fa0901f</span><br/>
                        <span>
                          zygardude has 28 BNB referral investments
                        </span>
                      </p>
                      <p className='text-center statistics-title'>

                        <span className='text-center team-address'>0xbe2fd46639eae548552aa79b1245d65718cb89d9</span><br/>
                        <span>
                          tommybones has 17  BNB referral investments
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest-card invest-5">
            <div className="invest-card-header" style={{backgroundImage: "url('img/invest-header4.png')"}}>
              <h3>airdrops</h3>
            </div>
            <div className="invest-card-body">
              <div className="row">
                <div className="col-md-6">
                  <h3 className='text-center aridrop'>team airdrop</h3>
                  <form action="">
                    <label htmlFor="">Team id</label>
                    <input type="text"  className='input form-control' defaultValue="0"/>
                    <label htmlFor="" style={{marginTop: '15px'}}>Amount in BNB</label>
                    <input type="text"  className='input form-control' defaultValue="0.1"/>
                    <div className='airdrop-team'>
                      <div className="child">
                        <input type="checkbox" id="type2" className="toggle_checkbox"/>
                        <label htmlFor="type2" className="toggle_label type2">
                            <span className="toggle_span type2"></span>
                        </label>
                      </div>
                      <p className='text-center' style={{marginLeft: '10px'}}>Also send to team owner</p>
                    </div>
                    <div className='airdrop-send-btn'>
                      <div>
                        <button className='deposit-btn'>send now</button>
                        <p className='text-center' style={{marginTop: '5px', fontSize: '12px'}}>Your Balance: 1.402541 BNB</p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <h3 className='text-center aridrop'>direct airdrop</h3>
                  <form action="">
                    <label htmlFor="">Recipient</label>
                    <input type="text"  className='input form-control' placeholder='Type recepient'/>
                    <label htmlFor="" style={{marginTop: '15px'}}>Amount in BNB</label>
                    <input type="text"  className='input form-control' defaultValue="0.1"/>
                    <div className='airdrop-send-btn'>
                      <div>
                        <button className='deposit-btn' style={{marginTop: '42px'}}>send now</button>
                        <p className='text-center' style={{marginTop: '5px', fontSize: '12px'}}>Your Balance: 1.402541 BNB</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="invest-card invest-6">
            <div className="invest-card-header" style={{backgroundImage: "url('img/card-header.png')"}}>
              <h3>airdrop statistics</h3>
            </div>
            <div className="invest-card-body">
              <div className="row">
                <div className="col-md-6">
                  <p className='text-center statistics-title'>last airdrop sent</p>
                  <p className='statistics-detail text-center'>Never</p>
                  <p className='text-center statistics-title'>total airdrop sent</p>
                  <p className='statistics-detail text-center'>0 BNB</p>
                  <p className='text-center statistics-title'>airdrops available</p>
                  <p className='statistics-detail text-center'>0 BNB</p>
                </div>
                <div className="col-md-6">
                  <p className='text-center statistics-title'>total airdrops claimed</p>
                  <p className='statistics-detail text-center'>0 BNB</p>
                  <p className='text-center statistics-title'>contracts total airdrops</p>
                  <p className='statistics-detail text-center'>0 BNB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}