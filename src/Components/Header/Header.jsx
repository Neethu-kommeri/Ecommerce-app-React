import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>

      <Link to = '/' className="no-underline">    <h1> NEETHU STORE</h1> </Link>


    <Link to = '/Logout'><button className='logout-button'>Log out</button>  </Link>

   </header>
  )
}

export default Header