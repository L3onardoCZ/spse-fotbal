"use client";

import React, { useState, useEffect } from 'react';
import "./css/header.css";
import "./css/anton.css";
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IoMenu } from "react-icons/io5";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('June 21, 2024 08:15:00');
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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
            <header className="w-full flex flex-col justify-center items-center h-[350px] md:h-[550px]">
                <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center anton"
                style={{
                    transform: isInView ? "none" : "translateY(50px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s"
                  }}
                  ref={ref}
                
                >
                    {days !== undefined && hours !== undefined && minutes !== undefined && seconds !== undefined
                        ? (
                            <>
                                <span className="text-slate-600">Za </span>
                                <span className="text-7xl text-slate-900 md:text-9xl">{hours} HODIN <br /></span><span className="text-slate-600">a </span>
                                <span className="text-6xl text-slate-800 md:text-8xl">{minutes} MINUT</span><br /><span className="text-slate-600">a </span>
                                <span className="text-4xl text-slate-800 md:text-6xl">{seconds} SEKUND</span>
                                

                            </>
                        )
                        : <span className="text-7xl text-slate-900 md:text-9xl">TURNA PROBÍHÁ!</span>}
                </h1>
            </header>
        </>
    );
}

export default Header;
