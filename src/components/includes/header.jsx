import React from 'react'

const Header = () => {
    return (
        <>
            <header id='header'>
                <nav className='flex bg-stone-950 text-white px-5 py-3'>
                    <span>Code-hopper</span>
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