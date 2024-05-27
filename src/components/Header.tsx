"use client";

import React, { useState, useEffect } from 'react';
import "./css/header.css";
import "./css/anton.css";

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('June 21, 2024 08:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    let timeLeft: TimeLeft = {};
    
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    
    return timeLeft;
};

const Header: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <>
            <img className="absolute w-10 m-4 md:w-28 md:m-10 right-0" src="/spse_logo.webp" alt="SPSE Logo" />
            <img className="absolute w-16 m-4 md:w-48 md:m-10 left-0" src="/goleto_logo.svg" alt="Goleto Logo" />
            <header className="w-full flex flex-col justify-center items-center h-52 md:h-[550px]">
                <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center anton">
                    {days !== undefined && hours !== undefined && minutes !== undefined && seconds !== undefined
                        ? (
                            <>
                                <span className="text-slate-600">Za </span>
                                <span className="text-5xl text-slate-900 md:text-8xl">{days} DNÍ <br /></span><span className="text-slate-600">a </span>
                                <span className="text-4xl text-slate-800 md:text-6xl">{hours} HODIN.</span>
                                

                            </>
                        )
                        : "Hrajeme!"}
                </h1>
            </header>
        </>
    );
}

export default Header;
