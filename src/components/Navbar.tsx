
import React, { useState, useEffect } from 'react';
import "./css/header.css";
import "./css/anton.css";
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function Navbar(){
    return(
        <>
            <nav className="w-full flex fixed flex-row justify-between h-auto items-center p-2 md:p-4">
                <a href="https://spseplzen.cz"><img className="w-12 md:w-14" src="/spse_logo.webp" alt="" /></a>
                <div className="flex gap-4">
                <Link href="/" className="hidden md:inline"><Button>Domů</Button></Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="md:hidden">
                        
                    <Button variant="outline"><IoMenu className="text-xl" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">

                    <DropdownMenuGroup className="flex justify-center flex-col items-center">
                        <DropdownMenuItem>
                        <Link href="/">Domů</Link>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                        <Link href="/pravidla">Pravidla</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <Link href="/live">Aktuálně</Link>
                        </DropdownMenuItem>


                    </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/pravidla" className="hidden md:inline"><Button variant="secondary">Pravidla</Button></Link>
                <Link href="/live" className="hidden md:inline"><Button variant="secondary">Aktuálně</Button></Link>

                </div>
                <a href="https://goleto.cz"><img className="w-12 md:w-14" src="/goleto_logo.svg" alt="" /></a>
            </nav>
        </>
    )
}