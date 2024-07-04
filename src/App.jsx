import { Center, OrbitControls, useHelper } from "@react-three/drei";

import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { Model } from "./components/Desk";
import { useControls } from "leva";

function App() {
  const directionalRef = useRef();
  const directionalLight2 = useRef();
  const directionalLight3 = useRef();
  const directionalLight4 = useRef();
  useHelper(directionalRef, DirectionalLightHelper, "blue");
  useHelper(directionalLight2, DirectionalLightHelper, "blue");
  useHelper(directionalLight3, DirectionalLightHelper, "blue");
  useHelper(directionalLight4, DirectionalLightHelper, "blue");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Perf />
      <OrbitControls />
      <directionalLight
        intensity={1}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[0.038, 0.012, 4.028]}
        position={[-2.036, 1.453, -3.18]}
        color={"cyan"}
        castShadow
      />
      <directionalLight
        castShadow
        intensity={0.5}
        position={[2.306, -1.05, -4.236]}
        rotation={[0, 0, Math.PI]}
        scale={[0.038, 0.012, 0.5]}
        color={"cyan"}
      />
      <directionalLight
        castShadow
        intensity={0.5}
        position={[-2.254, -1.05, -4.237]}
        rotation={[0, 0, Math.PI]}
        scale={[0.038, 0.012, 0.5]}
        color={"cyan"}
      />
      <directionalLight castShadow intensity={1} position={[0, 4, 20]} />
      <Center>
        <Model />
      </Center>
    </>
  );
}

export default App;
