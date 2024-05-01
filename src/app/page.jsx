import dynamic from 'next/dynamic';
import Hero from './components/Hero';

const About = dynamic(() => import('./components/About'));
const Experience = dynamic(() => import('./components/Experience'));
const Projects = dynamic(() => import('./components/Projects'));


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
