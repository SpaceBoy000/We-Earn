import React from 'react';

export default class Works extends React.Component {
  render () {
    return (
      <div id="works">
        <div className="container section-body">
          <div className="service">
            <div className="service-body works-body" style={{marginTop: '30px'}}>
              <h1 style={{color:"#000"}}>Anti Whale Withdrawal Taxes</h1>
              <p>
                Withdrawal taxes in the project are scaled based on the amount of the withdrawal compared to the total amount of the contract balance.
              </p>
              <br/>
              <p>
                See breakdown of fees below:
              </p>
              <br/>
              <p>
                ▫️ 0% tax additional if amount is &#60; 1% of contract balance<br/>
                ▫️ 5% tax additional if amount is >= 1% of contract balance<br/>
                ▫️10% tax additional if amount is >= 2% of contract balance<br/>
                ▫️15% tax additional if amount is >= 3% of contract balance<br/>
                ▫️20% tax additional if amount is >= 4% of contract balance<br/>
                ▫️25% tax additional if amount is >= 5% of contract balance<br/>
                ▫️30% tax additional if amount is >= 6% of contract balance<br/>
                ▫️35% tax additional if amount is >= 7% of contract balance<br/>
                ▫️40% tax additional if amount is >= 8% of contract balance<br/>
                ▫️45% tax additional if amount is >= 9% of contract balance<br/>
                ▫️50% tax additional if amount is >= 10% of contract balance<br/><br/>
                * LEGEND:<br/>
                = - Equal to<br/>
                &#60; - Less Than or<br/>
                &#62; - Greater Than or<br/><br/><br/>
                Withdrawal taxes are additional on 10% base tax for withdrawls.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}