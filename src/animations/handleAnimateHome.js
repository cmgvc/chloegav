import { gsap } from 'gsap';

export const handleAnimateLastName = (lastNameElement) => {
    return new Promise((resolve) => {
        gsap.fromTo(
            lastNameElement,
            { x: -100, opacity: 0, y: 1000 }, 
            {
                opacity: 1,
                y: 350,
                duration: 1,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(lastNameElement, {
                        x: -40, 
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
            { x: -140, opacity: 0, y: 0 }, 
            {
                opacity: 1,
                x: -140,
                y: 350,
                duration: 1,
                ease: 'power4.out',
                onComplete: resolve
            }
        );
    });
};

export const handleFinalAnimation = (firstNameElement, lastNameElement) => {
    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: resolve
        })
        .to(lastNameElement, {
            y: 100,
            x: 165,
            duration: 1,
            scale: 5,
            ease: 'power2.out',
            // onComplete: () => {
            //     anime({
            //         targets: lastNameElement,
            //         skewX: -20,
            //         duration: 200, 
            //         easing: 'easeInOutSine',
            //     });
            // }
        })
        .to(firstNameElement, {
            y: 100,
            x: -410,
            duration: 1,
            scale: 5,
            ease: 'power2.out',
            // onComplete: () => {
            //     anime({
            //         targets: firstNameElement,
            //         skewX: -20,
            //         duration: 200,
            //         easing: 'easeInOutSine',
            //     });
            // }
        }, "<")
    });
};
