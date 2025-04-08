'use client';

import { RefObject } from 'react';
import Heading from './Sub/Heading';

// data & animation
import { CompaniesData } from '../Data/CompaniesData';
import { motion } from 'framer-motion';

type Props = {
  clientRef: RefObject<HTMLDivElement | null>;
};

const Clients: React.FC<Props> = ({ clientRef }) => {
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
    <div ref={clientRef} className='min-h-screen grid place-items-center'>
      <Heading text={'Clients Handled'} />

      <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 pt-5 p-20'>
        {CompaniesData.map((data, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial='hidden'
            whileInView='visible'
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            key={i}
            className='flex flex-col items-center justify-center gap-x-3 rounded-xl border border-gray-200 hover:border-red-300 bg-zinc-50 px-5 py-2 h-[90px] sm:w-[180px] w-[220px]'
          >
            <img
              src={data.src}
              alt={data.name}
              width={100}
              height={100}
              className='h-auto sm:w-[160px] w-[200px]'
            />
            <p className='flex mt-3 text-[12px] text-gray-600 text-center'>
              {data.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
