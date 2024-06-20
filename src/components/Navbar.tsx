
import React, { useState, useEffect } from 'react';
import "./css/header.css";
import "./css/anton.css";
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa"
import { FiBook } from "react-icons/fi"
import { IoIosGitBranch } from "react-icons/io"
import { PiCourtBasketballDuotone } from "react-icons/pi"

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
                <Link href="/" className="hidden md:inline"><Button><FaHome className="mr-2"/>Domů</Button></Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="md:hidden">
                        
                    <Button variant="outline"><IoMenu className="text-xl" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">

                    <DropdownMenuGroup className="flex justify-center flex-col items-center">
                        <DropdownMenuItem>
                        <FaHome className="mr-2 text-xs"/><Link href="/">Domů</Link>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                        <FiBook className="mr-2 text-xs"/><Link href="/pravidla">Pravidla</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <IoIosGitBranch className="mr-2 text-xs"/><Link href="/live">Rozpis zápasů</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <PiCourtBasketballDuotone className="mr-2 text-xs"/><Link href="/rozpisHrist">Rozpis hřišť</Link>
                        </DropdownMenuItem>


                    </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/pravidla" className="hidden md:inline"><Button variant="secondary"><FiBook className="mr-2"/>Pravidla</Button></Link>
                <Link href="/live" className="hidden md:inline"><Button variant="secondary"><IoIosGitBranch className="mr-2"/>Rozpis zápasů</Button></Link>
                <Link href="/rozpisHrist" className="hidden md:inline"><Button variant="secondary"><PiCourtBasketballDuotone className="mr-2"/>Rozpis hřišť</Button></Link>

                </div>
                <a href="https://goleto.cz"><img className="w-12 md:w-14" src="/goleto_logo.svg" alt="" /></a>
            </nav>
        </>
    )
}