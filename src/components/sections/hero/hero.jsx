import React from 'react';
import Image from 'next/image.js';
import { Typing } from './typing.jsx';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

import me from "../../../media/me.png"
import HerosImage from './heroImage.jsx';


const Heros = () => {
  return (
    <div className='hero-container flex flex-col md:flex-row gap-8 px-4 py-20 md:px-[var(--sideContenntPadding)]'>
      <div className='hero-text-content flex gap-4 flex-col items-center md:items-start flex-1'>
        <div id='title-card-element'>
          <div className='card-box card-box-1'></div>
          <div className='card-box card-box-2'></div>
          <div className='card-box card-box-3'></div>
          <div className='card-box card-box-4'></div>
          <span className='title-text'>I can help you with!</span>
        </div>

        {/* Typewriter Animation */}
        <Typing />

        <div className='my-title'>
          <div className='glass'></div>
          <div className='content'>
            <div className='profile-photo'>
              <Image style={{ borderRadius: "100%", objectFit: "cover" }} src={me} width={40} height={40} alt='code-hopper-profile' />
            </div>
            <div className='profile-content flex flex-col gap-1'>
              <div className='title flex gap-1 flex-col'>
                <span className='font-semibold'>
                  Full Stack Web Developer & Digital Marketer
                </span>
                <div>
                  <span>Amey Khondekar | </span>
                  <span className='inline-flex gap-2 items-center'>
                    <FaGithub /> <FaEnvelope />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero cta */}

        <button className='hero-cta'>
          Let's work
        </button>

      </div>
      <div className='heros-img flex-1'>
        <div className='heros-media-img-container w-full h-full z-3'>
          <HerosImage />
        </div>
      </div>
    </div>
  );
};

export default Heros;
