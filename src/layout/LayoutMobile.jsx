import React from "react";
import Welcome from "../features/welcome/Welcome";
import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Info from "../features/Info/Info";

function LayoutMobile() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Info />
    </>
  );
}

export default LayoutMobile;
