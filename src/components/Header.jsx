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
      <nav className="navbar-expand navbar " id= 'navbar1' >
        <div className="container">
            <a className="navbar-brand" href="#"><span className='name_first' >S</span>anthosh</a>
            {menu? <i className="fa-solid fa-bars ms-auto nav-icon " onClick={change}></i>:<i className="fa-solid fa-xmark ms-auto nav-icon  " onClick={change}></i> }
            <div className="le" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active " href="#home1">  Home</a>
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
                <li className="nav-item">
                <a className="nav-link" href="#contact">contact</a>
                </li>
               
            </ul>
            </div>
        </div>
        </nav>


        <div className={menu?"sec_nav":"sec_nav2"} id='navbar_small'  >
        <ul className='nav_small' >
          <br />
          <li className='sm_list' >
                <a  href="#home1" onClick={change} > <i className="fa-solid fa-house mx-2 "></i>  Home</a>
          </li>
          <li className='sm_list' >
                <a href="#about" onClick={change} > <i className="fa-solid fa-user mx-2"></i>  about</a>
          </li>
          <li className='sm_list' >
                <a  href="#skill_nav" onClick={change} > <i className="fa-solid fa-code mx-2"></i>  skills</a>
          </li>
          <li className='sm_list' >
                <a  href="#project" onClick={change} > <i className="fa-solid fa-layer-group mx-2"></i>  projects</a>
          </li>
          <li className='sm_list' >
                <a href="#contact" onClick={change} > <i className="fa-solid fa-phone mx-2"></i>  contact</a>
          </li>
        </ul>
        </div>
    </>
  )
}

export default Header
