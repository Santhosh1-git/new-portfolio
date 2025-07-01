import '../styles/Header.css'
import React, { useState } from 'react';

function Header() {
    const [a,seta]=useState(true)
    function mode(){
        seta(!a)
    }
  return (
    <>
      <nav className="navbar-expand navbar " id={a? 'navbar1' : 'navbar2'} >
        <div className="container">
            <a className="navbar-brand" href="#">santhoshkumar</a>
            <div className="le" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
                </li>
                 <li className="nav-item">
                <a className="nav-link" href="#">about</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">experiance</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">certificates</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
                </li>
                 <li className="nav-item">
                <a className='nav-link' onClick={mode}> {a?<i className="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>} </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header
