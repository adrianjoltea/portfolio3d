import React from "react";
import "./Info.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Info({ screenRef, setMonitor }) {
  return (
    <section
      className="info small-screen-content"
      onClick={() => setMonitor(screenRef)}
    >
      <div className="info-container">
        <a
          href="https://www.linkedin.com/in/adrianjoltea/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <p>jolteaadrian@gmail.com</p>

        <p>0759153833</p>

        <a
          href="https://github.com/adrianjoltea"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Info;
