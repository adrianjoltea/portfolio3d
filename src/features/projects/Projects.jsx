import React, { useState } from "react";
import "./Projects.css";
import Project from "./Project";
import Img1 from "/project-1.jpg";
import Img2 from "/project-2.png";
import Img3 from "/project-3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PROJECTS_PER_PAGE = 2;

const PROJECTS = [
  {
    title: "Visenna",
    text: "A team project where I am the front-end developer and manage the admin page.",
    liveLink: "https://visenna.io",
    img: Img3,
  },

  {
    title: "Personal Finance",
    text: "A full-stack app created with react for the front-end and nest.js as the backend",
    githubLink: "https://github.com/adrianjoltea/personal-finance",
    liveLink: "https://personal-finance-adrian.netlify.app",
    img: Img2,
  },
  {
    title: "Car Rental",
    text: "A full-stack app created with react for the front-end and supabase as the backend",
    githubLink: "https://github.com/adrianjoltea/car-rental",
    liveLink: "https://car-rental-joltea.netlify.app",
    img: Img1,
  },
];

function Projects({ screenRef, setMonitor }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const currentProjects = PROJECTS.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  function setMonitorIfDesktop() {
    screenRef && setMonitor(screenRef);
  }

  return (
    <section
      className={`projects ${screenRef && "screen-content"}`}
      onClick={() => setMonitorIfDesktop}
    >
      <div className="projects-container">
        <h2 className="title-h2">
          My <span className="text-color">Projects</span>
        </h2>
        <div className="projects-container-1">
          {currentProjects.map((project, i) => (
            <Project
              key={project.title}
              text={project.text}
              title={project.title}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              img={project.img}
              i={i}
            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage}>
            <FaArrowLeft />
          </button>

          <button onClick={handleNextPage}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
