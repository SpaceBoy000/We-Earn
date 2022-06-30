export const Future = (props) => {
  return (
    <div id="future">
      <div className="container section-body">
        <div className="calculator">
          <p className="text-center calculate-txt">Calculate your daily passive income considering a reinvestment period</p>
          <div style={{boxShadow: 'box-shadow: 2px 2px 5px 0px #714484;'}}>
            <div className="calculator-header" style={{backgroundImage: "url('img/card-header.png')"}}>
              <h1 className="calculator-title">PROFIT CALCULATOR</h1>
            </div>
            <div className="calculator-body">
              <div className="invest">
                <div>
                  <p>Amount Invested</p>
                  <input type="number"/>
                </div>
                <div>
                  <p>Compounding Amount</p>
                  <input type="number" style={{width: '45px'}} placeholder="NO"/>
                  <input type="number" style={{width: '60px', marginLeft: '15px'}}/><span style={{marginLeft: '-25px'}}>%</span>
                  <input type="number" style={{width: '60px', marginLeft: '30px'}}/><span style={{marginLeft: '-25px'}}>%</span>
                </div>
                <div>
                  <p>Duration</p>
                  <input type="number" style={{width: '120px'}} placeholder="days"/>
                </div>
              </div>
              <div className="result">
                <p className="result-title">your results</p>
                <div className="result-body">
                  <div className="result-1">
                    <div style={{background: '#ccc'}}>
                      <p>
                        Starting Daily Profit
                      </p>
                    </div>
                    <div style={{background: '#2b2d42'}}>
                      <p style={{color: '#fff'}}>
                        0.03000000000
                      </p>
                    </div>
                  </div>
                  <div className="result-2">
                    <div style={{background: '#ccc'}}>
                      <p>
                        Total Return
                      </p>
                    </div>
                    <div style={{background: '#2b2d42'}}>
                      <p style={{color: '#fff'}}>
                        1.9000000000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invest-section">
                <a
                  className='btn btn-custom btn-lg page-scroll invest-btn'
                >
                  Invest Now
                </a>
                <p className="text-center">INFORMATION: The values shown in the Profit Calculator are for informational purposes only.
                  <br />The actual profit rates may vary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
