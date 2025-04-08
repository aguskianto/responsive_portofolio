'use client';

import { RefObject } from 'react';
import Heading from './Sub/Heading';

// data & animation
import { SkillsData } from '../Data/SkillsData';
import { motion } from 'framer-motion';

type Props = {
  skillsRef: RefObject<HTMLDivElement | null>;
};

const Skills: React.FC<Props> = ({ skillsRef }) => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div ref={skillsRef} className='min-h-screen grid place-items-center'>
      <Heading text={'Skills'} />

      <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 pt-5 xl:p-25 md:p-35 sm:p-25 p-20'>
        {SkillsData.map((data, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial='hidden'
            whileInView='visible'
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            key={i}
            className='flex items-center justify-center gap-x-3 rounded-xl border border-gray-200 hover:border-red-300 bg-zinc-50 px-5 py-2 w-[190px]'
          >
            <img
              src={data.icon}
              alt={data.name}
              width={100}
              height={100}
              className='h-auto w-[40px]'
            />
            <p className='text-sm text-gray-600'>{data.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
