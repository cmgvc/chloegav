import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar';
import Type from '../components/Type.js';

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
        <div>
            <div className="home">
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
                        <div className="typewriter">
                            <Type />
                        </div>
                        <Navbar />
                    </div>)
                    
                
                : null} 
            </div>
        </div>
    );
}

export default Home;
