import { gsap } from 'gsap';

const mm = gsap.matchMedia();

export const handleAnimateLastName = (lastNameElement, firstNameElement) => {
    return new Promise((resolve) => {
        gsap.fromTo(
            firstNameElement,
            { 
                opacity: 0, 
                x: '-3vw',
                y: '0vh' },
            {
                opacity: 1,
                y: '43vh',
                duration: 1,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(firstNameElement, {
                        x: '-17vw',
                        duration: 1,
                        ease: 'power4.out',
                        scale: 2,
                        onComplete: () => {
                            gsap.quickTo(firstNameElement, { duration: 1 });
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            lastNameElement,
            { 
                x: '-4vw',
                opacity: 0,
                y: '100vh',
            },
            {
                opacity: 1,
                y: '43vh', 
                duration: 1,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(lastNameElement, {
                        x: '9vw',
                        duration: 1,
                        ease: 'power4.out',
                        scale: 2,
                        onComplete: resolve,
                    });
                },
            }
        );
        
    });
};

export const handleFinalAnimation = (firstNameElement, lastNameElement) => {
    return new Promise((resolve) => {
        gsap.timeline({ onComplete: resolve })
            .to(lastNameElement, {
                duration: 1,
                rotationX: 360, 
                opacity: 0,  
                scale: 5, 
                ease: 'power2.out',
            })
            .to(firstNameElement, {
                duration: 1,
                rotationX: -360,
                opacity: 0,  
                scale: 5,  
                ease: 'power2.out',
            }, "<");
    });
};
