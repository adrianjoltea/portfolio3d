import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import isOdd from "../../lib/isOdd";

const DURATION_IN_SEC = 1.5;
const DISTANCE_IN_PX = 300;
const DELAY_IN_SEC = 0.1;

function Project({ img, title, text, githubLink, liveLink, i }) {
  const direction = isOdd(i) ? DISTANCE_IN_PX : -DISTANCE_IN_PX;

  const motionConfig = {
    initial: { opacity: 0, x: direction },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: DURATION_IN_SEC },
  };

  return (
    <motion.div
      className="project-container-1"
      initial={motionConfig.initial}
      whileInView={motionConfig.whileInView}
      transition={{ ...motionConfig.transition, delay: i * DELAY_IN_SEC }}
    >
      <div className="image-position">
        <div className="image-project">
          <img src={img} />
        </div>
      </div>
      <div>
        <h5 className="title">{title}</h5>
        <p className="text">{text}</p>

        <div className="btn-container">
          <a
            href={githubLink}
            className="btn-container-project"
            target="_blank"
            rel="noreferrer"
          >
            {githubLink ? (
              <>
                <FaGithub /> <p>GitHub</p>
              </>
            ) : (
              <p>Private</p>
            )}
          </a>
          <a
            href={liveLink}
            className="btn-container-project"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
