import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import '../styles/Home.css';
import { handleAnimateLastName, handleAnimateFirstName, handleFinalAnimation } from '../animations/handleAnimateHome';
import Navbar from '../components/Navbar';

function Home() {
    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        if (lastNameRef.current) {
            handleAnimateLastName(lastNameRef.current).then(() => {
                handleAnimateFirstName(firstNameRef.current).then(() => {
                    handleFinalAnimation(firstNameRef.current, lastNameRef.current).then(() => {
                        setIsNavbarVisible(true);
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
                {isNavbarVisible && <Navbar />} 
            </div>
        </div>
    );
}

export default Home;
