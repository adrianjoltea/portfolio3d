import React, { useEffect, useRef, useState } from "react";
import { CameraControls, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Welcome from "../features/welcome/Welcome";
import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Start from "../features/start/Start";
import useKeydown from "../hooks/useKeydown";
import Info from "../features/Info/Info";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Desk.glb");
  const [activeScreen, setActiveScreen] = useState();
  const [startScreen, setStartScreen] = useState(true);
  const [active, setActive] = useState(false);
  const [notification, setNotification] = useState(true);
  const cameraRef = useRef();
  const RightMonitorScreen = useRef();
  const MiddleMonitorScreen = useRef();
  const LeftMonitorScreen = useRef();
  const BottomMonitorScreen = useRef();

  const setMonitor = (ref) => {
    setActiveScreen(ref.current);
    setActive(true);

    if (cameraRef.current) {
      cameraRef.current.enabled = true;
    }
  };

  useFrame(() => {
    if (!active) {
      return;
    } else {
      cameraRef.current?.fitToSphere(activeScreen, true);
    }
  }, [activeScreen]);

  useKeydown("Escape", () => {
    cameraRef.current?.reset(true);
    setNotification(false);
    setActive(false);
  });
  return (
    <>
      <CameraControls
        minDistance={3}
        maxDistance={5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 9}
        maxAzimuthAngle={Math.PI / 9}
        ref={cameraRef}
      />
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Room"
            castShadow
            receiveShadow
            geometry={nodes.Room.geometry}
            material={materials.CactusNeedle}
          />
          <mesh
            name="WallDecoration"
            castShadow
            receiveShadow
            geometry={nodes.WallDecoration.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="MousePad"
            castShadow
            receiveShadow
            geometry={nodes.MousePad.geometry}
            material={nodes.MousePad.material}
            position={[-0.045, 1.997, -2.814]}
          />
          <mesh
            name="Text"
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials.Text}
            position={[-0.995, 4.916, -3.884]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <group
            name="Car"
            position={[2.69, 2.062, -2.852]}
            rotation={[0, -0.932, -Math.PI / 2]}
            scale={0.167}
          >
            <mesh
              name="Circle002"
              castShadow
              receiveShadow
              geometry={nodes.Circle002.geometry}
              material={materials.Glass}
            />
            <mesh
              name="Circle002_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_1.geometry}
              material={materials.Body}
            />
            <mesh
              name="Circle002_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_2.geometry}
              material={materials.TailWhite}
            />
            <mesh
              name="Circle002_3"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_3.geometry}
              material={materials.Blinker}
            />
            <mesh
              name="Circle002_4"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_4.geometry}
              material={materials.TailRed}
            />
            <mesh
              name="Circle002_5"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_5.geometry}
              material={materials.BodyPaintAccent}
            />
          </group>
          <group
            name="Drawer"
            position={[-3.139, 0, -2.975]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              name="Cube009"
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Cube009_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube009_1.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            name="Drawer001"
            position={[3.19, 0, -2.973]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              name="Cube001_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Cube001_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_2.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <mesh
            name="Desk"
            castShadow
            receiveShadow
            geometry={nodes.Desk.geometry}
            material={materials["Material.014"]}
            position={[-0.029, 1.854, -3.376]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <group
            name="MonitorFrame001"
            position={[-0.003, 3.177, -3.741]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          >
            <mesh
              name="Plane023"
              castShadow
              receiveShadow
              geometry={nodes.Plane023.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              name="Plane023_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane023_1.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <mesh
            name="MonitorScreen001"
            castShadow
            receiveShadow
            geometry={nodes.MonitorScreen001.geometry}
            material={materials["Material.010"]}
            position={[-0.003, 3.177, -3.733]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            ref={MiddleMonitorScreen}
          >
            <Html
              prepend
              rotation-x={-Math.PI / 2}
              rotation-z={Math.PI / 2}
              position={[0, 0.04, 0]}
              transform
              occlude
              scale={0.08}
            >
              {startScreen ? (
                <Start setStartScreen={setStartScreen} />
              ) : (
                <Welcome
                  setMonitor={setMonitor}
                  screenRef={MiddleMonitorScreen}
                  setNotification={setNotification}
                  notification={notification}
                />
              )}
            </Html>
          </mesh>
          <group
            name="MonitorFrame002"
            position={[2.692, 3.177, -3.375]}
            rotation={[Math.PI, -1.309, Math.PI / 2]}
          >
            <mesh
              name="Plane022"
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              name="Plane022_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_1.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <mesh
            name="MonitorScreen002"
            castShadow
            receiveShadow
            geometry={nodes.MonitorScreen002.geometry}
            material={materials["Material.010"]}
            position={[2.69, 3.177, -3.367]}
            rotation={[Math.PI, -1.309, Math.PI / 2]}
            ref={RightMonitorScreen}
          >
            <Html
              prepend
              rotation-x={-Math.PI / 2}
              rotation-z={Math.PI / 2}
              position={[0, 0.04, 0]}
              transform
              occlude
              scale={0.08}
            >
              {startScreen ? (
                <></>
              ) : (
                <About setMonitor={setMonitor} screenRef={RightMonitorScreen} />
              )}
            </Html>
          </mesh>
          <group
            name="MonitorFrame003"
            position={[-2.697, 3.177, -3.375]}
            rotation={[0, -1.309, -Math.PI / 2]}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <mesh
            name="MonitorScreen004"
            castShadow
            receiveShadow
            geometry={nodes.MonitorScreen004.geometry}
            material={materials["Material.010"]}
            position={[-2.695, 3.177, -3.367]}
            rotation={[0, -1.309, -Math.PI / 2]}
            ref={LeftMonitorScreen}
          >
            <Html
              prepend
              rotation-x={-Math.PI / 2}
              rotation-z={Math.PI / 2}
              position={[0, 0.04, 0]}
              transform
              occlude
              scale={0.08}
            >
              {startScreen ? (
                <></>
              ) : (
                <Projects
                  setMonitor={setMonitor}
                  screenRef={LeftMonitorScreen}
                />
              )}
            </Html>
          </mesh>
          <mesh
            name="MonitorStand001"
            castShadow
            receiveShadow
            geometry={nodes.MonitorStand001.geometry}
            material={nodes.MonitorStand001.material}
            position={[-0.034, 1.881, -3.833]}
          />
          <group
            name="MonitorFrame004"
            position={[-0.003, 2.264, -3.611]}
            rotation={[1.069, -1.571, 0]}
          >
            <mesh
              name="Plane018"
              castShadow
              receiveShadow
              geometry={nodes.Plane018.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              name="Plane018_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane018_1.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <mesh
            name="MonitorScreen003"
            castShadow
            receiveShadow
            geometry={nodes.MonitorScreen003.geometry}
            material={materials["Material.010"]}
            position={[-0.003, 2.264, -3.603]}
            rotation={[1.069, -1.571, 0]}
            ref={BottomMonitorScreen}
          >
            <Html
              prepend
              rotation-x={-Math.PI / 2}
              rotation-z={Math.PI / 2}
              position={[0, 0.04, 0]}
              transform
              occlude
              scale={0.08}
            >
              {startScreen ? (
                <></>
              ) : (
                <Info setMonitor={setMonitor} screenRef={BottomMonitorScreen} />
              )}
            </Html>
          </mesh>
          <group
            name="Painting"
            position={[-1.819, 5.028, -3.768]}
            rotation={[1.383, 0, 0]}
          >
            <mesh
              name="Plane025"
              castShadow
              receiveShadow
              geometry={nodes.Plane025.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Plane025_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane025_1.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group
            name="Painting001"
            position={[2.066, 5.028, -3.768]}
            rotation={[1.383, 0, 0]}
          >
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Plane024_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group
            name="Painting003"
            position={[4.001, 3.16, -2.434]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              name="Plane026"
              castShadow
              receiveShadow
              geometry={nodes.Plane026.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Plane026_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane026_1.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group
            name="Painting002"
            position={[-4.006, 3.16, -2.434]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <mesh
            name="PaintingShelf"
            castShadow
            receiveShadow
            geometry={nodes.PaintingShelf.geometry}
            material={nodes.PaintingShelf.material}
            position={[0.032, 4.353, -3.662]}
          />
          <group name="Keyboard" position={[-0.313, 2.032, -2.775]}>
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials.ClockMaterial}
            />
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.KeyboardKey}
            />
          </group>
          <mesh
            name="MouseBody"
            castShadow
            receiveShadow
            geometry={nodes.MouseBody.geometry}
            material={materials.MouseBody}
            position={[1.135, 2.049, -2.8]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <group
            name="MouseTop"
            position={[1.135, 2.042, -2.8]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.MouseTop}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.MouseTop}
            />
          </group>
          <mesh
            name="ScrollWheel"
            castShadow
            receiveShadow
            geometry={nodes.ScrollWheel.geometry}
            material={materials.MouseBody}
            position={[1.135, 2.086, -2.895]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <group
            name="Cube"
            position={[-3.587, 4.977, -3.526]}
            rotation={[0, Math.PI / 4, 0]}
          >
            <mesh
              name="Cube004"
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.SpeakerBody}
            />
            <mesh
              name="Cube004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={nodes.Cube004_1.material}
            />
          </group>
          <group
            name="Cube001"
            position={[3.641, 4.977, -3.589]}
            rotation={[0, -0.654, 0]}
          >
            <mesh
              name="Cube005"
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials.SpeakerBody}
            />
            <mesh
              name="Cube005_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
              material={nodes.Cube005_1.material}
            />
          </group>
          <group
            name="Clock"
            position={[-2.929, 2.208, -3.136]}
            rotation={[Math.PI / 2, 0, -0.615]}
          >
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials.ClockMaterial}
            />
            <mesh
              name="Plane010_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_1.geometry}
              material={materials["ClockMaterial.002"]}
            />
          </group>
          <group name="Flower" position={[-3.612, 2.479, -2.766]}>
            <mesh
              name="Sphere001"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Sphere001_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_1.geometry}
              material={materials.Vase}
            />
            <mesh
              name="Sphere001_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_2.geometry}
              material={materials.Cactus}
            />
            <mesh
              name="Sphere001_3"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_3.geometry}
              material={materials.CactusNeedle}
            />
            <mesh
              name="Sphere001_4"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_4.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group name="Flower001" position={[3.628, 2.479, -2.766]}>
            <mesh
              name="Sphere002"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Sphere002_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_1.geometry}
              material={materials.Vase}
            />
            <mesh
              name="Sphere002_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_2.geometry}
              material={materials.Cactus}
            />
            <mesh
              name="Sphere002_3"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_3.geometry}
              material={materials.CactusNeedle}
            />
            <mesh
              name="Sphere002_4"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_4.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <mesh
            name="LedStrip"
            castShadow
            receiveShadow
            geometry={nodes.LedStrip.geometry}
            material={materials.Text}
            position={[-2.254, 1.854, -3.237]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            name="LedStrip002"
            castShadow
            receiveShadow
            geometry={nodes.LedStrip002.geometry}
            material={materials.Text}
            position={[2.306, 1.854, -3.236]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            name="LedStrip001"
            castShadow
            receiveShadow
            geometry={nodes.LedStrip001.geometry}
            material={materials.Text}
            position={[-0.036, 4.353, -3.18]}
            rotation={[-Math.PI, 1.571, 0]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/Desk.glb");
