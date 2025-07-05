import '../styles/Header.css'
import React, { useState } from 'react';

function Header() {
    const [a,seta]=useState(true)
    function mode(){
        seta(!a)
    }

    const [menu,setmenu]=useState(true)
    function change(){
      setmenu(!menu)
    }
  return (
    <>
      <nav className="navbar-expand navbar " id={a? 'navbar1' : 'navbar2'} >
        <div className="container">
            <a className="navbar-brand" href="#"><span className='name_first' >S</span>anthosh</a>
            {menu? <i className="fa-solid fa-bars ms-auto nav-icon " onClick={change}></i>:<i className="fa-solid fa-xmark ms-auto nav-icon  " onClick={change}></i> }
            <div className="le" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
                </li>
                 <li className="nav-item">
                <a className="nav-link" href="#about">about</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#skill_nav">skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#project">projects</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="#">experiance</a>
                </li> */}
                {/* <li className="nav-item">
                <a className="nav-link" href="#">certificates</a>
                </li> */}
                <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
                </li>
                 <li className="nav-item">
                <a className='nav-link' onClick={mode}> {a?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>} </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className={menu?"sec_nav":"sec_nav2"}>
        <ul className='nav_small' >
          <li className='sm_list' >home</li>
          <li className='sm_list' >about</li>
          <li className='sm_list' >skills</li>
          <li className='sm_list' >projects</li>
          <li className='sm_list' >experiance</li>
          <li className='sm_list' >certificates</li>
          <li className='sm_list' >contact</li>
        </ul>
        </div>
    </>
  )
}

export default Header
