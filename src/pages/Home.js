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
                            My name is Chloe and I'm a student at McGill University pursuing a Bachelor of Science.
                            I'm completing both a major in Software Engineering as well as in Anatomy and Cell Biology.
                            I'm from Ottawa, Ontario and I'm currently living in Montreal, Quebec. 
                            I am passionate about web development and am always looking to learn new things. 
                            <br></br><br></br>
                            Here are some technologies I have worked with:
                        </p>   
                        <div className="skills">
                            <ul class="hover-list">
                                <li>Python</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>C</li>
                                <li>HTML/CSS</li>

                            </ul>
                            <ul class="hover-list">
                                <li>OCaml</li>
                                <li>AWS</li>
                                <li>SQL</li>
                                <li>NoSQL (MongoDB)</li>
                                <li>Git</li>
                                <li>Express</li>
                                <li>Flask</li>
                            </ul>
                        </div>
                        <p> 
                                Some of my hobbies outside of tech include swimming, reading, finding new music, and learning about cars. 
                        </p>
                        <div class="fun-fact-box">
                            <p class="initial-text">Hover over for a fun fact</p>
                            <p class="fun-fact-text">I was a high performance synchronized swimmer for 12 years and represented Canada at the Junior Pan American Games in 2019!</p>
                        </div>

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
