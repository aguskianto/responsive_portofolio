'use client';

import { RefObject, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './Sub/Heading';

// icons, data & animation
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { ProjectsData } from '../Data/ProjectsData';

type Props = {
  projRef: RefObject<HTMLDivElement | null>;
};

const Projects: React.FC<Props> = ({ projRef }) => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState('');

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toTheLeft = function () {
    setDirection('left');

    if (idx - 1 >= 0) {
      setIdx(idx - 1);
    } else {
      setIdx(0);
    }

    // console.log('left');
  };

  const toTheRight = function () {
    setDirection('right');

    if (idx + 1 <= ProjectsData.length - 1) {
      setIdx(idx + 1);
    } else {
      setIdx(ProjectsData.length - 1);
    }

    // console.log('right');
  };

  return (
    <div
      ref={projRef}
      className='relative min-h-screen grid place-items-center'
    >
      <div className='absolute top-10'>
        <Heading text={'Projects'} />
      </div>

      <div className='mt-40 flex flex-row items-center justify-center'>
        <AnimatePresence>
          <motion.div
            key={idx}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate='visible'
            exit='exit'
            variants={slideVariants}
            className='relative inset-0 flex flex-col items-center justify-center gap-y-3 border border-red-300 bg-zinc-50 rounded-xl lg:w-[600px] md:w-[525px] sm:w-[425px] w-[220px] h-[350px] mx-auto p-3 mb-40'
          >
            <img
              src={ProjectsData[idx].img}
              alt={ProjectsData[idx].name}
              width={180}
              height={180}
              className='sm:w-[200px] w-[180px] aspect-square rounded-lg border border-gray-400 p-2 object-contain hover:border-red-500 hover:p-3 transition-all absolute top-6'
            />
            <h1 className='mt-50 text-xl text-center tracking-wider text-blue-600 font-semibold'>
              {ProjectsData[idx].name}
            </h1>
            <p className='text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2'>
              {ProjectsData[idx].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='absolute top-135 flex gap-x-4 text-4xl text-gray-400 mb-20'>
        <button onClick={toTheLeft} className='hover:text-red-400'>
          <FaRegArrowAltCircleLeft />
        </button>
        <button onClick={toTheRight} className='hover:text-red-400'>
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Projects;
