import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import SkillIconsBar from './components/SkillsIconBar';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary mt-[-2px] py-4'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary mt-[-2px]'>
            <Experience />
          </div>
          <div id="languages" className='relative z-30 bg-primary mt-[-2px]'>
            <SkillIconsBar />
          </div>
          <div id="contact" className='relative z-30 bg-primary mt-[-2px]'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;