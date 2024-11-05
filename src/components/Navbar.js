// src/components/Navbar.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animations
import '../styles/Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        // Animate the navbar when it mounts
        gsap.fromTo(navbarRef.current, 
            { y: -100, opacity: 0 }, // Start off-screen and transparent
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out' } // Animate to original position and full opacity
        );
    }, []);

    return (
        <nav ref={navbarRef} id="navbar">
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
