import React from 'react'

const NumberCounter = () => {
  return (
    <>
      <div className='hero-numbers-counter flex flex-col md:flex-row gap-4 w-full'>
        <div className='number-tile text-center flex-1'>
          {/* Experience */}
          <span className='number text-3xl font-bold'>
            5+
          </span>
          <span className='number-title text-lg font-medium'>Years of Experience</span>
          <span className='number-data text-gray-500'>Delivering quality solutions</span>
        </div>

        <div className='number-tile text-center flex-1'>
          {/* Services */}
          <span className='number text-3xl font-bold'>
            20+
          </span>
          <span className='number-title text-lg font-medium'>Services Offered</span>
          <span className='number-data text-gray-500'>Web, Mobile, Marketing & More</span>
        </div>
      </div>
    </>
  )
}

export default NumberCounter
