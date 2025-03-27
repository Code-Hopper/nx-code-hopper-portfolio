"use client";

import React, { useRef, useState } from 'react'

import { FaArrowDown, FaArrowUp, FaCode, FaMobile, FaPenNib, FaSearch } from 'react-icons/fa'
import { FaArrowUpRightDots, FaChalkboardUser, FaSquarePhoneFlip } from 'react-icons/fa6'

const ServiceSection = () => {

    const [scrollY, setScrollY] = useState(0);


    let serviceContainer = useRef()


    let serviceItem = [

        {
            titleText: "Web Development",
            icon1: <FaCode />,
            icon2: <FaPenNib />,
            discriptionTitle: "Get a Awesome Website for Products/Services !",
            discriptionExtra: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum."
        },
        {
            titleText: "SMM, SEO & Ads",
            icon1: <FaArrowUpRightDots />,
            icon2: <FaSearch />,
            discriptionTitle: "we can do ads and social media marketing",
            discriptionExtra: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum."
        },
        {
            titleText: "App Development",
            icon1: <FaMobile />,
            icon2: <FaSquarePhoneFlip />,
            discriptionTitle: "Get a Awesome App for Products/Services !",
            discriptionExtra: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum."
        },
        {
            titleText: "Learn To Code",
            icon1: <FaCode />,
            icon2: <FaChalkboardUser />,
            discriptionTitle: "Learn MERN Stack Development !",
            discriptionExtra: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ea. Recusandae velit pariatur delectus dolorum."
        }
    ]

    let serviceItemBlock = (item, index) => {
        return (
            <div key={index} className='service-block-item'>
                <div className='title'>

                    <div className='data'>
                        <span className='text'>
                            {item.titleText}
                        </span>

                        {/* icons */}
                        <div className='title-icon title-icon-1'>
                            {item.icon1}
                        </div>
                        <div className='title-icon title-icon-2'>
                            {item.icon2}
                        </div>
                    </div>
                </div>

                <div className='discription p-2 flex flex-col items-center md:items-start gap-2'>
                    <h1 className='text-2xl text-center'>
                        {item.discriptionTitle}
                    </h1>
                    <p className='opacity-50 hidden md:inline-block'>
                        {item.discriptionExtra}
                    </p>
                    <button className='service-item-cta'>
                        Learn More
                    </button>
                </div>
            </div>
        )
    }

    const itemHeight = 450; // Each item height
    const gap = 160; // Gap between items
    const totalItems = serviceItem.length;
    const scrollStep = itemHeight + gap;

    // Adjust max scroll to exclude the last gap
    const maxScroll = -(scrollStep * (totalItems - 1));

    const scrollDown = () => {
        if (scrollY > maxScroll) {
            let newScrollY = Math.max(scrollY - scrollStep, maxScroll);
            setScrollY(newScrollY);
            serviceContainer.current.style.transform = `translateY(${newScrollY}px)`;
        }
    };

    const scrollUp = () => {
        if (scrollY < 0) {
            let newScrollY = Math.min(scrollY + scrollStep, 0);
            setScrollY(newScrollY);
            serviceContainer.current.style.transform = `translateY(${newScrollY}px)`;
        }
    };

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

                    <div className='service-block-container' ref={serviceContainer}>
                        {serviceItem.map(serviceItemBlock)}
                    </div>

                    <button className='control-button up-button' onClick={scrollUp}>
                        <FaArrowUp />
                    </button>

                    <button className='control-button down-button' onClick={scrollDown}>
                        <FaArrowDown />
                    </button>

                </div>
            </div>
        </>
    )
}

export default ServiceSection
