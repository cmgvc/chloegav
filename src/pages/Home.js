import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar';
import Type from '../components/Type.js';
import laptopImg from "../assets/headshot.png";
import { Tabs, Tab, Box } from '@mui/material'; 

function Home() {
    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null); 
    const [isHomeLoaded, setIsHomeLoaded] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

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
                                    <div className="name-tag-header">Hello my name is</div>
                                    <p>CHLOE</p>
                                </div>

                                <div className="name-tag-back">
                                    <img src={laptopImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about" className={`about-me`}>
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
                            <p class="initial-text"><strong>Fun fact</strong></p>
                            <p class="fun-fact-text">I was a high performance synchronized swimmer for 12 years and represented Canada at the Junior Pan American Games in 2019!</p>
                        </div>

                    </div>
                    <div id='experience' className={`experience`}>
                        <h1>/experience</h1>
                        <p>
                            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I have created several web applications, including a weather app, a chat app, and a portfolio website. I am a quick learner and am always looking to expand my skill set. I am currently looking for a full-time position as a software engineer.
                        </p>
                        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                centered
                                sx={{
                                    '& .MuiTab-root': {
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        padding: '6px 12px',
                                    },
                                    '& .Mui-selected': {
                                        color: '#55755b !important', 
                                        fontWeight: 'bold',
                                    },
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: '#55755b', 
                                    },
                                }}
                            >
                                <Tab label="Amazon" />
                                <Tab label="McGill University" />
                                <Tab label="Royal Victoria Hospital" />
                                <Tab label="McGill Biomechanics" />
                                <Tab label="MSBN Consulting" />
                            </Tabs>
                            <Box sx={{ padding: 3 }} className='tab-content'>
                                {value === 0 && <div>
                                    <h2>Software Development Engineer Intern</h2>
                                    <h3>Summer 2024</h3>
                                    <p>
                                        At Amazon, I developed a <strong>full-stack platform</strong> for the <strong>Ordering Accounting team</strong>--used by over 100 Amazon engineers--that automated the execution of a service to
                                        redrive accounting workflows triggered by financially significant events. 
                                        This included building a <strong>responsive React website</strong> from scratch and integrating other financial services into the backend to seamlessly handle accounting events.
                                         <br></br><br></br>
                                         This experience allowed me to enhance both frontend and backend development skills, leveraging <strong>AWS 
                                            Lambda, DynamoDB, and EventBridge</strong>, and collaborating with cross-functional teams to create operational improvements.
                                            Throughout the project, I followed best practices for the <strong>full software development life cycle</strong>, including coding standards, code reviews, source control management, build processes, testing, and operations.
                                </p></div>}
                                {value === 1 && <div>
                                    <h2>Undergraduate Course Assistant</h2>
                                    <h3>August 2022 - December 2023</h3>
                                    <p>
                                        At <strong>McGill University</strong>, I served as an <strong>Undergraduate Course Assistant</strong> for an anatomy course, 
                                        where I facilitated weekly lab sessions for a diverse group of 20 students, fostering an interactive learning environment. I also streamlined
                                         grading and feedback processing by developing <strong>Python scripts</strong>, improving both efficiency and accuracy.
                                        </p>
                                    </div>}
                                {value === 2 && <div>
                                    <h2>Intensive Care Unit Volunteer Attendant</h2>
                                    <h3>September 2020 - May 2023</h3>
                                    <p>
                                    As an <strong>ICU Volunteer Attendant</strong> at the <strong>Royal Victoria Hospital</strong>, I provided support to over 100 visitors, patients, and healthcare staff in the ICU on a weekly basis. My responsibilities included greeting and escorting visitors around the ICU, ensuring their comfort, and keeping track of more than 30 patients using the <strong>ICU patient log</strong>. 
                                    This experience honed my communication and organizational skills, allowing me to assist healthcare teams while maintaining a calm and supportive environment for patients and their families.
                                    </p>
                                </div>}
                                {value === 3 && (
                                    <div>
                                    <h2>Software Developer</h2>
                                    <h3>September 2024 - Present</h3>
                                    <p>
                                    As a <strong>Software Developer</strong> at the <strong>McGill Biomechanics Club</strong>,
                                     I developed a <strong>full-stack platform</strong> that serves as a user portal for both patients 
                                     and doctors. The platform integrates real-time sensor EMG data to display results and trends in a 
                                     <strong>user-friendly</strong> way. This system enables patients and healthcare professionals to track 
                                     and analyze muscle activity and recovery in a clear, accessible format. I worked on both the frontend 
                                     and backend to ensure seamless integration and a smooth user experience.
                                     <br></br><br></br>
                                     I was involved in the <strong>full software development life cycle</strong>, including design, development, 
                                     testing, and deployment. This included gathering requirements, creating technical designs, implementing both 
                                     frontend and backend features, conducting code reviews, and ensuring the platform’s scalability. I also worked 
                                     on optimizing real-time data processing and enhancing user experience, ensuring that both patients and doctors could easily access and interpret critical health data.

                                    </p>
                                </div>
                                    )}

                                    {value === 4 && (
                                    <div>
                                    <h2>Consultant</h2>
                                    <h3>September 2023 - September 2024</h3>
                                    <p>
                                    As a <strong>Consultant</strong> at the <strong>McGill Social Business Network</strong>, 
                                    I provided pro-bono initiatives to develop marketing and financial strategies for a local 
                                    nonprofit organization. I helped expand more than 2 consignment opportunities and organized annual conferences to boost both awareness and profitability. My role involved collaborating with the client to create sustainable growth strategies while supporting their mission.
                                    </p>
                                </div>
                                    )}
                            </Box>
                            </Box>
                    </div>
                    <div id="projects" className={`projects`}>
                        <h1>/projects</h1>
                        
                    </div>
                </div>
            ) : null}
            </div>
        </div>
    );
}

export default Home;
