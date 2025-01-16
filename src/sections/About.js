import React, {useState} from 'react';

function About() {
    const technologiesCol1 = [
        'Python', 'Java', 'JavaScript', 'React.js', 
        'Node.js', 'Three.js', 'Next.js', 'C', 
    ];

    const technologiesCol2 = [
        'HTML/CSS', 'OCaml','SQL', 'NoSQL (MongoDB)', 'AWS (Lambda, EventBridge, DynamoDB, S3, IAM)', 
        'Git', 'Express', 'Flask'
    ];
    const technologiesCol3 = [
        'Docker', 'Kubernetes', 'Postman', 'CI/CD', 'Agile', 'TensorFlow', 'PyTorch','Figma'
    ];

    const hobbies = [
        { id: 1, icon: "🏊‍♀️", name: "Swimming", details: "Competitive synchronized swimmer for 12 years." },
        { id: 1, icon: "🥊", name: "Boxing", details: "Competitive synchronized swimmer for 12 years." },
        { id: 2, icon: "📖", name: "Reading", details: "Exploring everything from tech to fiction novels." },
        { id: 3, icon: "🎧", name: "DJ", details: "Finding new genres and playlists." },
        { id: 4, icon: "🚗", name: "Car Mechanics", details: "Learning about engines and DIY repairs." },
    ];

    return (
        <div id="about" className="about-me">
            <h1>/about</h1>
            <p>
                My name is Chloe and I'm a student at McGill University pursuing a Bachelor of Science with an expected graduation in 2025.
                I'm completing both a major in Software Engineering as well as in Anatomy and Cell Biology.
                I'm from Ottawa, Ontario and am currently living in Montreal, Quebec. 
                <br /><br />
                Here are some technologies I have worked with:
            </p>   
            <div className="skills">
                <ul className="hover-list">
                    {technologiesCol1.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <ul className="hover-list">
                    {technologiesCol2.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <ul className="hover-list">
                    {technologiesCol3.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <p> 
                Some of my hobbies outside of tech include swimming, reading, finding new music, and learning about car mechanics. 
            </p>
            <p> 
                This year, I've also taken up boxing, which has been a great way to stay active and relieve stress. Additionally, I’ve been diving into DJing, discovering new genres, and curating playlists.
            </p>
            <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                    <div
                        key={hobby.id}
                        className="hobby-card"
                    >
                        <div className="hobby-icon">{hobby.icon}</div>
                        <div className="hobby-name">{hobby.name}</div>
                    </div>
                ))}
            </div>
            <div className="fun-fact-box">
                <p className="initial-text"><strong>Fun fact</strong></p>
                <p className="fun-fact-text">I was a high performance synchronized swimmer for 12 years and represented Canada at the Junior Pan American Games in 2019!</p>
            </div>
        </div>
    );
}

export default About;