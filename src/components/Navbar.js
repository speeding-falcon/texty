import React, { useState } from 'react'
import PropTypes from 'prop-types';
import About from './about';
import { Link } from 'react-router-dom';
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
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/" >Contact</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="fld"/>
        <label className="form-check-label" htmlFor="fld">{props.mode==='dark'?'Light Mode':'Dark Mode'}</label>
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