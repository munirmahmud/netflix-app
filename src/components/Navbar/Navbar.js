import React, { useEffect, useState } from 'react';
import './Navbar.elements.css';
const logo = '/images/logo.svg';

const Navbar = () => {
    const [show, handleShow] = useState(false);

    const showNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showNavbar);

        return () => {
            window.removeEventListener('scroll', showNavbar);
        };
    }, []);
    
    return (
        <nav className={`navbar ${show ? 'active' : ''}`}>
            <img className="nav__logo" src={logo} alt="Netflix"/>
        </nav>
    )
}

export default Navbar;
