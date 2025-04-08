'use client';

import Sidebar from '../Components/Sidebar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Clients from '../Components/Clients';

import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);

  return (
    <div className='relative'>
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Experience expRef={expRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projRef={projRef} />
      <Clients clientRef={clientRef} />
      <Sidebar
        heroRef={heroRef}
        aboutRef={aboutRef}
        expRef={expRef}
        skillsRef={skillsRef}
        projRef={projRef}
        clientRef={clientRef}
      />
    </div>
  );
};

export default Home;
