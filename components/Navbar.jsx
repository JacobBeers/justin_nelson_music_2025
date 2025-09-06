'use client';
import React from 'react'
import Logo from '../public/img/JustinLogo.svg'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className=" w-full h-24 shadow-xl bg-[#7b7d78] z-99999 text-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/'>
                <Image
                src={Logo}
                alt="Logo"
                width="75"
                height="auto"
                className="cursor-pointer"
                priority
                />
                </Link>
                <div className="hidden sm:flex">
                    <ul className= "hidden sm:flex">
                        
                    <Link href="/">
                            <li className="ml-10  hover:text-[#f5daf2] text-xl">Home</li>
                        </Link><Link href="/lessons">
                            <li className="ml-10  hover:text-[#f5daf2] text-xl">Lessons</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10  hover:text-[#f5daf2] text-xl">Contact</li>
                        </Link>
                        <Link href="https://www.thebash.com/jazz-piano/justin-nelson-music" target='_blank'>
                            <li className="ml-10  hover:text-[#f5daf2] text-xl">Events</li>
                        </Link>
                        <Link href="/gallery">
                            <li className="mx-10  hover:text-[#f5daf2] text-xl">Gallery</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black p-8 ease-in duration-500"
                : "fixed left-[-100%] top-0 h-screen p-8 ease-in duration-500"
            }>
                <div className= "flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />

                    </div>
                    </div>
                    <div className="flex-col py-4">
                        <ul>
                            <Link href="/">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className= "py-4 cursor-pointer hover:border-b"
                                    >
                                        Home
                                </li>
                            </Link>
                            <Link href="/lessons">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className= "py-4 cursor-pointer hover:border-b"
                                    >
                                        Lessons
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className= "py-4 cursor-pointer hover:border-b"
                                    >
                                        Contact
                                </li>
                            </Link>
                            <Link href="https://www.thebash.com/jazz-piano/justin-nelson-music" target='_blank'>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className= "py-4 cursor-pointer hover:border-b"
                                    >
                                        Events
                                </li>
                            </Link>
                            <Link href="/gallery">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className= "py-4 cursor-pointer hover:border-b"
                                    >
                                        Gallery
                                </li>
                            </Link>
                            

                        </ul>

                    </div>
                    <div className="flex flex-row justify-around pt-10 items-center">
                    <Link href="https://www.instagram.com/justinnelsonmusic/" target='_blank'><FaInstagram className="text-2xl cursor-pointer text-yellow-600 hover:text-yellow-700" /></Link>
							<Link href="https://www.facebook.com/justinnelsonmusic1" target='_blank'><FaFacebook className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700" /></Link>
							<Link href="https://www.linkedin.com/in/justin-nelson-73652664/" target='_blank'><FaLinkedin className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700" /></Link>
							<Link href="https://www.youtube.com/@justinnelsonmusic6848" target='_blank'><FaYoutube className="text-2xl cursor-pointer text-red-600 hover:text-red-700" /></Link>
                    </div>
                </div>

            

        </nav>
    )
}

export default Navbar