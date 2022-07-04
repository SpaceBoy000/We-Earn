import { Link } from "react-router-dom";
import React from 'react';
import CachedIcon from "@mui/icons-material/Cached";

import { useAuthContext } from "../providers/AuthProvider";
import { Button } from "@mui/material";

const investStyle = {
  border: '2px solid #337ab7'
}

export function shorten(str) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

const Navigation = () => {

  const { address, loading, connect, disconnect } = useAuthContext();

  return (
    <>
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
              <li>
                <Link to='/invest' className='page-scroll' 
                  >
                  Invest Now
                </Link>
              </li>
              <li>
                <Button onClick={ () => { address ? disconnect() : connect() }} style={{fontSize:"17px", color:"white", fontWeight:"bold", paddingTop:"11px"}}>
                  { address ? shorten(address) : "connect" } <CachedIcon sx={{marginLeft: '10px'}}/>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navigation;
