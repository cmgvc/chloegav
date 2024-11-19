import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import '../styles/Navbar.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Hamburger from 'hamburger-react';
import { set } from 'animejs';

const Navbar = () => {
    const navbarRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        gsap.fromTo(navbarRef.current, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out' } 
        );
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav ref={navbarRef} id="navbar" className={`navbar ${isOpen ? 'nav-open' : ''}`}>
            {isMobile ? <div className="burger">
                            <Hamburger onToggle={toggled => {
                                if (toggled) {
                                    setIsOpen(true)
                                } else {
                                    setIsOpen(false)
                                }
                            }} /> 
                        </div>: 
                            null}
            {isOpen || !isMobile ? 
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
                : null}
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
