import React, { useState } from 'react'
import PropTypes from 'prop-types';
import About from './about';

export default function Navbar(props) {
  
  let textColor = 'light';
    if(props.mode == 'dark'){
      
      textColor = 'light';
    }
    else{
      
      textColor = 'dark';
    }

  
  return (
    
    
    <>
    <div>
      <nav className={`navbar navbar-expand-md bg-${props.mode==='dark'?'dark':'warning'} py-0`} data-bs-theme = {`${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="/" >Contact</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode==='dark'?'Light Mode':'Dark Mode'}</label>
      </div>
    </div>
  </div>
</nav>
    </div>
    
    </>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
  about : PropTypes.string
}

Navbar.defaultProps = {
  
  about: "set about"
}