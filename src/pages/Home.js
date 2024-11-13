import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar.js';
import Type from '../components/Type.js';
import laptopImg from "../assets/headshot.png";
import { Tabs, Tab, Box } from '@mui/material'; 
import GitHub from '@mui/icons-material/GitHub';
import Footer from '../components/Footer.js';

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
            <div className={`home ${isHomeLoaded ? 'isHomeLoaded' : ''}`} id="home">
                <div className="title">
                    <div ref={lastNameRef} className={`lastName ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
                        Gavrilovic
                    </div>
                    <div ref={firstNameRef} className={`firstName ${isHomeLoaded ? 'isHomeLoaded' : ''}`}>
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
                            My name is Chloe and I'm a student at McGill University pursuing a Bachelor of Science with an expected graduation in 2025.
                            I'm completing both a major in Software Engineering as well as in Anatomy and Cell Biology.
                            I'm from Ottawa, Ontario and am currently living in Montreal, Quebec. 
                            <br></br><br></br>
                            Here are some technologies I have worked with:
                        </p>   
                        <div className="skills">
                            <ul className="hover-list">
                                <li>Python</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Three.js</li>
                                <li>Next.js</li>
                                <li>C</li>
                            </ul>
                            <ul className="hover-list">
                             <li>HTML/CSS</li>
                                <li>OCaml</li>
                                <li>AWS (Lambda, EventBridge, DynamoDB, S3, IAM)</li>
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
                        <div className="fun-fact-box">
                            <p className="initial-text"><strong>Fun fact</strong></p>
                            <p className="fun-fact-text">I was a high performance synchronized swimmer for 12 years and represented Canada at the Junior Pan American Games in 2019!</p>
                        </div>

                    </div>
                    <div id='experience' className='experience'>
                        <h1>/experience</h1>
                        
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
                                        I contributed to CI/CD pipelines for efficient deployment and integration testing and to ensure rapid releases.
                                         <br></br><br></br>
                                         This experience allowed me to enhance both frontend and backend development skills, leveraging <strong>AWS 
                                            Lambda, S3, DynamoDB, and EventBridge</strong>, and collaborating with cross-functional teams to create operational improvements.
                                            Throughout the project, I followed <strong>Agile methodologies</strong>, participating in sprint activities and iterative development, 
                                            while adhering to best practices for the <strong>full software development life cycle</strong>, including code reviews, source control, testing, and operations.
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
                                     and doctors. The platform integrates real-time sensor EMG data to display results in a  <strong>user-friendly</strong> way and support exoskeleton testing for tremor suppression and tremor monitoring. This system enables patients and healthcare professionals to track 
                                    muscle activity, analyze trends, and monitor progress in a clear, accessible format. I worked on both the frontend 
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
                        <div className="project-cards">
                            <div className="project-card">
                                <a href="https://we-are-fit.vercel.app/" target="_blank" rel="noreferrer">
                                    <h3>We Are Fit Web Application</h3>
                                    <h4>October 2024</h4>
                                </a>
                                <p>
                                    WeAreFit is a web-based fitness app designed to engage users in daily fitness challenges tailored to their desired difficulty levels. The platform encourages users to track their progress and participate in challenges either solo or with friends. Key features include leaderboards and a gamified experience that motivates users to achieve their fitness goals. Built with React.js for the frontend and Node.js with Express and MongoDB for the backend, WeAreFit leverages Vercel and Render for deployment, ensuring a seamless and scalable user experience.
                                </p>
                                <a href="https://github.com/cmgvc/WeAreFit" target="_blank" rel="noreferrer">
                                    <GitHub />
                                </a>
                            </div>
                            <div className="project-card">
                            <a href="https://chloegav.vercel.app/" target="_blank" rel="noreferrer">
                                    <h3>Personal Portfolio</h3>
                                    <h4>November 2024</h4>
                                </a>
                                <p>
                                    Developed a portfolio website using React, HTML, and CSS. Deployed using Vercel.
                                    Showcases academic experience, work experience, personal projects, and skills in user-friendly and interactive design.
                                </p>
                                <a href="https://github.com/cmgvc/chloegav" target="_blank" rel="noreferrer">
                                    <GitHub />
                                </a>
                            </div>
                            <div className="project-card">
                            <a href="" target="_blank" rel="noreferrer">
                                    <h3>Full-Stack Real-Time Data Portal</h3>
                                    <h4>Fall 2024</h4>
                                </a>
                                <p>
                                Built a full-stack platform displaying real-time EMG sensor data for exoskeleton testing and tremor monitoring. Frontend built using React.js and TypeScript, backend using Flask.
                                Optimized data relay, ensuring a scalable and user-centric interface for healthcare professionals and patients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : null}
            </div>
        </div>
    );
}

export default Home;
