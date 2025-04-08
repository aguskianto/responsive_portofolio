'use client';

import { RefObject } from 'react';
import Heading from './Sub/Heading';

// icons & data
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { ExperienceData } from '../Data/ExperienceData';

// animation
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  expRef: RefObject<HTMLDivElement | null>;
};

const Experience: React.FC<Props> = ({ expRef }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div ref={expRef} className='relative min-h-screen grid place-items-center'>
      <Heading text={'Experience & Education'} />

      <img
        src='./src/assets/education.png'
        alt='education'
        width={200}
        height={200}
        className='absolute top-30 right-10 opacity-70 lg:block hidden'
      />

      <div
        ref={containerRef}
        className='relative w-full h-full flex flex-col items-center justify-center gap-y-10 py-10'
      >
        {ExperienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`lg:w-[40%] sm:w-[70%] w-[85%] px-12 sm:px-0 relative`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
              className='relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm'
            >
              <h1 className='sm:text-lg font-semibold text-gray-700'>
                {data.role}
              </h1>
              <p className='text-gray-800'>
                <span className='block font-light'>Company</span>
                <span className='block pl-2 font-extralight'>
                  {data.company}
                </span>
              </p>
              <div className='text-gray-800'>
                <span className='font-light'>Location</span>
                <span className='block pl-2 font-extralight'>
                  {data.location}
                </span>
              </div>
              <div className='text-gray-800'>
                <span className='font-light'>Year</span>
                <span className='block pl-2 font-extralight'>{data.range}</span>
              </div>
              <span
                className={`absolute top-[50%] text-red-300 -translate-y-1/2 left-full`}
              >
                <FaRegArrowAltCircleLeft />
              </span>

              <div
                className={`w-13 absolute top-[50%] border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light z-10 bg-white left-full -translate-y-1/2 ml-[16px]`}
              >
                {data.year}
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleY: 0 }}
              style={{ scaleY: scrollY }}
              className={`absolute w-1 sm:-right-[44px] right-[6px] top-[50%] rounded-full bg-gray-300 origin-top ${
                i !== ExperienceData.length - 1
                  ? 'block h-full translate-y-6'
                  : 'hidden'
              }`}
            ></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
