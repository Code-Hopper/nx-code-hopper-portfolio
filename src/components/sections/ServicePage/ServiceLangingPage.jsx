import React from 'react'
import { FaCode, FaPenNib } from 'react-icons/fa'
import LandingPageForm from './LandingPageForm'

// design service landingpage here

const ServiceLangingPage = ({ data }) => {

    let service_landing_page_cards_data = [
        {
            title_name: "PORTFOLIO WEBSITE",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "01"
        },
        {
            title_name: "E-COMMERCE WEBSITE",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "02"
        },
        {
            title_name: "BLOGING WEBSITE",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "03"
        },
        {
            title_name: "CUSTOM APPLICATION",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "04"
        },
        {
            title_name: "LANDING PAGES",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "05"
        },
        {
            title_name: "CMS WEBSITE",
            description: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
            number: "06"
        }
    ]

    let service_landing_page_cards_display = (item, index) => {
        return (
            <div
                key={index}
                className="service-card shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3"
            >
                <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#000000"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="card-icon text-5xl h-12 w-12 stroke-gray-800"
                >
                    <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                    <line y2="21" x2="16" y1="21" x1="8"></line>
                    <line y2="21" x2="12" y1="17" x1="12"></line>
                </svg>

                <p className="card-title font-bold text-2xl">
                    {item.title_name}
                </p>
                <p className="text-gray-400 text-sm">
                    {item.description}
                </p>
                <p
                    style={{
                        "-webkit-text-stroke": '1px gray',
                        "-webkit-text-fill-color": 'transparent'
                    }}
                    className="text-5xl font-bold self-end"
                >
                    {item.number}
                </p>
            </div>
        )
    }

    return (
        <>
            <div className='service-landing-page'>
                {/* get service page from from database or array */}
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
                                <button className="button">
                                    <p className="button__text">
                                        <span style={{ "--index": 0 }}>C</span>
                                        <span style={{ "--index": 1 }}>h</span>
                                        <span style={{ "--index": 2 }}>e</span>
                                        <span style={{ "--index": 3 }}>c</span>
                                        <span style={{ "--index": 4 }}>k</span>
                                        <span style={{ "--index": 5 }}> </span>
                                        <span style={{ "--index": 6 }}>T</span>
                                        <span style={{ "--index": 7 }}>h</span>
                                        <span style={{ "--index": 8 }}>i</span>
                                        <span style={{ "--index": 9 }}>s</span>
                                        <span style={{ "--index": 10 }}> </span>
                                        <span style={{ "--index": 11 }}>O</span>
                                        <span style={{ "--index": 12 }}>u</span>
                                        <span style={{ "--index": 13 }}>t</span>
                                    </p>

                                    <div className="button__circle">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
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

                {/* service page cards */}

                <div className='service-landing-page-reading'>

                    <h1 className='py-5 text-center font-bold border-b-2'>I Can Help You With !</h1>

                    <div className="content-container !py-10">

                        <div className='service-landing-page-cards'>
                                {
                                    service_landing_page_cards_data.map(service_landing_page_cards_display)
                                }
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceLangingPage

