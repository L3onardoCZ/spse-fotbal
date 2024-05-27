"use client"

import React, { useState, useEffect } from 'react';

interface RandomImageProps {
    src: string;
    style: React.CSSProperties;
}

const getRandomImageSrc = (): string => {
    const images = [
        "/soccer_ball.svg",
        "/soccer_field.svg",
        "/soccer_shoe.svg",
        "/soccer_shirt.svg",
        "/soccer_stopwatch.svg",
        "/soccer_trophy.svg",
        "/soccer_whistle.svg"
    ];
    return images[Math.floor(Math.random() * images.length)];
};

const getRandomStyle = (isMobile: boolean): React.CSSProperties => {
    const randomValue = (min: number, max: number) => Math.random() * (max - min) + min;
    const randomRotate = () => `rotate(${randomValue(0, 360)}deg)`;
    const randomOpacity = () => randomValue(0.1, 0.15);

    return {
        position: 'absolute',
        width: isMobile ? '4rem' : '6rem',
        top: `${randomValue(50, 190)}%`,
        left: `${randomValue(0, 70)}%`,
        transform: randomRotate(),
        opacity: randomOpacity(),
    };
};

const generateRandomImages = (count: number, isMobile: boolean): RandomImageProps[] => {
    const images: RandomImageProps[] = [];
    for (let i = 0; i < count; i++) {
        images.push({
            src: getRandomImageSrc(),
            style: getRandomStyle(isMobile),
        });
    }
    return images;
};

const Background: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [images, setImages] = useState<RandomImageProps[]>(generateRandomImages(isMobile ? 4 : 8, isMobile));
    
    
    useEffect(() => {
        if (typeof window !== "undefined") {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setImages(generateRandomImages(mobile ? 4 : 8, mobile));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    return (
        <>
            {images.map((image, index) => (
                <img key={index} className="absolute" src={image.src} style={image.style} alt="" />
            ))}
        </>
    );
};

export default Background;
