import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import isOdd from "../../lib/isOdd";

function Project({ img, title, text, githubLink, liveLink, i }) {
  const direction = isOdd(i) ? 500 : -500;

  const motionConfig = {
    initial: { opacity: 0, x: direction },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
  };

  return (
    <motion.div
      className="project-container-1"
      initial={motionConfig.initial}
      whileInView={motionConfig.whileInView}
      transition={{ ...motionConfig.transition, delay: i * 0.1 }}
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
