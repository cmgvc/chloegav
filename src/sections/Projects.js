import React from 'react';
import GitHub from '@mui/icons-material/GitHub';
import '../styles/Projects.css';

function Projects() {
    const projects = [
        {
            title: "We Are Fit AI-Powered Application",
            date: "October 2024",
            description: "WeAreFit is an AI-powered web-based fitness app, driven by Gemini Google AI, designed to engage users in personalized daily fitness challenges tailored to their desired difficulty levels. The app's daily fitness challenges are generated by the AI to ensure they are relevant and engaging for each user. Users can track their progress and participate in challenges, either solo or with friends, while enjoying gamified features like leaderboards to motivate goal achievement. Built with React.js for the frontend and Node.js with Express and MongoDB for the backend, WeAreFit leverages Vercel and Render for deployment, ensuring a seamless, scalable, and intelligent user experience.",
            liveLink: "https://we-are-fit.vercel.app/",
            githubLink: "https://github.com/cmgvc/WeAreFit"
        },
        {
            title: "Personal Portfolio",
            date: "November 2024",
            description: "Developed a portfolio website using React, HTML, and CSS. Deployed using Vercel. Showcases academic experience, work experience, personal projects, and skills in user-friendly and interactive design.",
            liveLink: "https://chloegav.vercel.app/",
            githubLink: "https://github.com/cmgvc/chloegav"
        },
        {
            title: "Full-Stack Real-Time Data Portal",
            date: "Fall 2024",
            description: "Built a full-stack platform displaying real-time EMG sensor data for exoskeleton testing and tremor monitoring. Frontend built using React.js and TypeScript, backend using Flask. Optimized data relay, ensuring a scalable and user-centric interface for healthcare professionals and patients.",
            liveLink: "",
            githubLink: ""
        }
    ];

    return (
        <div id="projects" className="projects">
            <h1>/projects</h1>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noreferrer">
                                <h3>{project.title}</h3>
                                <h4>{project.date}</h4>
                            </a>
                        )}
                        {!project.liveLink && (
                            <div>
                                <h3>{project.title}</h3>
                                <h4>{project.date}</h4>
                            </div>
                        )}
                        <p>{project.description}</p>
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                <GitHub />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;