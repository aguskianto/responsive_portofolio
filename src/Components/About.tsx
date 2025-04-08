'use client';

import { RefObject } from 'react';

import Heading from './Sub/Heading';

type Props = {
  aboutRef: RefObject<HTMLDivElement | null>;
};

const About: React.FC<Props> = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className='min-h-screen min-w-screen grid place-items-center'
    >
      <div className='flex flex-col items-center justify-center gap-y-3 font-light sm:p-20 p-10'>
        <Heading text={'About Me'} />
        <div className='sm:mt-0 mt-10 sm:w-full xl:p-10 sm:p-20 p-0 flex flex-col sm:flex-row'>
          <div className='sm:flex-1 flex items-center justify-center'>
            <img
              src='./work.png'
              alt='about image'
              width={300}
              height={300}
              className='sm:w-[200px] w-[180px] h-auto'
            />
          </div>
          <div className='md:flex-3 md:p-1 sm:flex-2 sm:p-3 p-0 flex flex-col items-center justify-center'>
            <p className='sm:mt-0 mt-10 first-letter:pl-3 font-light text-gray-700 xl:text-[18px] text-[14px] text-justify'>
              A Full Stack developer (backend, frontend) with extensive
              knowledge on functional, technical requirement and project
              management.
            </p>
            <p className='md:mt-5 sm:mt-0 md:block hidden font-light text-gray-700 first-letter:pl-3 xl:text-[18px] text-[14px] text-justify'>
              I code with{' '}
              <span className='emphasize'>
                React, Angular, .NET core / JAVA and python programming language
                with data scientist / machine learning certification from MIT
              </span>
              . On design and UI/UX tools, I use{' '}
              <span className='emphasize'>photoshop, figma, framer motion</span>{' '}
              to create stunning and user friendly website.
            </p>
            <a
              href='./cv_tech_lead.pdf'
              download=''
              className='w-max items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors sm:block hidden'
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
