import React, { useEffect, useRef } from 'react';
import { gsap, Back } from 'gsap';
import { ScrollTrigger as ScrollTriggerPlugin } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTriggerPlugin);
}

type ScrollTriggerProps = {
    component?: React.ElementType;
    className?: string;
    duration?: number;
    delay?: number;
    attributes?: Record<string, unknown>;
};

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
    children,
    component: Component = 'div',
    className,
    duration = 1,
    delay = 0.25,
    attributes = {},
}) => {
    const animateRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(
            animateRef.current,
            { opacity: 0, x: -20 },
            {
                duration,
                delay,
                opacity: 1,
                ease: Back.easeInOut.config(3),
                x: 0,
                ...attributes,
                scrollTrigger: {
                    trigger: animateRef.current,
                },
            }
        );
    }, []);

    return (
        <Component ref={animateRef} className={className}>
            {children}
        </Component>
    );
};

export default ScrollTrigger;
