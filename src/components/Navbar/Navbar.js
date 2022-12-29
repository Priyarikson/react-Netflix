import React from 'react';
import "./Navbar.css";
import logo from './logo.png';
import avatar from './avatar.png'

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav--logo"/>
      <img src={avatar} alt="avatar" className="nav--avatar"/>
    </div>
  )
}

export default Navbar