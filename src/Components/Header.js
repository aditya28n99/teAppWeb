import React from 'react'

import '../Styles/Header.css';

import ute from '../Images/PA.png';
import { NavLink } from 'react-bootstrap';

function Header() {

  return (
    <>
    <div className='Navbar'>
    <img id='navimg' alt='background' src={ute}></img>
    <div className='SubNav'>
    <NavLink to={'/'} className='Navlinks' id='close'>Close</NavLink>
    <span className='Saperator'>|</span>
    <NavLink to={'/'} className='Navlinks' id='settings'>Settings</NavLink>
    <span className='Saperator'>|</span>
    <NavLink to={'/'} className='Navlinks' id='language'>Language</NavLink>
    <span className='Saperator'>|</span>
    <NavLink to={'/'} className='Navlinks' id='help'>Help</NavLink>
    <NavLink to={'/'} className='Navlinks' id='tool'>Tools</NavLink>
    </div>
    </div>
    </>
  )
}

export default Header;