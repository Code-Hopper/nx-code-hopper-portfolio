import React from 'react'

import { FaAppStore, FaCode, FaLongArrowAltRight, FaMobile, FaPenNib, FaPhoneVolume, FaSearch } from 'react-icons/fa'
import { FaArrowUpRightDots, FaSquarePhoneFlip } from 'react-icons/fa6'

const ServiceSection = () => {
    return (
        <>
            <div className='content-container service-section'>
                <div className='service-section-titile !py-10'>

                    <div id='title-card-element'>
                        <div className='card-box card-box-1'></div>
                        <div className='card-box card-box-2'></div>
                        <div className='card-box card-box-3'></div>
                        <div className='card-box card-box-4'></div>
                        <span className='title-text'>Service Offered</span>
                    </div>

                </div>
                <div className='service-blocks'>
                    {/* web development */}
                    <div className='service-block-item'>
                        <div className='title'>

                            <div className='data'>
                                <span className='text'>Web Development</span>

                                {/* icons */}
                                <div className='title-icon title-icon-1'>
                                    <FaCode />
                                </div>
                                <div className='title-icon title-icon-2'>
                                    <FaPenNib />
                                </div>
                            </div>
                        </div>
                        <div className='discription p-2 flex flex-col items-center md:items-start gap-2'>
                            <h1 className='text-2xl'>Get a Awesome Website for Products/Services !</h1>
                            <p className='opacity-50'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum.
                            </p>
                            <button className='bg-[var(--primaryColor)] p-2'>Learn More</button>
                        </div>
                    </div>
                    {/* digital marketing */}
                    <div className='service-block-item'>
                        <div className='discription p-2 flex flex-col items-center md:items-start gap-2'>
                            <h1 className='text-2xl'>Digital Marketing and paid ads</h1>
                            <p className='opacity-50'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum.
                            </p>
                            <button className='bg-[var(--primaryColor)] p-2'>Learn More</button>
                        </div>
                        <div className='title'>
                            <div className='data'>
                                <span className='text'>SMM, SEO & Ads</span>
                                {/* icons */}
                                <div className='title-icon title-icon-1'>
                                    <FaArrowUpRightDots />
                                </div>
                                <div className='title-icon title-icon-2'>
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile app development */}

                    <div className='service-block-item'>
                        <div className='title'>

                            <div className='data'>
                                <span className='text'>App Development</span>
                                {/* icons */}
                                <div className='title-icon title-icon-1'>
                                    <FaMobile />
                                </div>
                                <div className='title-icon title-icon-2'>
                                    <FaSquarePhoneFlip />
                                </div>
                            </div>
                        </div>
                        <div className='discription p-2 flex flex-col items-center md:items-start gap-2'>
                            <h1 className='text-2xl'>Get a Awesome App for Products/Services !</h1>
                            <p className='opacity-50'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum.
                            </p>
                            <button className='bg-[var(--primaryColor)] p-2'>Learn More</button>
                        </div>
                    </div>
                    {/* learn to code with me */}
                    <div className='service-block-item'>
                        <div className='discription p-2 flex flex-col items-center md:items-start gap-2'>
                            <h1 className='text-2xl'>Become a MERN Stack Developer</h1>
                            <p className='opacity-50'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum.
                            </p>
                            <button className='bg-[var(--primaryColor)] p-2'>Learn More</button>
                        </div>
                         <div className='title'>

                            <div className='data'>
                                <span className='text'>Learn To Code</span>
                                {/* icons */}
                                <div className='title-icon title-icon-1'>
                                    <FaArrowUpRightDots />
                                </div>
                                <div className='title-icon title-icon-2'>
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection
