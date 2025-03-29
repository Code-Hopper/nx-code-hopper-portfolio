import React from 'react'

import { FiMail, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from './ContactForm';

const GetInTouch = () => {
    return (
        <>
            <div className='main-contact'>
                <div className="contact-section content-container !pt-20">

                    <div className="">
                        <div id='title-card-element' className='!border-[var(--secondaryColor)] text-[var(--secondaryColor)]'>
                            <div className='card-box card-box-1'></div>
                            <div className='card-box card-box-2'></div>
                            <div className='card-box card-box-3'></div>
                            <div className='card-box card-box-4'></div>
                            <span className='title-text'>Quick Connect</span>
                        </div>

                    </div>

                    <div className="">
                        <div className="flex flex-col md:flex-row gap-3 py-4">

                            <div className='flex-1 flex flex-col'>

                                <div className='contact-details flex flex-col gap-1'>
                                    <div className='py-3 px-1 flex gap-3 items-center justify-start'>
                                        <FiMail size={"35px"} />
                                        <span>ameykhondekar01@gmail.com</span>
                                    </div>
                                    <div className='py-3 px-1 flex gap-3 items-center justify-start'>
                                        <FiPhone size={"35px"} />
                                        <span>+91 9766696550</span>
                                    </div>
                                    <div className='py-3 px-1 flex gap-3 items-center justify-start'>
                                        <IoLocationOutline size={"35px"} />
                                        <span>WebSync Solution | Manewada road, Nagpur</span>
                                    </div>
                                </div>

                                <div className='text-[rgba(0,0,0,.5)] p-3 bg-[var(--thirdColor)] grow'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam blanditiis sunt dolore odio, rerum voluptates nesciunt non asperiores ab nobis distinctio unde consequatur neque adipisci hic, autem et. Odit
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto illum neque tempora quo rem ipsa. Cum repudiandae aliquid exercitationem.
                                </div>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch
