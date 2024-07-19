import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div className='mb-20'>
        <h2 className={`${styles.sectionHeadText} opacity-60 text-center`}>
          Familiar Technologies
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}>
            {isMobile ? (
              <div className='flex flex-col items-center justify-center w-full h-full bg-tertiary bg-opacity-70 rounded-3xl shadow-md'>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-2/3 h-2/3 object-contain '
                />
                <p className='text-white text-center opacity-70'>
                  {technology.name}
                </p>
              </div>
            ) : (
              <>
                <BallCanvas icon={technology.icon} />
                <p className='text-white text-center opacity-70 text-[14px]'>
                  {technology.name}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
