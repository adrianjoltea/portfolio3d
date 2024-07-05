import { Center, useHelper } from "@react-three/drei";

import { Perf } from "r3f-perf";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { Model } from "./components/Desk";
import { LIGHT_COLOR } from "./common/colors";

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
      <directionalLight
        intensity={10}
        position={[0, 1, 4]}
        color={LIGHT_COLOR}
        castShadow
      />
      <directionalLight intensity={4} color={LIGHT_COLOR} />
      <directionalLight intensity={4} color={LIGHT_COLOR} />
      <directionalLight intensity={2} position={[0, 4, 20]} />
      <Center>
        <Model />
      </Center>
    </>
  );
}

export default App;
