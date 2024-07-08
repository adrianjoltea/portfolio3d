import { Center } from "@react-three/drei";

import { Perf } from "r3f-perf";

import { LIGHT_COLOR } from "../common/colors";
import { Model } from "../components/Desk";
import { Canvas } from "@react-three/fiber";

const cameraSetting = {
  fov: 50,
  position: [0, 0.5, 4],
};

function LayoutDesktop() {
  return (
    <Canvas dpr={[1, 2]} camera={cameraSetting} shadows linear>
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
    </Canvas>
  );
}

export default LayoutDesktop;
