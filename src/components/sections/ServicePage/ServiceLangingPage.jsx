import React from 'react'
import { FaCode, FaPenNib } from 'react-icons/fa'
import LandingPageForm from './LandingPageForm'

// design service landingpage here

const ServiceLangingPage = ({ data }) => {

    return (
        <>
            <div className='service-landing-page'>
                {/* <h1>{data.serviceName}</h1> */}

                <div className='service-page-hero content-container !py-[6rem]'>
                    <div className='service-landing-page-hero-extra'>
                        <div>

                            <span className='text-2xl'>Continue Reading This Page</span>

                            <ul className='page-content'>
                                <li>
                                    <a href="">Learn Web Development</a>
                                </li>
                                <li>
                                    <a href="">Solution For</a>
                                </li>
                                <li>
                                    <a href="">Development Walkthrough</a>
                                </li>
                                <li>
                                    <a href="">Take away for you !</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='service-landing-page-hero-title'>

                        <div className='content'>

                            {/* <div className='side-box side-box-1'></div>
                            <div className='side-box side-box-2'></div> */}

                            <span className='title'>
                                <span>Web Development</span>
                            </span>

                            {/* icons */}
                            <div className='title-icon title-icon-1'>
                                {/* <FaCode /> */}

                                {/* <!-- From Uiverse.io by Creatlydev --> */}
                                <button className="button">
                                    <p className="button__text">
                                        <span style={{"--index": 0}}>C</span>
                                        <span style={{"--index": 1}}>h</span>
                                        <span style={{"--index": 2}}>e</span>
                                        <span style={{"--index": 3}}>c</span>
                                        <span style={{"--index": 4}}>k</span>
                                        <span style={{"--index": 5}}> </span>
                                        <span style={{"--index": 6}}>T</span>
                                        <span style={{"--index": 7}}>h</span>
                                        <span style={{"--index": 8}}>i</span>
                                        <span style={{"--index": 9}}>s</span>
                                        <span style={{"--index": 10}}> </span>
                                        <span style={{"--index": 11}}>O</span>
                                        <span style={{"--index": 12}}>u</span>
                                        <span style={{"--index": 13}}>t</span>
                                    </p>

                                    <div className="button__circle">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon"
                                            width="14"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            width="14"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon button__icon--copy"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>


                            </div>
                            <div className='title-icon title-icon-2'>
                                <FaPenNib />
                            </div>
                        </div>
                    </div>

                    <div className='service-landing-page-hero-form p-4'>
                        <LandingPageForm />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceLangingPage
