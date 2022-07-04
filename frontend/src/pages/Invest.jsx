import React from 'react';
import Navigation from "../components/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../components/footer";

import { useContractContext } from "../providers/ContractProvider";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import { config } from "../config";
import '../assets/invest.css';
import { Button } from '@mui/material';

export const numberWithCommas = (x, digits = 3) => {
  return Number(x).toLocaleString(undefined, { maximumFractionDigits: digits });
}

export function prettifySeconds(seconds, resolution = "hr") {
  if (seconds !== 0 && !seconds) {
    return "";
  }

  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  if (resolution === "day") {
    return d + (d == 1 ? " day" : " days");
  }

  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " min" : " mins") : "";

  let result = dDisplay + hDisplay + mDisplay;
  if (mDisplay === "") {
    result = result.slice(0, result.length - 2);
  }

  return result;
}

export default function Invest() {
  
  const { contract, contractUSDT, wrongNetwork, getBnbBalance, fromWei, toWei, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const MAX_REINVEST_MULTIPLIER = 500;
  const TIME_STEP = 86400; // 1 day
  const [walletBalance, setWalletBalance] = useState(0);
  const [yourSponsor, setYourSponsor] = useState('');
  const [amount, setAmount] = useState(0);
  const [userInfo, setUserInfo] = useState({
    upline: '',
    checkpoint: 0,
    deposit_amount: 0,
    payouts: 0,
    direct_bonus: 0,
    pool_bonus: 0,
    match_bonus: 0
  });
  const [users, setUsers] = useState();

  const [initialAmount, setInitialAmount] = useState(1);
  const [reinvestDays, setReinvestDays] = useState(1);

  const [airdropAddress, setAirdropAddress] = useState('');
  const [airdropTeamID, setAirdropTeamID] = useState(0);
  const [amountAirdrop, setAmountAirdrop] = useState(0);
  const [amountTeamAirdrop, setAmountTeamAirdrop] = useState(0);
  const [airdropExcludeOwnerOption, setAirdropExcludeOwnerOption] = useState(false);
  const [payoutInfo, setPayoutInfo] = useState();

  // smart contract statistics
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalDeposited, setTotalDeposited] = useState(0);
  const [totalWithdraw, setTotalWithdraw] = useState(0);
  const [totalReinvested, setTotalReinvested] = useState(0);
  const [totalAirdrops, setTotalAirdrops] = useState(0);
  const [totalTeamsCreated, setTotalTeamsCreated] = useState(0);

  // Airdrop
  const [airdropInfo, setAirdropInfo] = useState('');
  const [userBonusStateInfo, setUserBonusStateInfo] = useState('');

  const fetchWalletBalance = async () => { 
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance(0);

      return;
    }

    const [ bnbAmount, userInfo, airdropInfo, userBonusStateInfo, users, payoutInfo ] = await Promise.all([
      getBnbBalance(address),
      contract.methods.userInfo(address)
              .call()
              .catch((err) => {
                console.error('error: ', err);
              }),
      contract.methods.airdrops(address)
              .call()
              .catch((err) => {
                console.error('error: ', err);
              }),
      contract.methods.userBonusStats(address)
              .call()
              .catch((err) => {
                console.error('error: ', err);
              }),
      contract.methods.users(address)
              .call()
              .catch((err) => {
                console.error('error: ', err);
              }),
      contract.methods.payoutOf(address)
              .call()
              .catch((err) => {
                console.error('error: ', err);
              })
    ]);

    setWalletBalance(fromWei(`${bnbAmount}`));
    console.log("airdropInfo.airdrops_sent: ", fromWei(airdropInfo.airdrops_sent));
    // console.log("User Info: ", userInfo);
    setUserInfo({
      upline: userInfo.upline,
      checkpoint: userInfo.checkpoint,
      deposit_amount: fromWei(userInfo.deposit_amount),
      payouts: fromWei(userInfo.payouts),
      direct_bonus: fromWei(userInfo.direct_bonus),
      pool_bonus: fromWei(userInfo.pool_bonus),
      match_bonus: fromWei(userInfo.match_bonus)
    });

    setAirdropInfo(airdropInfo);
    setUserBonusStateInfo(userBonusStateInfo);
    setUsers(users);
    setPayoutInfo(payoutInfo);
    console.log("payoutInfo: ", payoutInfo);

    return;
  }

  const fetchContractInfo = async () => {
    if (!web3 || wrongNetwork) {
      return;
    }

    const [totalUsers, totalDeposited, totalWithdraw, totalReinvested, totalAirdrops, totalTeamsCreated] = await Promise.all([
      contract.methods.total_users().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
      contract.methods.total_deposited().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
      contract.methods.total_withdraw().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
      contract.methods.total_reinvested().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
      contract.methods.total_airdrops().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
      contract.methods.total_teams_created().call()
                          .catch((err) => {
                            console.error(err);
                            return 0;
                          }),
    ]);

    setTotalUsers(totalUsers);
    setTotalDeposited(fromWei(totalDeposited));
    setTotalWithdraw(fromWei(totalWithdraw));
    setTotalReinvested(fromWei(totalReinvested));
    setTotalAirdrops(fromWei(totalAirdrops));
    setTotalTeamsCreated(totalTeamsCreated);
  }

  useEffect (() => {
    fetchContractInfo();
    fetchWalletBalance();
  }, [address, web3, chainId]);

  const handleInputAmount = (value) => {
    setAmount(value);
  }

  const handleSponsor = (value) => {
    setYourSponsor(value);
  }

  const handleInitialAmount = (value) => {
    setInitialAmount(value);
  }

  const handleReinvestDays = (value) => {
    setReinvestDays(value);
  }

  const handleAirdropTeamID = (value) => {
    setAirdropTeamID(value);
  }

  const handleAmountTeamAirdrop = (value) => {
    setAmountTeamAirdrop(value);
  }

  const handleAirdropAddress = (value) => {
    setAirdropAddress(value);
  }

  const handleAmountAirdrop = (value) => {
    setAmountAirdrop(value);
  }

  const onDeposit = async () => {
    if (amount == 0) {
      console.log('please input deposit amount');

      return;
    }
    if (yourSponsor == '') {
      console.log('please input your sponsor');
      
      return;
    }

    setLoading(true);

    try {
      await contract.methods.deposit(yourSponsor).send({from: address, value: toWei(amount)});
    } catch (err) {
      console.error(err);
    }
    // fetchWalletBalance();
    // fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };

  const onReinvest = async () => {
    console.log('Reinvest');
    setLoading(true);

    try {
      await contract.methods.reinvest().send({from: address});
    } catch (err) {
      console.error(err);
    }
    // fetchWalletBalance();
    // fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };

  const onWithdraw = async () => {
    console.log('Withdraw');
    setLoading(true);

    try {
      await contract.methods.withdraw().send({from: address});
    } catch (err) {
      console.error(err);
    }
    // fetchWalletBalance();
    // fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };

  const onAirdrop = async () => {
    console.log('Airdrop');
    setLoading(true);

    try {
      await contract.methods.airdrop(airdropAddress).send({from: address, value: toWei(amountAirdrop)});
    } catch (err) {
      console.error(err);
    }
    // fetchWalletBalance();
    // fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };

  const onTeamAirdrop = async () => {
    console.log('TeamAirdrop ID: ', airdropTeamID);
    console.log('TeamAirdrop Amount: ', amountTeamAirdrop);
    console.log('TeamAirdrop airdropExcludeOwnerOption: ', airdropExcludeOwnerOption);
    setLoading(true);

    try {
      await contract.methods.teamAirdrop(airdropTeamID, airdropExcludeOwnerOption)
            .send({from: address, value: toWei(amountTeamAirdrop)});
    } catch (err) {
      console.error(err);
    }
    // fetchWalletBalance();
    // fetchContractBNBBalance();
    // fetchLottoryInfo();
    setLoading(false);
  };


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
                  <p className='invest-count'>Tour reinvest count: <font>0 BNB</font></p>
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
                    <h3 className='text-center'><font>{userInfo.deposit_amount}</font> ($2.24)</h3>
                  </div>
                  <div className='invest-catagory'>
                    <p className='text-center'>Widthrawn</p>
                    <h3 className='text-center'><font>0BNB</font> ($0.00)</h3>
                  </div>
                  <div className='invest-catagory'>
                    <p className='text-center'>Last Action</p>
                    <h3 className='text-center'><font>{ userInfo.checkpoint > 0 ? prettifySeconds(new Date() / 1000 - userInfo.checkpoint) + ' ago': "Never" }</font></h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='invest-catagory'>
                    <p className='text-center'>Max Payout Left</p>
                    <h3 className='text-center'><font>{ (address && payoutInfo) ? fromWei((payoutInfo.max_payout - payoutInfo.payout).toString()) : 0 } BNB</font> ($8.18)</h3>
                  </div>
                  <div className='invest-catagory'>
                    <p className='text-center'>Total roi</p>
                    <h3 className='text-center'><font>0%</font></h3>
                  </div>
                  <div className='invest-catagory'>
                    <button className='btn_reinvest' onClick={onReinvest} />
                    <p className='text-center' style={{marginTop:"10px", fontSize: '12px'}}>{ userInfo.checkpoint > 0 ? prettifySeconds( Math.max(Number(userInfo.checkpoint) + Number(TIME_STEP) - new Date() / 1000, 0)) + '  until your next action': "" }</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='invest-catagory'>
                    <p className='text-center'>Unwidthrawn</p>
                    <h3 className='text-center'><font>0.0000001BNB</font> ($0.00)</h3>
                  </div>
                  <div className='invest-catagory'>
                    <p className='text-center'>airdrops</p>
                    <h3 className='text-center'><font>{ airdropInfo ? fromWei(airdropInfo.airdrops_sent) : "0" } BNB</font>($0.000)</h3>
                  </div>
                  <div className='invest-catagory'>
                    <button className='btn_withdraw' onClick={onWithdraw}>
                      {/* <img src="img/withdraw.png" alt="" /> */}
                    </button>
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
                    <input type="text" className='form-control input' placeholder='0x000...'
                      onChange = {e => handleSponsor(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <p>Amount in BNB</p>
                    <input type="number" className='form-control input' placeholder='0.1 (BNB)'
                      onChange = {e => handleInputAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className='deposit-btn-group'>
                  <div>
                    <button className='deposit-btn' onClick={ onDeposit }> deposit </button>
                    <button className='credit-card-btn'>buy with credit card</button>
                    {/* <iframe height="500" title="chainbits widget"
                      src="https://buy.chainbits.com/?crypto=BNB&fiat=USD&amount=100"
                      frameborder="no" allowtransparency="true" allowfullscreen=""
                      style="display: block; width: 100%; max-height: 500px; max-width: 400px;"
                      defaultCryptoCurrency="BNB">
                    </iframe> */}
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
                  <input type="number" className='form-control input revenue-input' defaultValue='1'
                    onChange={e => handleInitialAmount(e.target.value)}
                  />
                  <div className='revenue-info'>
                    <p>Your revenue: Daily 1.5% {numberWithCommas(0.015 * initialAmount)} BNB</p>
                  </div>
                </div>
                <p style={{marginTop: '20px'}}>Total days of reinvestment</p>
                <div className="reinvest-input" >
                  <input type="number" className='form-control input deposit-input' defaultValue='1'
                    onChange={e => handleReinvestDays(e.target.value)}
                  />
                  <div className='deposit-info'>
                    <p>Deposit after {reinvestDays} Days: {Number(initialAmount) + Number(0.005 * reinvestDays)} BNB | Daily 1.5%: { 0.005 * reinvestDays } BNB</p>
                  </div>
                </div>
                <div className='deposit-btn-group'>
                  <button className='deposit-btn' onClick={onReinvest}>invest now</button>
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
                    <p className='text-center'>{ address }</p>
                    <p className='text-center statistics-title'>referred by</p>
                    <p className='text-center'>{ userInfo.upline }</p>
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
                    <p className='text-center statistics-title'> total members </p>
                    <p className='statistics-detail text-center'>{ totalUsers }</p>
                    <p className='text-center statistics-title'>total bnb deposits all time</p>
                    <p className='statistics-detail text-center'>{ totalDeposited }</p>
                    <p className='text-center statistics-title'>total withdrawn by members</p>
                    <p className='statistics-detail text-center'>{ totalWithdraw }</p>
                    <p className='text-center statistics-title'>total reinvested by members</p>
                    <p className='statistics-detail text-center'>{ totalReinvested }</p>
                    <p className='text-center statistics-title'>top sponsor reward pool</p>
                    <p className='statistics-detail text-center'>{}</p>
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
                  <input type="text"  className='input form-control' placeholder='Please type Team ID'
                    onChange={e => handleAirdropTeamID(e.target.value)}
                  />
                  <label htmlFor="" style={{marginTop: '15px'}}>Amount in BNB</label>
                  <input type="text"  className='input form-control' placeholder='Please input BNB amount'
                    onChange={e => handleAmountTeamAirdrop(e.target.value)}
                  />
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
                      <button className='deposit-btn' onClick={onTeamAirdrop}>send now</button>
                      <p className='text-center' style={{marginTop: '5px', fontSize: '12px'}}>Your Balance: { walletBalance } BNB</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <h3 className='text-center aridrop'>direct airdrop</h3>
                <form action="">
                  <label htmlFor="">Recipient</label>
                  <input type="text"  className='input form-control' placeholder='Type recepient'
                    onChange={e => handleAirdropAddress(e.target.value)}
                  />
                  <label htmlFor="" style={{marginTop: '15px'}}>Amount in BNB</label>
                  <input type="text"  className='input form-control' placeholder='Please input BNB amount'
                    onChange={e => handleAmountAirdrop(e.target.value)}
                  />
                  <div className='airdrop-send-btn'>
                    <div>
                      <button className='deposit-btn' style={{marginTop: '42px'}} onClick={onAirdrop}>send now</button>
                      <p className='text-center' style={{marginTop: '5px', fontSize: '12px'}}>Your Balance: { walletBalance } BNB</p>
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
                <p className='statistics-detail text-center'>{ airdropInfo.airdrops_sent_count > 0 ? (new Date(airdropInfo.last_airdrop * 1000)).toUTCString() : "Never"}</p>
                <p className='text-center statistics-title'>total airdrop sent</p>
                <p className='statistics-detail text-center'>{ airdropInfo ? fromWei(airdropInfo.airdrops_sent) : "0" } BNB</p>
                <p className='text-center statistics-title'>airdrops available</p>
                <p className='statistics-detail text-center'>{ users ? fromWei((users.total_direct_deposits * MAX_REINVEST_MULTIPLIER - users.deposit_amount).toString()) : '0'}  BNB</p>
              </div>
              <div className="col-md-6">
                <p className='text-center statistics-title'>total airdrops claimed</p>
                <p className='statistics-detail text-center'>{ userBonusStateInfo ? fromWei(userBonusStateInfo.airdrops_withdrawn) : "0" } BNB</p>
                <p className='text-center statistics-title'>contracts total airdrops</p>
                <p className='statistics-detail text-center'>{ totalAirdrops } BNB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

