import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex 
     flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-iris capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md-text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
         md:text-6xl xs:text-4xl md:mb-16"
      >
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Open Source Contributor"
            company="One Community"
            companyLink=""
            time="2024-2024"
            address="California, USA(Remote) "
            work="As a member of the One Community Highest Good Network team Since May 2024, I have actively
             contributed to the development of a team management tool, working on features like 
             user time logs, team location search and filter, weekly log summaries, and enhanced UI/UX.
              He has collaborated on and reviewed over 45 pull requests (PRs), ensuring the smooth
               integration of contributions. 
"
          />
          <Details
            position="I T Assisstant"
            company="Income Tax Department"
            companyLink=""
            time="2021-2023"
            address="Chennai, India"
            work="Led a dynamic team of 4 co-workers  in surpassing our jurisdictions
            target of 28 million USD for TDS revenue share which is 16% over the target. By leveraging analytical tools such as 
             INSIGHTS and ITBA. Strategically executed cross-industry surveys to fuel revenue growth and
             concurrently deployed real-time dashboards for vigilant TDS and Share of Revenue tracking"
          />
          <Details
            position="Software Engineer"
            company="Urban Rebox It"
            companyLink=""
            time="2019-2021"
            address="Hyderabad, India"
            work="As an Associate, I actively participated in software testing, focusing on quality
                 assurance and bug identification. Additionally, I collaborated in utilizing JavaScript to
                  enhance web application features and user interactions, supporting the development team 
                  in achieving robust and responsive solutions."
          />
          <Details
            position="Software Engineer Intern"
            company="GreyAtom"
            companyLink=""
            time="2018-2019"
            address="Mumbai, India"
            work="Developing projects for data science curriculum related to topics on 
                predictive modelling, python programming, recommender systems and time series
                Writing test cases using unitest framework to improve user experience."
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
