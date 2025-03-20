"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaCode } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header id='header' className='sticky top-0 z-50'>
            <nav className='flex justify-between items-center bg-stone-950 text-white px-4 md:px-[var(--sidePadding)] py-2'>
                <div className='navbar-logo flex gap-2 items-center'>
                    <div className='navbar-logo-icon bg-[var(--primaryColor)] p-2 rounded-full'>
                        <FaCode size={"20px"} className='text-[var(--secondaryColor)]' />
                    </div>
                    <div className='navbar-logo-text text-2xl'>
                        <span className='font-light'>Code</span>
                        <span className='font-extrabold text-[var(--primaryColor)]'>Hopper</span>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden absolute right-4 focus:outline-none z-50'
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div id='main-menu' className={
                    isOpen ? "navbar-menu navbar-menu-offcanvas show" : "navbar-menu navbar-menu-offcanvas"}>
                    <ul className='menu-container flex gap-6 relative'>
                        <li className='menu-container-item'>
                            <a className='menu-container-item-link' href="">Home</a>
                        </li>
                        <li className='menu-container-item dropdown-menu'>

                            <span className='menu-container-item-link dropdown-menu-trigger flex items-center'>
                                <span>Services</span>
                                <RiArrowDropDownLine />
                            </span>

                            <ul className='dropdown-menu-content absolute left-1/2 -translate-x-1/2 box-content z-10 bg-white text-gray-950 w-full flex gap-2 p-5  shadow-md border'>
                                <div className='corners corner-1'></div>
                                <div className='corners corner-2'></div>
                                <div className='corners corner-3'></div>
                                <div className='corners corner-4'></div>
                                <li>
                                    <a href="">Dropdown Item 1</a>
                                </li>
                                <li>
                                    <a href="">Dropdown Item 2</a>
                                </li>
                                <li>
                                    <a href="">Dropdown Item 3</a>
                                </li>
                                <li>
                                    <a href="">Dropdown Item 4</a>
                                </li>
                            </ul>
                        </li>
                        <li className='menu-container-item'>
                            <a className='menu-container-item-link' href="">About Me</a>
                        </li>
                        <li className='menu-container-item'>
                            <a className='menu-container-item-link' href="">Projects</a>
                        </li>
                        <li className='menu-container-item'>
                            <a className='menu-container-item-link' href="">Blogs</a>
                        </li>
                    </ul>
                </div>

                <div className='navbar-cta hidden md:inline-block'>
                    <button className='bg-[var(--primaryColor)] text-gray-900 font-semibold px-4 py-1 rounded-2xl'>Let's Talk</button>
                </div>
            </nav>
        </header>
    );
}
