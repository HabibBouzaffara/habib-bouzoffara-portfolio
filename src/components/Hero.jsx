import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import avatar from "../assets/avatar.png";

const Hero = () => {
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
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Habib</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Graduated as a Computer Science Student.{" "}
              <br className='sm:block hidden' />
              Passionated about Web & Mobile Development.
            </p>
          </div>
        </div>
        {(isMobile || !supportsWebGL) && (
          <img
            src={avatar}
            alt='Avatar'
            className='absolute bottom-0 opacity-40 w-[500px] h-[500px] object-contain mx-auto z-0'
          />
        )}
        {!isMobile && supportsWebGL && <ComputersCanvas />}

        {!isMobile && (
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
