import React, { useRef } from "react";
import "./About.css";
import { SVGS } from "./svgs";
import { motion } from "framer-motion";

const motionConfig = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

function About({ screenRef, setMonitor }) {
  const skills = useRef();

  return (
    <section
      className="about screen-content"
      onClick={() => setMonitor(screenRef)}
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
                transition={{ ...motionConfig.transition, delay: i * 0.1 }}
                viewport={{ root: skills }}
              >
                {React.createElement(svg)}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="about-text"
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div>
            <h4 className="title-h4">About me</h4>
            <h2 className="title-h2">
              Adrian <span className="text-color">Joltea</span>
            </h2>
          </motion.div>
          <motion.p>
            Hi, I&apos;m a passionate and detail-oriented junior React developer
            with a strong foundation in front-end web development. My journey
            into the world of coding began with a fascination for creating
            engaging and interactive user interfaces.
          </motion.p>
          <motion.p>
            I am enthusiastic about staying up-to-date with the latest industry
            trends and technologies. Eager to contribute my skills and learn
            from experienced developers to grow as a professional in the
            ever-evolving field of web development.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
