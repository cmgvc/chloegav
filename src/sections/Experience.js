import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, IconButton } from '@mui/material'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Experience() {
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setValue((prevValue) => (prevValue + 1) % 5); 
    };

    const handlePrev = () => {
        setValue((prevValue) => (prevValue === 0 ? 4 : prevValue - 1));
    };

    const experiences = [
        {
            title: "Software Development Engineer Intern",
            company: "Amazon",
            date: "Summer 2024",
            description: (
                <p>
                    At Amazon, I developed a <strong>full-stack platform</strong> for the <strong>Ordering Accounting team</strong>--used by over 100 Amazon engineers--that automated the execution of a service to
                    redrive accounting workflows triggered by financially significant events. This included building a <strong>responsive React website</strong> from scratch and integrating other financial services into the backend to seamlessly handle accounting events.
                    I contributed to CI/CD pipelines for efficient deployment and integration testing and to ensure rapid releases.
                    <br /><br />
                    This experience allowed me to enhance both frontend and backend development skills, leveraging <strong>AWS Lambda, S3, DynamoDB, and EventBridge</strong>, and collaborating with cross-functional teams to create operational improvements. Throughout the project, I followed <strong>Agile methodologies</strong>, participating in sprint activities and iterative development, while adhering to best practices for the <strong>full software development life cycle</strong>, including code reviews, source control, testing, and operations.
                </p>
            )
        },
        {
            title: "Undergraduate Course Assistant",
            company: "McGill University",
            date: "August 2022 - December 2023",
            description: (
                <p>
                    At <strong>McGill University</strong>, I served as an <strong>Undergraduate Course Assistant</strong> for an anatomy course, where I facilitated weekly lab sessions for a diverse group of 20 students, fostering an interactive learning environment. I also streamlined grading and feedback processing by developing <strong>Python scripts</strong>, improving both efficiency and accuracy.
                </p>
            )
        },
        {
            title: "Intensive Care Unit Volunteer Attendant",
            company: "Royal Victoria Hospital",
            date: "September 2020 - May 2023",
            description: (
                <p>
                    As an <strong>ICU Volunteer Attendant</strong> at the <strong>Royal Victoria Hospital</strong>, I provided support to over 100 visitors, patients, and healthcare staff in the ICU on a weekly basis. My responsibilities included greeting and escorting visitors around the ICU, ensuring their comfort, and keeping track of more than 30 patients using the <strong>ICU patient log</strong>. This experience honed my communication and organizational skills, allowing me to assist healthcare teams while maintaining a calm and supportive environment for patients and their families.
                </p>
            )
        },
        {
            title: "Software Developer",
            company: "McGill Biomechanics Club",
            date: "September 2024 - Present",
            description: (
                <p>
                    As a <strong>Software Developer</strong> at the <strong>McGill Biomechanics Club</strong>, I developed a <strong>full-stack platform</strong> that serves as a user portal for both patients and doctors. The platform integrates real-time sensor EMG data to display results in a <strong>user-friendly</strong> way and support exoskeleton testing for tremor suppression and monitoring. This system enables patients and healthcare professionals to track muscle activity, analyze trends, and monitor progress in a clear, accessible format.
                    <br /><br />
                    I was involved in the <strong>full software development life cycle</strong>, including design, development, testing, and deployment. This included gathering requirements, creating technical designs, implementing both frontend and backend features, conducting code reviews, and ensuring the platform's scalability. I also worked on optimizing real-time data processing and enhancing user experience, ensuring that both patients and doctors could easily access and interpret critical health data.
                </p>
            )
        },
        {
            title: "Consultant",
            company: "McGill Social Business Network",
            date: "September 2023 - September 2024",
            description: (
                <p>
                    As a <strong>Consultant</strong> at the <strong>McGill Social Business Network</strong>, I provided pro-bono initiatives to develop marketing and financial strategies for a local nonprofit organization. I helped expand more than 2 consignment opportunities and organized annual conferences to boost both awareness and profitability. My role involved collaborating with the client to create sustainable growth strategies while supporting their mission.
                </p>
            )
        }
    ];

    return (
        <div id='experience' className='experience'>
            <h1>/experience</h1>
            <Box className="tab-content-container" sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                {isMobile ? (
                    <div className="arrow-navigation">
                        <div className="arrow-header">
                            <IconButton className="arrow" onClick={handlePrev}>
                                <ArrowBackIosIcon />
                            </IconButton>
                            <IconButton className="arrow" onClick={handleNext}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </div>
                    </div>
                ) : (
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
                )}
                <Box sx={{ padding: 3 }} className='tab-content'>
                    {experiences.map((exp, index) => (
                        value === index && (
                            <div key={index}>
                                <h2>{exp.title}</h2>
                                <h3>{exp.date}</h3>
                                {exp.description}
                            </div>
                        )
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default Experience;