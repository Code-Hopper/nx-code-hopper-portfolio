import React from 'react'
import Image from 'next/image';

import { FaCode } from 'react-icons/fa6'
import { FaTerminal } from "react-icons/fa";

import image1 from "../../../media/heros-block-grid-1.jpg"

const HerosImage = () => {
    return (
        <>
            <div className='heros-main-img'>
                <div
                    className='heros-main-img-child child1 flex flex-col items-center justify-center gap-6'
                >
                    <span className='text-center'>Website, Mobile App & Digital Marketing Solutions</span>
                    <span className='font-bold text-[var(--primaryColor)] text-4xl md:text-6xl'>That Gets Business</span>
                    <div className='flex font-bold flex-wrap gap-2 items-center justify-center'>
                        Let's Jumpstart Your <span className='text-[var(--primaryColor)]'> Next Big Idea !</span>
                    </div>
                </div>
                <div className='heros-main-img-child child2'>
                    <div
                        className='child2-image-container'
                    >
                        <div className='w-full h-full img-container'>
                            <Image className='img-fluid' src={image1} alt="" />
                        </div>
                        <div className='w-full h-full text-container p-3 flex items-end'>
                            <span className='fw-bolder text-2xl'>Concepts to Design with Custom Theme</span>
                        </div>
                    </div>
                    <div
                        className='child2-animation-container'
                    >
                        <div className='content-animation'>
                            content animation
                        </div>
                    </div>
                </div>
                <div
                    className='heros-main-img-child child3 flex flex-col items-center justify-center gap-3'
                >
                    <div className="text-light flex items-center gap-2">
                        <div className="bg-[var(--primaryColor)] rounded-full relative" style={{ width: "40px", height: "40px" }}>
                            <FaCode className='text-stone-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' size={24} />
                        </div>
                        <span className='text-3xl'>
                            Code-<span className='fw-bolder'>Hopper</span>
                        </span>
                    </div>
                    <div>
                        <span>Web & Mobile Developer </span>
                    </div>
                    <div>
                        <div className='flex justify-center items-center gap-2'>
                            <div className="bg-[var(--primaryColor)] rounded relative" style={{ width: "40px", height: "40px" }}>
                                <FaTerminal className='text-stone-900 absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' size={24} />
                            </div>
                            <span>
                                Quick Connect
                            </span>
                        </div>
                        <div className='mt-2 px-4 text-center'>
                            <span>
                                <a className='fw-bold text-light' href="https://www.github.com/code-hopper">@Github/code-hopper</a>
                                |
                                <a className='font-bold' href="https://www.github.com/code-hopper">ameykhondekar01@gmail.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HerosImage
