import React from 'react'

import { FaCode } from "react-icons/fa"

const Header = () => {
    return (
        <>
            <header id='header'>
                <nav className='flex bg-stone-950 text-white px-5 py-3'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-yellow-300 inline-block p-3 rounded-full'>
                            <FaCode size={"25px"} className='text-gray-900' />
                        </div>
                        <span className='text-2xl'>
                            Code <span className='font-extrabold'>Hopper</span>
                        </span>
                    </div>
                    <ul className='ms-auto flex gap-3'>
                        <li>Home</li>
                        <li>About</li>
                        <li id='hello'>
                            <span>service</span>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header