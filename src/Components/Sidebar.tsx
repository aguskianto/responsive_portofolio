'use client';

// 1. add & detect scroll state
import { useState, RefObject, useEffect } from 'react';

import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { PiBagSimpleFill } from 'react-icons/pi';
import { GiSkills } from 'react-icons/gi';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import { MdReviews } from 'react-icons/md';

type Props = {
  heroRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  expRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projRef: RefObject<HTMLDivElement | null>;
  clientRef: RefObject<HTMLDivElement | null>;
};

const Sidebar: React.FC<Props> = ({
  heroRef,
  aboutRef,
  expRef,
  skillsRef,
  projRef,
  clientRef,
}) => {
  // console.log(aboutRef.current?.offsetTop);

  // 2. initialize state
  const [activeButton, setActiveButton] = useState('home');
  const [scrollYPosition, setScrollYPosition] = useState(0);

  // 3. add scroll function
  const window_height = window.innerHeight;

  // const slideTo = function (idx: number) {
  // const curr_y_position = scrollYPosition;

  // const dest = idx * window_height;
  // const page = dest / window_height;

  // console.log(dest, page);

  // if (page >= 0 && page < 0.7) {
  //   setActiveButton('home');

  //   heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  // } else if (page >= 0.7 && page < 1.7) {
  //   setActiveButton('about');

  //   aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  // } else if (page >= 1.7 && page < 2.7) {
  //   setActiveButton('experience');
  //   expRef.current?.scrollIntoView({ behavior: 'smooth' });
  // } else if (page >= 2.7 && page < 3.7) {
  //   setActiveButton('skills');
  //   skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  // } else if (page >= 3.7 && page < 4.7) {
  //   setActiveButton('projects');
  //   projRef.current?.scrollIntoView({ behavior: 'smooth' });
  // } else if (page >= 4.7) {
  //   setActiveButton('reviews');
  //   reviewRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }

  // { top: dest, behavior: 'smooth' }
  // window.scrollTo({ top: dest, behavior: 'smooth' });
  // const element: HTMLElement | null = document.getElementById(activeButton);

  // console.log(element);

  // element?.scrollIntoView({
  //   behavior: 'smooth',
  // });

  // window.scrollTo({ top: element?.offsetTop, behavior: 'smooth' });

  // window.scrollBy({
  //   top: dest - curr_y_position,
  //   behavior: 'smooth',
  // });

  // setScrollYPosition(dest);

  // e.stopPropagation();
  // e.stopImmediatePropagation();
  // };

  // 4. detecting current Y position
  const updatePosition = () => setScrollYPosition(window.scrollY);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', updatePosition);

    // const page = scrollYPosition / window_height;

    if (scrollYPosition < aboutRef.current.offsetTop) {
      setActiveButton('home');
    } else if (
      scrollYPosition >= aboutRef.current.offsetTop &&
      scrollYPosition < expRef.current.offsetTop - 100
    ) {
      setActiveButton('about');
    } else if (
      scrollYPosition >= aboutRef.current.offsetTop - 100 &&
      scrollYPosition < skillsRef.current.offsetTop - 100
    ) {
      setActiveButton('experience');
    } else if (
      scrollYPosition >= skillsRef.current.offsetTop - 100 &&
      scrollYPosition < projRef.current.offsetTop - 100
    ) {
      setActiveButton('skills');
    } else if (
      scrollYPosition >= projRef.current.offsetTop - 100 &&
      scrollYPosition < clientRef.current.offsetTop - 100
    ) {
      setActiveButton('projects');
    } else if (scrollYPosition >= clientRef.current.offsetTop - 100) {
      setActiveButton('clients');
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [scrollYPosition, window_height]);

  return (
    <div className='fixed top-0 left-0 min-h-screen flex items-center justify-center z-100'>
      <div className='absolute flex flex-col items-center justify-center gap-x-3 gap-y-5 left-1 lg:top-30 sm:top-5 top-30'>
        <div
          key={0}
          onClick={() => {
            setActiveButton('home');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            heroRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'home'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <FaHome />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'home'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            Home
          </p>
        </div>
        <div
          key={1}
          onClick={() => {
            setActiveButton('about');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'about'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <FaInfo />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'about'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            About
          </p>
        </div>
        <div
          key={2}
          onClick={() => {
            setActiveButton('experience');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            expRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'experience'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <PiBagSimpleFill />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'experience'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            Experience
          </p>
        </div>
        <div
          key={3}
          onClick={() => {
            setActiveButton('skills');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'skills'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <GiSkills />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'skills'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            Skills
          </p>
        </div>
        <div
          key={4}
          onClick={() => {
            setActiveButton('projects');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            projRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'projects'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <PiProjectorScreenChartFill />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'projects'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            Projects
          </p>
        </div>
        <div
          key={5}
          onClick={() => {
            setActiveButton('clients');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            clientRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='group flex flex-col items-center justify-center w-[75px]'
        >
          <a
            href='#'
            className={`flex rounded-full font-bold text-white transition-all items-center justify-center ${
              activeButton == 'clients'
                ? 'w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] bg-red-400 group-hover:bg-red-500'
                : 'w-[30px] h-[30px] group-hover:w-[40px] group-hover:h-[40px] bg-gray-400 group-hover:bg-gray-500'
            }`}
          >
            <MdReviews />
          </a>
          <p
            className={`mt-1 font-normal px-2 py-1 ${
              activeButton == 'clients'
                ? 'block text-red-400 group-hover:text-red-500'
                : 'hidden group-hover:block font-normal text-gray-400'
            }`}
          >
            Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
