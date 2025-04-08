'use client';

// 1. import icons
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import { RiLinkedinBoxFill, RiVercelFill } from 'react-icons/ri';

// 2. import framer for animation
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, RefObject } from 'react';

type Props = {
  heroRef: RefObject<HTMLDivElement | null>;
};

const Hero: React.FC<Props> = ({ heroRef }) => {
  // 3. hover animation
  const [buttonHover, setButtonHover] = useState(false);

  // 4. character animation initialization
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  const [mouseMove, setMouseMove] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [30, -30]);

  return (
    <div
      ref={heroRef}
      className='relative min-h-screen min-w-screen grid place-items-center'
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div className='grid grid-row w-full items-center justify-center'>
        <div className='sm:flex sm:flex-row flex-col lg:gap-x-20 gap-x-0'>
          <div className='sm:flex-col items-center justify-between gap-y-3 font-light'>
            <motion.div
              className='flex items-center justify-center'
              style={{
                rotateX: mouseMove ? rotateX : 0,
                rotateY: mouseMove ? rotateY : 0,
                transition: '0.1s',
              }}
            >
              <img
                src='./profile.png'
                alt='profile pictures'
                width={140}
                height={140}
                className='h-auto w-[140px]'
              />
              <motion.span
                className='absolute -mt-30 -mr-30 text-xl font-semibold text-blue-600'
                initial={{ scale: 0 }}
                animate={{
                  opacity: buttonHover ? 0 : 1,
                  scale: buttonHover ? 1.5 : 0,
                  y: buttonHover ? -40 : 0,
                }}
                transition={{ opacity: { delay: 0.4 } }}
              >
                ~Hi
              </motion.span>
            </motion.div>
            <div className='mt-4 flex flex-row justify-center gap-x-10 text-3xl text-black-400'>
              <a
                href='https://github.com/aguskianto'
                className='hover:bg-blue-600 hover:text-white transitions-color w-[24px] h-[24px]'
              >
                <GithubFillIcon />
              </a>
              <a
                href='https://www.linkedin.com/in/aguskianto/'
                className='hover:bg-blue-600 hover:text-white transitions-color w-[24px] h-[24px]'
              >
                <RiLinkedinBoxFill className='w-[23px] h-[23px]' />
              </a>
              <a
                href='https://tailwindcss-shoes-self.vercel.app/'
                className='hover:bg-blue-600 hover:text-white transitions-color w-[24px] h-[24px]'
              >
                <RiVercelFill className='w-[23px] h-[23px]' />
              </a>
            </div>
            <h1 className='mt-5 text-center text-lg font-light tracking-wide text-gray-500'>
              Hello,{' '}
              <span className='font-semibold text-blue-600 text-xl'>
                Agus Kianto
              </span>{' '}
              in here!
            </h1>
          </div>
          <div className='sm:flex-col items-center justify-between'>
            <div className='flex-col items-center justify-between gap-y-5 font-light'>
              <p className='mt-18 text-md tracking-wider text-gray-700'>
                A 17 yoe Full Stack developer,
              </p>
              <p className='sm:mt-5 text-md tracking-wider text-gray-700'>
                A 8 yoe as tech lead,
              </p>
              <p className='sm:mt-5 text-md tracking-wider text-gray-700'>
                7 years in banking / finance industry
              </p>
              <a
                href='#'
                className='mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors'
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                Talk to me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
