import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar';
import Type from '../components/Type.js';
import laptopImg from "../assets/headshot.png";

function Home() {
    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null); 
    const [isHomeLoaded, setIsHomeLoaded] = useState(false);

    useEffect(() => {
        if (lastNameRef.current) {
            handleAnimateLastName(lastNameRef.current).then(() => {
                handleAnimateFirstName(firstNameRef.current).then(() => {
                    handleFinalAnimation(firstNameRef.current, lastNameRef.current).then(() => {
                        setIsHomeLoaded(true);
                    });
                });
            });
        }
    }, []);

    return (
        <div className='home-page'>
            <div className={`home ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
                <div className="title">
                    <div ref={lastNameRef} className="lastName">
                        Gavrilovic
                    </div>
                    <div ref={firstNameRef} className="firstName">
                        Chloe
                    </div>
                </div>
            
            {isHomeLoaded ? (
                <div>
                    <Navbar />
                    <div className="typewriter">
                        <Type />
                    </div>
                    <div className='home-container'>
                        <div className="name-tag-container">
                            <div className="name-tag-card">
                                <div className="name-tag-front">
                                    <div className="name-tag-header">Hi my name is</div>
                                    <p>CHLOE</p>
                                </div>

                                <div className="name-tag-back">
                                    <img src={laptopImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`about-me`}>
                        <h1>/about</h1>
                        <p>
                            I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I am a quick learner and am always looking to expand my skill set. I am currently looking for a full-time position as a software engineer.
                        </p>   
                    </div>
                    <div className={`experience`}>
                        <h1>/experience</h1>
                        <p>
                            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I have created several web applications, including a weather app, a chat app, and a portfolio website. I am a quick learner and am always looking to expand my skill set. I am currently looking for a full-time position as a software engineer.
                        </p>
                    </div>
                    <div className={`experience`}>
                        <h1>/experience</h1>
                        <p>
                            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I have created several web applications, including a weather app, a chat app, and a portfolio website. I am a quick learner and am always looking to expand my skill set. I am currently looking for a full-time position as a software engineer.
                        </p>
                    </div>
                    <div className={`experience`}>
                        <h1>/experience</h1>
                        <p>
                            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I have created several web applications, including a weather app, a chat app, and a portfolio website. I am a quick learner and am always looking to expand my skill set. I am currently looking for a full-time position as a software engineer.
                        </p>
                    </div>
                </div>
            ) : null}
            </div>
        </div>
    );
}

export default Home;
