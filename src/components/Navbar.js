import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './css/Navbar.css'
function Navbar() {
      const [click, setClick] = useState(false);
      const [button, setButton] = useState(true);
      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false);
      const showButton = () => {
        if (window.innerWidth <= 960) {setButton(false);}
        else {setButton(true);}} 

        useEffect(() => {showButton()}, []);
        window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                {/* add logo image to left of navbar */}
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                   <img src="./logo/full-logo-png.png" alt='RC Autoworks GA'></img>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/contact" className="nav-links">Contact</Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/sign-up" className="nav-links-mobile">Sign Up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> Sign Up </Button>}
            </div>
        </nav>
    </>
   )
}

// export default navbar
export default Navbar