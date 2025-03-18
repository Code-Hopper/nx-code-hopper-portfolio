import React from 'react'

import { FaCode } from "react-icons/fa"

const Header = () => {
    return (
        <>
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
                    <div className='navbar-menu'>
                        <ul className='menu-container'>
                            <li className='menu-container-item'>
                                <a href="">Home </a>
                            </li>
                            <li className='menu-container-item'>
                                <a href="">Services</a>
                            </li>
                            <li className='menu-container-item'>
                                <a href="">About Me</a>
                            </li>
                            <li className='menu-container-item'>
                                <a href="">Projects</a>
                            </li>
                            <li className='menu-container-item'>
                                <a href="">Blogs</a>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-cta'>
                        <button className='bg-[var(--primaryColor)] text-gray-900 font-semibold px-3 py-1 rounded-2xl'> Let's get Started
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header