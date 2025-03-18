"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaCode } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header id='header'>
            <nav className='flex justify-between items-center bg-stone-950 text-white px-[var(--sidePadding)] py-3'>
                <div className='navbar-logo flex gap-1 items-center'>
                    <div className='navbar-logo-icon bg-[var(--primaryColor)] p-2 rounded-full'>
                        <FaCode size={"20px"} className='text-[var(--secondaryColor)]' />
                    </div>
                    <div className='navbar-logo-text text-2xl'>
                        <span className='font-semibold'>Code</span>
                        <span className='font-extrabold text-[var(--primaryColor)]'>Hopper</span>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden focus:outline-none'
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`
                    navbar-menu md:flex md:flex-row md:items-center
                    ${isOpen ? 'flex flex-col' : 'hidden'}
                `}>
                    <ul className='menu-container flex gap-3'>
                        <li className='menu-container-item'><a href="">Home</a></li>
                        <li className='menu-container-item'><a href="">Services</a></li>
                        <li className='menu-container-item'><a href="">About Me</a></li>
                        <li className='menu-container-item'><a href="">Projects</a></li>
                        <li className='menu-container-item'><a href="">Blogs</a></li>
                    </ul>
                </div>

                <div className='navbar-cta'>
                    <button className='bg-[var(--primaryColor)] text-gray-900 font-semibold px-3 py-1 rounded-2xl'>Let's get Started</button>
                </div>
            </nav>
        </header>
    );
}