import React from 'react'
import Typewriter from 'typewriter-effect/dist/core';

const Heros = () => {
  return (
    <>
      <div className='hero-container grid px-4 py-8 md:px-[var(--sidePadding)]'>
        <div className='hero-text-content'>

          <div id='title-card-element'>
            <div className='card-box card-box-1'></div>
            <div className='card-box card-box-2'></div>
            <div className='card-box card-box-3'></div>
            <div className='card-box card-box-4'></div>
            <span className='title-text'>I can help you with !</span>
          </div>

          {/* typewritter animation */}

          <div className='type-writter fixed-column-type d-flex flex-column fw-bolder'>
            <h2 className='fw-bold text-warning'>
              <Typewriter
                options={{
                  strings: ['Creating Websites', 'Creating Mobile Apps', 'Promoting Business'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          
        </div>
        <div className='hero-main-image-content'>

        </div>
      </div>
    </>
  )
}

export default Heros
