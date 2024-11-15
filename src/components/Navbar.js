import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import '../styles/Navbar.css';
import { ScrollLink } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
                <li><p 
                    onClick={() => {
                        const anchor_home = document.querySelector('#homepage')
                        anchor_home.scrollIntoView({ behavior: 'smooth' })
                    }}>Home</p></li>
                <p 

                    onClick={() => {
                        const anchor = document.querySelector('#about')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>About</p>
                <p 
                    onClick={() => {
                        const element = document.querySelector('#experience')
                        element.scrollIntoView({ behavior: 'smooth'})
                    }}>Experience</p>
                <p 
                    onClick={() => {
                        const anchor = document.querySelector('#projects')
                        anchor?.scrollIntoView({ behavior: 'smooth'})
                    }}>Projects</p>
            </ul>
            <div className='icons'> 
                <a href="mailto:me@chloegav.com" target="_blank" rel="noreferrer">
                <EmailIcon /></a>
                <a href="https://www.linkedin.com/in/chloe-gavrilovic-b911551b4/" target="_blank" rel="noreferrer">
                    <LinkedInIcon /></a>
                <a href="https://github.com/cmgvc" target="_blank" rel="noreferrer">
                    <GitHubIcon /></a>
            </div>
        </nav>
    );
}

export default Navbar;
