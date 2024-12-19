import React, { useState, useEffect } from 'react';
import GitHub from '@mui/icons-material/GitHub';
import '../styles/Projects.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Projects() {
    const projects = [
        {
            title: "We Are Fit AI-Powered Application",
            date: "October 2024",
            description: "Developed a web-based fitness application that motivates users to stay active with daily challenges, dynamically generated using Gemini Google AI across three difficulty levels: beginner, intermediate, and advanced. Implemented secure user authentication for personalized experiences, including progress tracking, social sharing, and gamified leaderboards to boost engagement. Built using React.js for the frontend, Node.js with Express for the backend, and MongoDB for data management. Ensured seamless functionality and deployment with Vercel and Render.",
            techStack: [
                "React.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Gemini AI API",
                "Vercel",
                "Render",
                "HTML/CSS"
            ],
            liveLink: "https://we-are-fit.vercel.app/",
            githubLink: "https://github.com/cmgvc/WeAreFit"
        },
        {
            title: "'BiteWise' AI-Powered Computer Vision App",
            date: "November 2024",
            description: "Developed a web-based application to reduce food waste by tracking kitchen inventory and suggesting recipes based on expiration dates and user preferences. Trained a machine learning model using TensorFlow for image and webcam object recognition to identify grocery items, automating inventory updates. Utilized AWS S3 for secure storage of user-uploaded images and data. Implemented user authentication for personalized recipe recommendations and dietary management. Built with React.js and CSS for a responsive frontend, Node.js with Express for the backend, and MongoDB for real-time inventory tracking. Deployed using Vercel and AWS services for scalability and reliability.",
            techStack: [
                "React.js",
                "Node.js",
                "TensorFlow",
                "AWS S3",
                "HTML/CSS",
                "Vercel",
                "Render"
            ],
            liveLink: "https://bite-wise.vercel.app/",
            githubLink: "https://github.com/cmgvc/Bitewise"
        },
        {
            "title": "Amazon Internal Service for Redriving Accounting Workflows",
            "date": "Summer 2024",
            "description": "Developed a full-stack platform to automate the execution of an accounting service that redrives workflows triggered by financially significant events, improving operational efficiency. Built with a React frontend and Java backend, the platform leverages AWS Lambda functions to pull data from AWS S3 and run redrive operations based on incremental efficiency improvements. The system uses AWS EventBridge for event-driven architecture and DynamoDB for scalable data storage. IAM roles were implemented for secure authentication and resource access. The platform, deployed on AWS, was used by over 100 Amazon developers and internal employees to automate critical accounting processes, freeing the team to focus on more strategic tasks.",
            "techStack": [
                "React.js",
                "Java",
                "AWS Lambda",
                "AWS EventBridge",
                "AWS DynamoDB",
                "IAM Roles",
                "CI/CD Pipelines",
                "Git",
                "Agile",
            ],
            "liveLink": "",
            "githubLink": ""
        },        
        {
            title: "Full-Stack Real-Time Data Portal",
            date: "Fall 2024",
            description: "As part of the McGill Biomechanics Club, I built a full-stack platform to display real-time EMG (electromyography) data streams, specifically for tremor monitoring in patients with neurological conditions like Parkinson's disease. The platform enabled healthcare professionals and researchers to monitor and analyze muscle activity associated with tremors, providing insights into the frequency, intensity, and progression of tremors over time. It featured real-time data visualization with detailed charts and metrics to track tremor patterns and assess treatment effectiveness. The backend, developed using Flask, ensured seamless, low-latency data transmission from EMG devices to the platform. The frontend, built with React.js, offered an intuitive interface for users to adjust data display settings, view historical trends, and analyze muscle response patterns. This platform supports ongoing research and monitoring, contributing to more effective tremor management and treatment evaluation.",
            techStack: [
                "React.js",
                "TypeScript",
                "Flask",
                "HTML/CSS",
                "Git",
            ],
            liveLink: "",
            githubLink: ""
        },
        {
            "title": '"Flock" Scheduling Website for McGill School of Computer Science',
            "date": "December 2024",
            "description": "Flock is a responsive meeting management platform designed to streamline scheduling between faculty and students at the McGill School of Computer Science. Built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), the platform enables faculty to set their available slots, while students can easily book and manage meetings. The user-friendly interface includes features such as authentication, customizable meeting times, and personalized views, allowing users to log in to their accounts to access and manage their schedules effectively. In the development of Flock, I was responsible for implementing the logic to display availability, book meetings, and manage the dashboard, which shows upcoming, requested, past meetings, and current availabilities. Additionally, I handled the acceptance or denial of meeting requests. I also worked on various frontend aspects, including the design and functionality of the navbar, footer, and other pages, contributing to an intuitive and seamless user experience. I played a key role in designing the database structure to ensure efficient data management and scalability. Storyboards and wireframes were created during the initial phases to visualize user flows and guide the design process, ensuring alignment within the team and efficient execution of features from concept to deployment.",
            "techStack": [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT Authentication",
                "HTML/CSS",
                "Git",
            ],
            "liveLink": "http://fall2024-comp307-group04.cs.mcgill.ca:3000/",
            "githubLink": "https://github.com/cmgvc/SOCS"
        },        
        {
            title: "Personal Portfolio",
            date: "November 2024",
            description: "Developed a portfolio website using React to showcase projects, skills, and professional experiences with a sleek and responsive design.",
            techStack: [
                "React.js",
                "HTML",
                "CSS",
                "Vercel"
            ],
            liveLink: "https://chloegav.vercel.app/",
            githubLink: "https://github.com/cmgvc/chloegav"
        }
        
    ];

    const [isCarousel, setIsCarousel] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsCarousel(window.innerWidth > 1000);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleNext = () => {
        if (startIndex + 3 < projects.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleExpandProject = (index) => {
        setExpandedProjectIndex(index);
    };

    const handleCollapseProject = () => {
        setExpandedProjectIndex(null);
    };

    const renderProjects = () => {
        if (expandedProjectIndex !== null) {
            const project = projects[expandedProjectIndex];
            return (
                <div className="expanded-project">
                    <button className="back-btn" onClick={handleCollapseProject}>
                        Back
                    </button>
                    <div className="project-card expanded">
                        <h3>{project.title}</h3>
                        <h4>{project.date}</h4>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            <h5>Tech Stack:</h5>
                            <ul>
                                {project.techStack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noreferrer">
                                Visit Live
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                <GitHub />
                            </a>
                        )}
                    </div>
                </div>
            );
        }

        return (
            <div className="projects-carousel">
                <button
                    className="nav-arrow left-arrow"
                    onClick={handlePrevious}
                    disabled={startIndex === 0}
                >
                    <ArrowBackIosIcon />
                </button>
                <div className="project-cards-container">
                    {projects.slice(startIndex, startIndex + 3).map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <h4>{project.date}</h4>
                            <p>{expandedProjectIndex === startIndex + index 
                                ? project.description 
                                : `${project.description.substring(0, 100)}...`}
                            </p>
                            <div className="tech-stack">
                                <h5>Tech Stack:</h5>
                                <ul>
                                    {project.techStack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className="show-more-btn"
                                onClick={() => handleExpandProject(startIndex + index)}
                            >
                                Show More
                            </button>
                            <div className="project-links">
                                {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer">
                                    Visit Live
                                </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <GitHub />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="nav-arrow right-arrow"
                    onClick={handleNext}
                    disabled={startIndex + 3 >= projects.length}
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        );
    };

    return (
        <div id="projects" className="projects">
            <h1>/projects</h1>
            {renderProjects()}
        </div>
    );
}

export default Projects;
