import { useRef, useEffect } from "react";
import '../../assets/new-components.css';
export const Header = (props) => {
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);

  return (
    <div style={{position: 'relative'}}>
      <div>
        <video 
          src="img/media.mp4"
          ref={ vidRef }
          muted
          autoPlay
          loop
          style={{width: '100%', minHeight: '300px'}}
        />
      </div>
      <header id='header' style={{position: 'absolute', width: '100%', top: '0px'}}>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 introduction-text'>
                  <h1>
                    {/* Start investing right now! */}
                    Let's contact on Telegram! My Telegram ID: @cryptospaceboy00
                  </h1>
                  <div>
                    <span style={{color: '#fff'}}>
                      In June last year, TVL sat at about $1 billion worth of cryptocurrency deposited in DeFi applications. Today, the TVL figure exceeds the $60 billion mark. We specialize in capitalizing on this incredible growth.
                      Join us and benefit from our profitable investments</span>
                  </div>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
