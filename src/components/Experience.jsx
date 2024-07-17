import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { github } from "../assets";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, responsabilities, certifications } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = React.memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        {experience.source_code_link && (
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(experience.source_code_link, "_blank")}
              className='w-14 h-14 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        )}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider text-justify '
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const CertificationsCircle = React.memo(({ certification, isNotMobile }) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      iconStyle={{
        background: "#1d1836",
        cursor: "pointer",
        width: isNotMobile && "100px",
        height: isNotMobile && "100px",
        marginLeft: isNotMobile ? "-50px" : "0px",
        transform: !isNotMobile && "translateY(110%)",
      }}
      iconOnClick={() => window.open(certification.link, "_blank")}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certification.image}
            alt={certification.title}
            className='w-[75%] h-[75%] object-contain pt-1'
          />
        </div>
      }
    />
  );
});

const Experience = () => {
  const [isNotMobile, setIsNotMobile] = useState(false);
  const [visibleExperiences, setVisibleExperiences] = useState([]);
  const [visibleResponsabilities, setVisibleResponsabilities] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1170px)");
    setIsNotMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsNotMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const loadMoreItems = () => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setVisibleExperiences(experiences.slice(0, endIndex));
      setVisibleResponsabilities(responsabilities.slice(0, endIndex));
    };

    loadMoreItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {visibleExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div className='mt-20'>
        <p className={`${styles.sectionSubText} text-center`}>
          Beyond the Classroom
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Community Engagement
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {visibleResponsabilities.map((experience, index) => (
            <ExperienceCard
              key={`responsibility-${index}`}
              experience={experience}
            />
          ))}
          <CertificationsCircle
            certification={certifications}
            isNotMobile={isNotMobile}
          />
        </VerticalTimeline>
        <p
          className={`${styles.sectionSubText} text-center ${
            isNotMobile ? "-mb-10 mt-10 " : "transform -translate-y-8"
          }`}
        >
          <a
            href='https://drive.google.com/drive/folders/1m4sPhahY62dgXc08_FkQ47nk8XlYbNMW'
            target='_blank'
            rel='noopener noreferrer'
          >
            See all certifications
          </a>
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
