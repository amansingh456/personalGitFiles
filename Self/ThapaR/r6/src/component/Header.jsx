import React from 'react'
import '../index.css'
import logo from '../Images/logo.png'

function Header() {
  return (
    <>
    <div className="header">
      <img src={logo} alt="logo" /> &nbsp; &nbsp; 
      <h1> <span style={{color:'#4285F4'}}>D</span><span style={{color: '#DB4437'}}>o</span><span style={{color: '#DB4437'}}>o</span><span style={{color: '#0F9D58'}}>d</span><span style={{color: '#0F9D58'}}>l</span><span style={{color: '#4285f4'}}>e</span> Keep</h1>
    </div>
    </>
  );
};

export default Header;