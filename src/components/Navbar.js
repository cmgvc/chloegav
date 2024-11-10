import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navbarRef.current, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out' } 
        );
    }, []);

    return (
        <nav ref={navbarRef} id="navbar">
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            </ul>
            <div className='icons'> 
                <a href="https://www.linkedin.com/in/chloe-gavrilovic-b911551b4/" target="_blank" rel="noreferrer">
                    <LinkedInIcon /></a>
                <a href="https://github.com/cmgvc" target="_blank" rel="noreferrer">
                    <GitHubIcon /></a>
            </div>
        </nav>
    );
}

export default Navbar;
