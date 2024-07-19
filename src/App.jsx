import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  // Function to detect WebGL support
  const detectWebGL = () => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    // Function to check if the screen width is less than or equal to 768px (tablet and phone)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial checks
    handleResize();
    setSupportsWebGL(detectWebGL());

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero isMobile={isMobile} supportsWebGL={supportsWebGL} />
        </div>
        <About />
        <Experience />
        <Tech isMobile={isMobile} />
        <Projects />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas isMobile={isMobile} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
