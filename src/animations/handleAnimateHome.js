import { gsap } from 'gsap';

const mm = gsap.matchMedia();

export const handleAnimateLastName = (lastNameElement) => {
    return new Promise((resolve) => {
        gsap.fromTo(
            lastNameElement,
            { x: '45vw',
                opacity: 0,
                y: '100vh',
            },
            {
                opacity: 1,
                y: '40vh', 
                duration: 1,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(lastNameElement, {
                        x: '48vw',
                        duration: 0.5,
                        ease: 'power4.out',
                        onComplete: resolve,
                    });
                },
            }
        );
    });
};

export const handleAnimateFirstName = (firstNameElement) => {
    return new Promise((resolve) => {
        gsap.fromTo(
            firstNameElement,
            { x: '41vw', 
                opacity: 0, 
                y: '0vh' },
            {
                opacity: 1,
                y: '40vh',
                duration: 1,
                ease: 'power4.out',
                onComplete: resolve,
            }
        );
    });
};

export const handleFinalAnimation = (firstNameElement, lastNameElement) => {
    return new Promise((resolve) => {
        gsap.timeline({ onComplete: resolve })
            .to(lastNameElement, {
                y: '14vh',
                x: '62vw',
                duration: 1,
                scale: 5,
                ease: 'power2.out',
            })
            .to(firstNameElement, {
                y: '14vh',
                x: '20vw',
                duration: 1,
                scale: 5,
                ease: 'power2.out',
            }, "<");
    });
};
