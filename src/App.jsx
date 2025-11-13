import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import LogoLoop from './components/LogoLoop';
import { textVariant } from "./utils/motion";

const logoStyle = {
  width: '128px',
  height: '128px',
  borderRadius: '8px',
  objectFit: 'contain',
  backgroundColor: 'transparent'
};

const techLogos = [
  { 
    node: <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
      alt="React" 
      style={logoStyle}
    />, 
    title: "React", 
    href: "https://react.dev" 
  },
  { 
    node: <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
      alt="Next.js" 
      style={logoStyle}
    />, 
    title: "Next.js", 
    href: "https://nextjs.org" 
  },
  { 
    node: <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
      alt="TypeScript" 
      style={logoStyle}
    />, 
    title: "TypeScript", 
    href: "https://www.typescriptlang.org" 
  },
  { 
    node: <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
      alt="Tailwind CSS" 
      style={logoStyle}
    />, 
    title: "Tailwind CSS", 
    href: "https://tailwindcss.com" 
  },
  { 
    node: <img 
      src="https://pbs.twimg.com/profile_images/1886599096636694528/0Y8VYt94_400x400.png" 
      alt="Convex" 
      style={logoStyle}
    />, 
    title: "Convex", 
    href: "https://convex.dev" 
  },
  {
    node: <img 
      src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" 
      alt="Vercel" 
      style={logoStyle}
    />, 
    title: "Vercel", 
    href: "https://vercel.com" 
  },
];

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
          <div id="techstack" style={{ height: '300px', position: 'relative', overflow: 'hidden'}} className='relative z-30 bg-primary'>
            <motion.div variants={textVariant()}>
              <h2 className={`${styles.sectionText} text-center`}>
                Tech Stack
              </h2>
            </motion.div>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={64}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#006A79"
              ariaLabel="Technology partners"
            />
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
