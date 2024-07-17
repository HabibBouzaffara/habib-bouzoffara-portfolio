import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [displayTechnologies, setDisplayTechnologies] = useState([]);

  useEffect(() => {
    // Load technologies incrementally to avoid initial lag
    let timer;
    const loadTechnologies = (index = 0) => {
      if (index < technologies.length) {
        setDisplayTechnologies((prev) => [...prev, technologies[index]]);
        timer = setTimeout(() => loadTechnologies(index + 1), 100); // Adjust delay as needed
      }
    };
    loadTechnologies();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {displayTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} techName={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
