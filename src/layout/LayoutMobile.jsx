import React from "react";
import Welcome from "../features/welcome/Welcome";
import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Info from "../features/Info/Info";
import "./LayoutMobile.css";

function LayoutMobile() {
  return (
    <main className="app-layout">
      <Welcome />
      <About />
      <Projects />
      <Info />
    </main>
  );
}

export default LayoutMobile;
