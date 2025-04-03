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
                                Web Development
                            </span>

                            {/* icons */}
                            <div className='title-icon title-icon-1'>
                                <FaCode />
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
