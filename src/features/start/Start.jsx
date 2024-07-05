import React from "react";
import "./Start.css";

function Start({ setStartScreen }) {
  return (
    <section className="screen-content start">
      <h2 className="start-text">
        Click on the screen to zoom in, and press 'ESC' to return.
      </h2>
      <button className="start-button" onClick={() => setStartScreen(false)}>
        Start
      </button>
    </section>
  );
}

export default Start;
