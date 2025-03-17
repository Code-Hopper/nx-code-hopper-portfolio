import React from 'react'

const page = () => {
  return (  
    <div>
        <h1 className='text-center font-extrabold lg:text-gray-900 text-red-500 p-5 bg-yellow-300 text-2xl hover:text-blue-500 transition duration-900 ease-in'>Hello Tailwind</h1>
        <h2 className='text-center font-extrabold text-red-500 p-5 bg-yellow-300 rounded-2xl'>Hello Tailwind</h2>
        <span className='block w-full p-10 text-center font-extrabold text-2xl bg-red-500 text-[var(--primaryColor)] hover:text-white transition duration-500 ease-in'>duck</span>
    </div>
  )
}

export default page
