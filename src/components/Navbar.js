import React from 'react'
import logo from '../assets/Group.svg'
import { MenuItems } from './MenuItems'
import { useState } from 'react'
import '../styles/Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <nav className='nav-items'>
            <div>
                <img  className='navbar-logo' src={logo} alt='logo'/>
            </div>
            <div className='navbar-icon' onClick={() => setClick(!click)}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                        )
                        })}
            </ul>
        <button className='button-1'>Sign Up</button>
    </nav>
  )
}

export default Navbar
