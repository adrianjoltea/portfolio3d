import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/mainCss.jsx";

import { Canvas } from "@react-three/fiber";

const cameraSetting = {
  fov: 50,
  position: [0, 0.5, 4],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas dpr={[1, 2]} camera={cameraSetting} shadows linear>
      <App />
    </Canvas>
  </React.StrictMode>
);
