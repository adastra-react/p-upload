import React from 'react'
import './styles/Header.css'
import logo from '../assets/images/Apple-Logo-PNG-Picture.png'

function Header() {
  return (
    <div className='header'>
        <div className='nav_bar'>
            <ul>
                <li><a href='#'>Prices and Services</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Account</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header