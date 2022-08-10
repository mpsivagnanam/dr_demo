import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/pappyjoe.png';

export const Navbar = () => {
  return (
    <>
    
    <nav className="headernav">
    <img src={logo} className="App-logo" alt="logo"></img>
        <Link to='/'>Registration</Link>
        <Link to='/about'>Report</Link>

    </nav>
    </>
  )
}
