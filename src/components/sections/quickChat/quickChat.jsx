"use client";

import React, { useState } from 'react'
import { FaArrowDown, FaPaperPlane, FaUser } from 'react-icons/fa';

const QuickChat = () => {
    let [openChat, setOpenChat] = useState(false)

    let [chatData, setChatData] = useState({
        name: "",
        phone: "",
        query: ""
    })

    let [isUserInteracting, setIsUserInteracting] = useState(false)
    let [showThankYouMessage, setShowThankYouMessage] = useState(false)

    let handelChange = (e) => {
        let { name, value } = e.target
        setChatData(prev => { return { ...prev, [name]: value } })
    }

    let handelSubmit = (e) => {
        e.preventDefault()
        setIsUserInteracting(true)

        setTimeout(() => {
            setShowThankYouMessage(true)
        }, 1000)
    }

    return (
        <>
            <div id='quick-chat' className={`${openChat ? 'showchat' : "hidechat"}`}>
                <div className='quick-chat-trigger' onClick={() => setOpenChat(!openChat)}>
                    <span className='font-bold'>Quick Connect</span>
                    <div style={{ width: "20px", height: "20px" }} className='quick-chat-notification'>
                        <span>1</span>
                    </div>
                </div>

                <div className="quick-chat-container shadow rounded-2xl">
                    <div className='chat-message-container flex flex-col gap-6'>
                        <div className='flex gap-1'>
                            <div className="shrink">
                                <div className='border p-1 rounded-2xl bg-[var(--thirdColor)]'>
                                    <FaUser className='text-stone-900' />
                                </div>
                            </div>
                            <div className="text-stone-900 bg-[var(--thirdColor)] rounded p-2">
                                <span>Hello There 👋 !</span>
                                <p>
                                    you find me right.
                                    please help me with <FaArrowDown />
                                </p>
                            </div>
                        </div>

                        {
                            isUserInteracting &&
                            <div className='flex gap-1'>
                                <div className="text-stone-900 bg-[var(--thirdColor)] rounded p-2">
                                    <p>
                                        hello 👋! I'm {chatData.name}. looking for {chatData.query} service.
                                    </p>
                                </div>
                                <div className="shrink">
                                    <div className='border p-1 rounded-2xl bg-[var(--thirdColor)]'>
                                        <FaUser className='text-stone-900' />
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            showThankYouMessage &&
                            <div className='flex gap-1'>
                                <div className="shrink">
                                    <div className='border p-1 rounded-2xl bg-white'>
                                        <FaUser className='text-stone-900' />
                                    </div>
                                </div>
                                <div className="text-stone-900 bg-white rounded p-2">
                                    <p>
                                        Thank you 👍 {chatData.name} for the information, I'll be contacting you soon at {chatData.phone}.
                                    </p>
                                </div>
                            </div>
                        }

                    </div>
                    <div className='chat-messsage-form bg-[var(--primaryColor)]'>
                        <form className='h-full' onSubmit={handelSubmit}>
                            <div className='flex flex-col justify-between h-full gap-2'>

                                <div className='flex flex-col gap-2'>

                                    <input onChange={handelChange} className='form-control grow' type="text" placeholder='Your name' name='name' value={chatData.name} required disabled={isUserInteracting} />

                                    <input onChange={handelChange} className='form-control' type="text" placeholder='Phone number' name='phone' value={chatData.phone} required disabled={isUserInteracting} />



                                    <select onChange={handelChange} className='form-control' name="query" value={chatData.query} required disabled={isUserInteracting}>
                                        <option value="other">Please select Service</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                    </select>

                                </div>

                                <button className='bg-stone-900 text-white cursor-pointer flex items-center justify-center gap-5 py-2' disabled={isUserInteracting}>
                                    send <FaPaperPlane />
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickChat
