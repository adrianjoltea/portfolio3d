import React, { useRef } from "react";
import "./About.css";
import { SVGS } from "./svgs";
import { motion } from "framer-motion";

const DURATION_IN_SEC_FOR_SKILLS = 1;
const DISTANCE_IN_PX_FOR_SKILLS = -50;
const ROTATION_IN_ANGLES = 30;
const DURATION_IN_SEC_FOR_TEXT = 2;
const DISTANCE_IN_PX_FOR_TEXT = 250;
const DELAY_IN_SEC = 0.1;

const motionConfig = {
  initial: {
    opacity: 0,
    x: DISTANCE_IN_PX_FOR_SKILLS,
    rotate: ROTATION_IN_ANGLES,
  },
  whileInView: { opacity: 1, x: 0, rotate: 0 },
  transition: { duration: DURATION_IN_SEC_FOR_SKILLS },
};

function About({ screenRef, setMonitor }) {
  const skills = useRef();
  const title = useRef();

  function setMonitorIfDesktop() {
    screenRef && setMonitor(screenRef);
  }

  return (
    <section
      className={`about ${screenRef && "screen-content"}`}
      onClick={() => setMonitorIfDesktop()}
    >
      <div className="about-container">
        <div className="about-skills">
          <motion.ul className="icon-list" ref={skills}>
            {SVGS.map((svg, i) => (
              <motion.li
                className="icon"
                key={i}
                initial={motionConfig.initial}
                whileInView={motionConfig.whileInView}
                transition={{
                  ...motionConfig.transition,
                  delay: i * DELAY_IN_SEC,
                }}
                viewport={{ root: skills }}
              >
                {React.createElement(svg)}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div className="about-text" ref={title}>
          <h4 className="title-h4">
            About <span className="text-color">me</span>
          </h4>
          <motion.div
            initial={{ x: DISTANCE_IN_PX_FOR_TEXT, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: DURATION_IN_SEC_FOR_TEXT }}
            viewport={{ root: title }}
          >
            <motion.p>
              Hi, I&apos;m a passionate and detail-oriented junior React
              developer with a strong foundation in front-end web development.
              My journey into the world of coding began with a fascination for
              creating engaging and interactive user interfaces.
            </motion.p>
            <motion.p>
              I am enthusiastic about staying up-to-date with the latest
              industry trends and technologies. Eager to contribute my skills
              and learn from experienced developers to grow as a professional in
              the ever-evolving field of web development.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
