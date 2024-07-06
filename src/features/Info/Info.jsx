import React from "react";
import "./Info.css";
function Info({ screenRef, setMonitor }) {
  return (
    <section
      className="small-screen-content"
      onClick={() => setMonitor(screenRef)}
    >
      Info
    </section>
  );
}

export default Info;
