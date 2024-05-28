"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RandomImageProps {
    src: string;
    style: React.CSSProperties;
}

const fixedImageStyles = {
    mobile: [
        { top: '40%', left: '10%', transform: 'rotate(45deg)', opacity: 0.12 },
        { top: '55%', left: '50%', transform: 'rotate(90deg)', opacity: 0.14 },
        { top: '60%', left: '20%', transform: 'rotate(135deg)', opacity: 0.13 },
        { top: '80%', left: '70%', transform: 'rotate(180deg)', opacity: 0.11 },
        { top: '50%', left: '80%', transform: 'rotate(225deg)', opacity: 0.12 },
    ],
    pc: [
        { top: '145%', left: '40%', transform: 'rotate(45deg)', opacity: 0.12 },
        { top: '110%', left: '80%', transform: 'rotate(90deg)', opacity: 0.14 },
        { top: '60%', left: '20%', transform: 'rotate(135deg)', opacity: 0.13 },
        { top: '80%', left: '70%', transform: 'rotate(180deg)', opacity: 0.11 },
        { top: '65%', left: '60%', transform: 'rotate(225deg)', opacity: 0.12 },
        { top: '115%', left: '10%', transform: 'rotate(270deg)', opacity: 0.13 },
        { top: '120%', left: '60%', transform: 'rotate(315deg)', opacity: 0.14 },
        { top: '70%', left: '40%', transform: 'rotate(360deg)', opacity: 0.11 },
        { top: '85%', left: '25%', transform: 'rotate(45deg)', opacity: 0.12 },
    ],
};

const getFixedImageProps = (isMobile: boolean): RandomImageProps[] => {
    const styles = isMobile ? fixedImageStyles.mobile : fixedImageStyles.pc;
    const images: RandomImageProps[] = styles.map(style => ({
        src: getRandomImageSrc(),
        style: { ...style, width: isMobile ? '4rem' : '6rem', position: 'absolute' },
    }));
    return images;
};

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

const Background: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [images, setImages] = useState<RandomImageProps[]>([]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setImages(getFixedImageProps(mobile));
        };

        handleResize(); // Ensure initial setting
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1], [0, 0.5], { clamp: false });
    

    return (
        <>
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    className="absolute"
                    src={image.src}
                    style={{ ...image.style, y }}
                    alt=""
                />
            ))}
        </>
    );
};

export default Background;
