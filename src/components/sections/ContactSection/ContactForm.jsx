import React from 'react'

import { FaRedo, FaPaperPlane } from "react-icons/fa"

const ContactForm = () => {
    return (
        <>
            <div className='flex-1 contact-form bg-[var(--thirdColor)] p-4 rounded-2'>
                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className='flex grow'>
                                <label className='p-2 bg-[var(--primaryColor)] rounded-s' htmlFor="">Name</label>
                                <input className='bg-white grow rounded-e' type="text" name="" id="" />
                            </div>
                            <div className='flex grow-1'>
                                <label className='p-2 bg-[var(--primaryColor)] rounded-s' htmlFor="">Phone</label>
                                <input className='bg-white grow rounded-e' type="number" name="" id="" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex grow-1'>
                                <label className='p-2 bg-[var(--primaryColor)] rounded-s' htmlFor="">Email</label>
                                <input className='rounded-e bg-white grow' type="text" name="" id="" />
                            </div>
                            <div className='flex'>

                                <label className='p-2 bg-[var(--primaryColor)] rounded-s' htmlFor="">Service</label>

                                <select className='grow bg-white rounded-e'>
                                    <option value="">Web Development</option>
                                    <option value="">Digital Marketing</option>
                                    <option value="">Mobile App Development</option>
                                    <option value="">Teaching</option>
                                </select>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex flex-col'>
                                <label className='p-2 bg-[var(--primaryColor)] rounded-t' htmlFor="">Message</label>
                                <textarea className='bg-white rounded-b' name="" id="" rows={6}></textarea>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <button className='flex items-center gap-2 p-3 bg-[var(--primaryColor)] font-bold' type='reset'>Reset <FaRedo /> </button>

                            <button className='flex items-center gap-2 p-3 bg-emerald-500 font-bold text-white' type='submit'>Submit <FaPaperPlane /> </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm


