import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar.js';
import Type from '../components/Type.js';
import laptopImg from "../assets/headshot.png";
import Footer from '../components/Footer.js';
import {TitleGroup} from '../components/TitleGroup.js';
import About from '../sections/About.js';
import Experience from '../sections/Experience.js';
import Projects from '../sections/Projects.js';

function Home() {
    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null); 
    const [isHomeLoaded, setIsHomeLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        if (lastNameRef.current) {
            handleAnimateLastName(lastNameRef.current, firstNameRef.current).then(() => {
                handleFinalAnimation(firstNameRef.current, lastNameRef.current).then(() => {
                    setIsHomeLoaded(true);
                });
            });
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='homepage' id="home-page">
            <div className={`home ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
                <div className="animation-title">
                    <div ref={lastNameRef} className={`lastName ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
                        Gavrilovic
                    </div>
                    <div ref={firstNameRef} className={`firstName ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
                        Chloe
                    </div>
                </div>
            
            {isHomeLoaded ? (
                <div id='homepage'>
                    <Navbar />
                    <TitleGroup containerClass="" titleClass="title" count={3} />
                    <TitleGroup containerClass="" titleClass="title-right" count={3} />
                    <TitleGroup containerClass="third-title" titleClass="title" count={3} />
                    <div className="typewriter">
                        <Type />
                    </div>
                    <About />
                    <div className='home-container'>
                        <div className="name-tag-container">
                            <div className="name-tag-card">
                                <div className="name-tag-front">
                                    <div className="name-tag-header">Hello my name is</div>
                                    <p>CHLOE</p>
                                </div>

                                <div className="name-tag-back">
                                    <img src={laptopImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Experience />
                    <Projects />
                    <Footer />
                </div>
            ) : null}
            </div>
        </div>
    );
}

export default Home;