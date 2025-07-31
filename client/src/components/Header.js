import React from 'react';
import logo from '../assets/img/logo.png';


function Header() {
  return (
    <div className="header">
      <a href="/">
        <img id="logo" src={logo} style={{width: '100px'}} alt="Logo Minerva" />
      </a>
    </div>
  );
}

export default Header;