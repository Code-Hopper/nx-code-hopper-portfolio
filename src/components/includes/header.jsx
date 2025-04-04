import { FaCode } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import Link from "next/link";

export default function Navbar() {
    return (
        <header id='header' className='sticky top-0 z-50'>
            <nav className='flex justify-between items-center bg-stone-950 text-white px-4 md:px-[var(--sidePadding)] py-2 relative'>
                <div className='navbar-logo flex gap-2 items-center'>
                    <div className='navbar-logo-icon bg-[var(--primaryColor)] p-2 rounded-full'>
                        <FaCode size={"20px"} className='text-[var(--secondaryColor)]' />
                    </div>
                    <div className='navbar-logo-text text-2xl'>
                        <span className='font-light'>Code</span>
                        <span className='font-extrabold text-[var(--primaryColor)]'>Hopper</span>
                    </div>
                </div>

                <input id='mobile-menu-trigger' type="checkbox" className="hidden" />

                <label htmlFor="mobile-menu-trigger" className='mobile-menu-trigger-label md:hidden'></label>


                <div id='main-menu' className="navbar-menu navbar-menu-offcanvas">
                    <ul className='menu-container flex gap-6 relative'>
                        <li className='menu-container-item'>
                            <Link className='menu-container-item-link' href="/">Home</Link>
                        </li>
                        <li className='menu-container-item dropdown-menu'>

                            <span className='menu-container-item-link dropdown-menu-trigger flex items-center'>
                                <span>Services</span>
                                <RiArrowDropDownLine />
                            </span>

                            <ul className='dropdown-menu-content absolute left-1/2 -translate-x-1/2 box-content z-10 bg-white text-gray-950 min-w-full flex gap-10 p-5  shadow-md border'>
                                <div className='corners corner-1'></div>
                                <div className='corners corner-2'></div>
                                <div className='corners corner-3'></div>
                                <div className='corners corner-4'></div>
                                <li className='dropdown-item'>
                                    <ul>
                                        <li>
                                            <Link className="" href="/service/Web-Development">Web Development</Link>
                                        </li>
                                        <li>Portfolio Website</li>
                                        <li>eCommerce Website</li>
                                        <li>CMS Website</li>
                                        <li>Blogging Website</li>
                                        <li>Custom Application</li>
                                        <li>Landing Pages</li>
                                    </ul>
                                </li>
                                <li className='dropdown-item'>
                                    <ul>
                                        <li>Digital Marketing</li>
                                        <li>SERP's Ranking</li>
                                        <li>Organic Marketing</li>
                                        <li>Paid Marketing</li>
                                        <li>Google Ads</li>
                                        <li>Social Media Marketing</li>
                                        <li>Local SEO</li>
                                    </ul>
                                </li>
                                <li className='dropdown-item'>
                                    <ul>
                                        <li>App Development</li>
                                        <li>Custom Mobile App</li>
                                        <li>API Calling App</li>
                                        <li>eCommerce Store</li>
                                        <li>iOS & Andriod Apps</li>
                                    </ul>
                                </li>
                                <li className='dropdown-item'>
                                    <ul>
                                        <li>Learn To Code</li>
                                        <button className='p-2 text-[var(--secondaryColor)] font-bold cursor-pointer'>
                                            <div id='title-card-element'>
                                                <div className='card-box card-box-1'></div>
                                                <div className='card-box card-box-2'></div>
                                                <div className='card-box card-box-3'></div>
                                                <div className='card-box card-box-4'></div>
                                                <span className='title-text'>Become a MERN Stack Developer</span>
                                            </div>
                                        </button>
                                    </ul>
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
                    <button className=''>Let's Talk</button>
                </div>

            </nav>
        </header>
    );
}
