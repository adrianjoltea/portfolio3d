import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Desk.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Room"
          castShadow
          receiveShadow
          geometry={nodes.Room.geometry}
          material={materials["Material.013"]}
          scale={4}
        />
        <mesh
          name="WallDecoration"
          castShadow
          receiveShadow
          geometry={nodes.WallDecoration.geometry}
          material={materials["Material.013"]}
          position={[0.003, 3.814, -4.175]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.992, 1, 2.183]}
        />
        <mesh
          name="MousePad"
          castShadow
          receiveShadow
          geometry={nodes.MousePad.geometry}
          material={nodes.MousePad.material}
          position={[-0.045, 1.997, -2.814]}
          scale={[1.826, 1.251, 0.608]}
        />
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.Text}
          position={[-0.995, 4.916, -3.884]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.134, 0.972, 0.972]}
        />
        <group
          name="Drawer"
          position={[-3.139, 0, -2.975]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.791, 0.634, 0.634]}
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Drawer001"
          position={[3.19, 0, -2.973]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.774, 0.62, 0.62]}
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
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
          scale={[0.763, 0.574, 4.109]}
        />
        <group
          name="MonitorFrame001"
          position={[-0.003, 3.177, -3.741]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
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
          name="MonitorScreen001"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen001.geometry}
          material={materials["Material.010"]}
          position={[-0.003, 3.177, -3.733]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
        />
        <group
          name="MonitorFrame002"
          position={[2.692, 3.177, -3.375]}
          rotation={[Math.PI, -1.309, Math.PI / 2]}
          scale={[0.692, 2.097, 1.377]}
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
          name="MonitorScreen002"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen002.geometry}
          material={materials["Material.010"]}
          position={[2.69, 3.177, -3.367]}
          rotation={[Math.PI, -1.309, Math.PI / 2]}
          scale={[0.692, 2.097, 1.377]}
        />
        <mesh
          name="MonitorScreen003"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen003.geometry}
          material={materials["Material.010"]}
          position={[-0.003, 3.177, -3.733]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
        />
        <group
          name="MonitorFrame003"
          position={[-2.697, 3.177, -3.375]}
          rotation={[0, -1.309, -Math.PI / 2]}
          scale={[0.692, 2.097, 1.377]}
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
          scale={[0.692, 2.097, 1.377]}
        />
        <mesh
          name="MonitorScreen005"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen005.geometry}
          material={materials["Material.010"]}
          position={[-2.695, 3.177, -3.367]}
          rotation={[0, -1.309, -Math.PI / 2]}
          scale={[0.692, 2.097, 1.377]}
        />
        <mesh
          name="MonitorStand001"
          castShadow
          receiveShadow
          geometry={nodes.MonitorStand001.geometry}
          material={nodes.MonitorStand001.material}
          position={[-0.034, 1.881, -3.833]}
          scale={[0.091, 0.191, 0.091]}
        />
        <group
          name="MonitorFrame004"
          position={[-0.003, 3.177, -3.741]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
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
          name="MonitorScreen006"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen006.geometry}
          material={materials["Material.010"]}
          position={[-0.003, 3.177, -3.733]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
        />
        <mesh
          name="MonitorScreen007"
          castShadow
          receiveShadow
          geometry={nodes.MonitorScreen007.geometry}
          material={materials["Material.010"]}
          position={[-0.003, 3.177, -3.733]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={[0.692, 2.097, 1.377]}
        />
        <group
          name="Painting"
          position={[-1.819, 5.028, -3.768]}
          rotation={[1.383, 0, 0]}
          scale={[0.443, 0.443, 0.615]}
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
        <group
          name="Painting001"
          position={[2.066, 5.028, -3.768]}
          rotation={[1.383, 0, 0]}
          scale={[0.443, 0.443, 0.615]}
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
        <group
          name="Painting003"
          position={[4.001, 3.16, -2.434]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.443, 0.443, 0.615]}
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
        <group
          name="Painting002"
          position={[-4.006, 3.16, -2.434]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.443, 0.443, 0.615]}
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
          scale={[4.03, 1, 0.354]}
        />
        <mesh
          name="Plane443"
          castShadow
          receiveShadow
          geometry={nodes.Plane443.geometry}
          material={materials.KeyboardKey}
          position={[-0.65, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane445"
          castShadow
          receiveShadow
          geometry={nodes.Plane445.geometry}
          material={materials.KeyboardKey}
          position={[-0.815, 2.063, -2.569]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane446"
          castShadow
          receiveShadow
          geometry={nodes.Plane446.geometry}
          material={materials.KeyboardKey}
          position={[-1.329, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane447"
          castShadow
          receiveShadow
          geometry={nodes.Plane447.geometry}
          material={materials.KeyboardKey}
          position={[-1.354, 2.063, -2.57]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane449"
          castShadow
          receiveShadow
          geometry={nodes.Plane449.geometry}
          material={materials.KeyboardKey}
          position={[-1.241, 2.063, -2.568]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane450"
          castShadow
          receiveShadow
          geometry={nodes.Plane450.geometry}
          material={materials.KeyboardKey}
          position={[-1.141, 2.063, -2.569]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane451"
          castShadow
          receiveShadow
          geometry={nodes.Plane451.geometry}
          material={materials.KeyboardKey}
          position={[-0.484, 2.063, -2.569]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane452"
          castShadow
          receiveShadow
          geometry={nodes.Plane452.geometry}
          material={materials.KeyboardKey}
          position={[-0.354, 2.063, -2.569]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane453"
          castShadow
          receiveShadow
          geometry={nodes.Plane453.geometry}
          material={materials.KeyboardKey}
          position={[-0.222, 2.063, -2.569]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane454"
          castShadow
          receiveShadow
          geometry={nodes.Plane454.geometry}
          material={materials.KeyboardKey}
          position={[-0.257, 2.063, -2.652]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane455"
          castShadow
          receiveShadow
          geometry={nodes.Plane455.geometry}
          material={materials.KeyboardKey}
          position={[-0.236, 2.063, -2.735]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane456"
          castShadow
          receiveShadow
          geometry={nodes.Plane456.geometry}
          material={materials.KeyboardKey}
          position={[-0.208, 2.063, -2.823]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane457"
          castShadow
          receiveShadow
          geometry={nodes.Plane457.geometry}
          material={materials.KeyboardKey}
          position={[-0.214, 2.063, -2.909]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane458"
          castShadow
          receiveShadow
          geometry={nodes.Plane458.geometry}
          material={materials.KeyboardKey}
          position={[-1.355, 2.063, -2.738]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane459"
          castShadow
          receiveShadow
          geometry={nodes.Plane459.geometry}
          material={materials.KeyboardKey}
          position={[-1.369, 2.063, -2.821]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane460"
          castShadow
          receiveShadow
          geometry={nodes.Plane460.geometry}
          material={materials.KeyboardKey}
          position={[-1.384, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane461"
          castShadow
          receiveShadow
          geometry={nodes.Plane461.geometry}
          material={materials.KeyboardKey}
          position={[-1.295, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane462"
          castShadow
          receiveShadow
          geometry={nodes.Plane462.geometry}
          material={materials.KeyboardKey}
          position={[-1.206, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane463"
          castShadow
          receiveShadow
          geometry={nodes.Plane463.geometry}
          material={materials.KeyboardKey}
          position={[-1.117, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane464"
          castShadow
          receiveShadow
          geometry={nodes.Plane464.geometry}
          material={materials.KeyboardKey}
          position={[-1.028, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane465"
          castShadow
          receiveShadow
          geometry={nodes.Plane465.geometry}
          material={materials.KeyboardKey}
          position={[-0.939, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane466"
          castShadow
          receiveShadow
          geometry={nodes.Plane466.geometry}
          material={materials.KeyboardKey}
          position={[-0.85, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane467"
          castShadow
          receiveShadow
          geometry={nodes.Plane467.geometry}
          material={materials.KeyboardKey}
          position={[-0.761, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane468"
          castShadow
          receiveShadow
          geometry={nodes.Plane468.geometry}
          material={materials.KeyboardKey}
          position={[-0.672, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane469"
          castShadow
          receiveShadow
          geometry={nodes.Plane469.geometry}
          material={materials.KeyboardKey}
          position={[-0.583, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane470"
          castShadow
          receiveShadow
          geometry={nodes.Plane470.geometry}
          material={materials.KeyboardKey}
          position={[-0.494, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane471"
          castShadow
          receiveShadow
          geometry={nodes.Plane471.geometry}
          material={materials.KeyboardKey}
          position={[-0.406, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane472"
          castShadow
          receiveShadow
          geometry={nodes.Plane472.geometry}
          material={materials.KeyboardKey}
          position={[-0.317, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane473"
          castShadow
          receiveShadow
          geometry={nodes.Plane473.geometry}
          material={materials.KeyboardKey}
          position={[-1.263, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane474"
          castShadow
          receiveShadow
          geometry={nodes.Plane474.geometry}
          material={materials.KeyboardKey}
          position={[-1.175, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane475"
          castShadow
          receiveShadow
          geometry={nodes.Plane475.geometry}
          material={materials.KeyboardKey}
          position={[-1.088, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane476"
          castShadow
          receiveShadow
          geometry={nodes.Plane476.geometry}
          material={materials.KeyboardKey}
          position={[-1, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane477"
          castShadow
          receiveShadow
          geometry={nodes.Plane477.geometry}
          material={materials.KeyboardKey}
          position={[-0.913, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane478"
          castShadow
          receiveShadow
          geometry={nodes.Plane478.geometry}
          material={materials.KeyboardKey}
          position={[-0.825, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane479"
          castShadow
          receiveShadow
          geometry={nodes.Plane479.geometry}
          material={materials.KeyboardKey}
          position={[-0.738, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane480"
          castShadow
          receiveShadow
          geometry={nodes.Plane480.geometry}
          material={materials.KeyboardKey}
          position={[-0.563, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane481"
          castShadow
          receiveShadow
          geometry={nodes.Plane481.geometry}
          material={materials.KeyboardKey}
          position={[-0.475, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane482"
          castShadow
          receiveShadow
          geometry={nodes.Plane482.geometry}
          material={materials.KeyboardKey}
          position={[-0.388, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane483"
          castShadow
          receiveShadow
          geometry={nodes.Plane483.geometry}
          material={materials.KeyboardKey}
          position={[-0.3, 2.063, -2.824]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane484"
          castShadow
          receiveShadow
          geometry={nodes.Plane484.geometry}
          material={materials.KeyboardKey}
          position={[-1.241, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane485"
          castShadow
          receiveShadow
          geometry={nodes.Plane485.geometry}
          material={materials.KeyboardKey}
          position={[-1.153, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane486"
          castShadow
          receiveShadow
          geometry={nodes.Plane486.geometry}
          material={materials.KeyboardKey}
          position={[-1.066, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane487"
          castShadow
          receiveShadow
          geometry={nodes.Plane487.geometry}
          material={materials.KeyboardKey}
          position={[-0.978, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane488"
          castShadow
          receiveShadow
          geometry={nodes.Plane488.geometry}
          material={materials.KeyboardKey}
          position={[-0.891, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane489"
          castShadow
          receiveShadow
          geometry={nodes.Plane489.geometry}
          material={materials.KeyboardKey}
          position={[-0.803, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane490"
          castShadow
          receiveShadow
          geometry={nodes.Plane490.geometry}
          material={materials.KeyboardKey}
          position={[-0.716, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane491"
          castShadow
          receiveShadow
          geometry={nodes.Plane491.geometry}
          material={materials.KeyboardKey}
          position={[-0.628, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane492"
          castShadow
          receiveShadow
          geometry={nodes.Plane492.geometry}
          material={materials.KeyboardKey}
          position={[-0.541, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane493"
          castShadow
          receiveShadow
          geometry={nodes.Plane493.geometry}
          material={materials.KeyboardKey}
          position={[-0.453, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane494"
          castShadow
          receiveShadow
          geometry={nodes.Plane494.geometry}
          material={materials.KeyboardKey}
          position={[-0.366, 2.063, -2.737]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane495"
          castShadow
          receiveShadow
          geometry={nodes.Plane495.geometry}
          material={materials.KeyboardKey}
          position={[-1.194, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane496"
          castShadow
          receiveShadow
          geometry={nodes.Plane496.geometry}
          material={materials.KeyboardKey}
          position={[-1.106, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane497"
          castShadow
          receiveShadow
          geometry={nodes.Plane497.geometry}
          material={materials.KeyboardKey}
          position={[-1.019, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane498"
          castShadow
          receiveShadow
          geometry={nodes.Plane498.geometry}
          material={materials.KeyboardKey}
          position={[-0.932, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane499"
          castShadow
          receiveShadow
          geometry={nodes.Plane499.geometry}
          material={materials.KeyboardKey}
          position={[-0.844, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane500"
          castShadow
          receiveShadow
          geometry={nodes.Plane500.geometry}
          material={materials.KeyboardKey}
          position={[-0.757, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane501"
          castShadow
          receiveShadow
          geometry={nodes.Plane501.geometry}
          material={materials.KeyboardKey}
          position={[-0.669, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane502"
          castShadow
          receiveShadow
          geometry={nodes.Plane502.geometry}
          material={materials.KeyboardKey}
          position={[-0.582, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane503"
          castShadow
          receiveShadow
          geometry={nodes.Plane503.geometry}
          material={materials.KeyboardKey}
          position={[-0.494, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane504"
          castShadow
          receiveShadow
          geometry={nodes.Plane504.geometry}
          material={materials.KeyboardKey}
          position={[-0.407, 2.063, -2.653]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane505"
          castShadow
          receiveShadow
          geometry={nodes.Plane505.geometry}
          material={materials.KeyboardKey}
          position={[-1.381, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane506"
          castShadow
          receiveShadow
          geometry={nodes.Plane506.geometry}
          material={materials.KeyboardKey}
          position={[-1.292, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane507"
          castShadow
          receiveShadow
          geometry={nodes.Plane507.geometry}
          material={materials.KeyboardKey}
          position={[-1.202, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane508"
          castShadow
          receiveShadow
          geometry={nodes.Plane508.geometry}
          material={materials.KeyboardKey}
          position={[-1.112, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane509"
          castShadow
          receiveShadow
          geometry={nodes.Plane509.geometry}
          material={materials.KeyboardKey}
          position={[-1.023, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane510"
          castShadow
          receiveShadow
          geometry={nodes.Plane510.geometry}
          material={materials.KeyboardKey}
          position={[-0.88, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane513"
          castShadow
          receiveShadow
          geometry={nodes.Plane513.geometry}
          material={materials.KeyboardKey}
          position={[-0.79, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane514"
          castShadow
          receiveShadow
          geometry={nodes.Plane514.geometry}
          material={materials.KeyboardKey}
          position={[-0.7, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane515"
          castShadow
          receiveShadow
          geometry={nodes.Plane515.geometry}
          material={materials.KeyboardKey}
          position={[-0.611, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane517"
          castShadow
          receiveShadow
          geometry={nodes.Plane517.geometry}
          material={materials.KeyboardKey}
          position={[-0.468, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane518"
          castShadow
          receiveShadow
          geometry={nodes.Plane518.geometry}
          material={materials.KeyboardKey}
          position={[-0.378, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane519"
          castShadow
          receiveShadow
          geometry={nodes.Plane519.geometry}
          material={materials.KeyboardKey}
          position={[-0.288, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane520"
          castShadow
          receiveShadow
          geometry={nodes.Plane520.geometry}
          material={materials.KeyboardKey}
          position={[-0.199, 2.063, -3.019]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane521"
          castShadow
          receiveShadow
          geometry={nodes.Plane521.geometry}
          material={materials.KeyboardKey}
          position={[-0.061, 2.063, -2.574]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane522"
          castShadow
          receiveShadow
          geometry={nodes.Plane522.geometry}
          material={materials.KeyboardKey}
          position={[0.025, 2.063, -2.574]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane523"
          castShadow
          receiveShadow
          geometry={nodes.Plane523.geometry}
          material={materials.KeyboardKey}
          position={[0.115, 2.063, -2.574]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane525"
          castShadow
          receiveShadow
          geometry={nodes.Plane525.geometry}
          material={materials.KeyboardKey}
          position={[0.025, 2.063, -2.661]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane528"
          castShadow
          receiveShadow
          geometry={nodes.Plane528.geometry}
          material={materials.KeyboardKey}
          position={[-0.062, 2.063, -2.827]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane529"
          castShadow
          receiveShadow
          geometry={nodes.Plane529.geometry}
          material={materials.KeyboardKey}
          position={[0.028, 2.063, -2.827]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane530"
          castShadow
          receiveShadow
          geometry={nodes.Plane530.geometry}
          material={materials.KeyboardKey}
          position={[0.118, 2.063, -2.827]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane531"
          castShadow
          receiveShadow
          geometry={nodes.Plane531.geometry}
          material={materials.KeyboardKey}
          position={[-0.062, 2.063, -2.911]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane532"
          castShadow
          receiveShadow
          geometry={nodes.Plane532.geometry}
          material={materials.KeyboardKey}
          position={[0.028, 2.063, -2.911]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane533"
          castShadow
          receiveShadow
          geometry={nodes.Plane533.geometry}
          material={materials.KeyboardKey}
          position={[0.118, 2.063, -2.911]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane534"
          castShadow
          receiveShadow
          geometry={nodes.Plane534.geometry}
          material={materials.KeyboardKey}
          position={[-0.061, 2.063, -3.02]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane535"
          castShadow
          receiveShadow
          geometry={nodes.Plane535.geometry}
          material={materials.KeyboardKey}
          position={[0.026, 2.063, -3.02]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane536"
          castShadow
          receiveShadow
          geometry={nodes.Plane536.geometry}
          material={materials.KeyboardKey}
          position={[0.114, 2.063, -3.02]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane537"
          castShadow
          receiveShadow
          geometry={nodes.Plane537.geometry}
          material={materials.KeyboardKey}
          position={[0.263, 2.063, -2.909]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane538"
          castShadow
          receiveShadow
          geometry={nodes.Plane538.geometry}
          material={materials.KeyboardKey}
          position={[0.35, 2.063, -2.909]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane539"
          castShadow
          receiveShadow
          geometry={nodes.Plane539.geometry}
          material={materials.KeyboardKey}
          position={[0.437, 2.063, -2.909]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane541"
          castShadow
          receiveShadow
          geometry={nodes.Plane541.geometry}
          material={materials.KeyboardKey}
          position={[0.263, 2.063, -2.825]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane542"
          castShadow
          receiveShadow
          geometry={nodes.Plane542.geometry}
          material={materials.KeyboardKey}
          position={[0.35, 2.063, -2.825]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane543"
          castShadow
          receiveShadow
          geometry={nodes.Plane543.geometry}
          material={materials.KeyboardKey}
          position={[0.437, 2.063, -2.825]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane544"
          castShadow
          receiveShadow
          geometry={nodes.Plane544.geometry}
          material={materials.KeyboardKey}
          position={[0.263, 2.063, -2.741]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane545"
          castShadow
          receiveShadow
          geometry={nodes.Plane545.geometry}
          material={materials.KeyboardKey}
          position={[0.35, 2.063, -2.741]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane546"
          castShadow
          receiveShadow
          geometry={nodes.Plane546.geometry}
          material={materials.KeyboardKey}
          position={[0.437, 2.063, -2.741]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane547"
          castShadow
          receiveShadow
          geometry={nodes.Plane547.geometry}
          material={materials.KeyboardKey}
          position={[0.263, 2.063, -2.656]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane548"
          castShadow
          receiveShadow
          geometry={nodes.Plane548.geometry}
          material={materials.KeyboardKey}
          position={[0.35, 2.063, -2.656]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane549"
          castShadow
          receiveShadow
          geometry={nodes.Plane549.geometry}
          material={materials.KeyboardKey}
          position={[0.437, 2.063, -2.656]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane550"
          castShadow
          receiveShadow
          geometry={nodes.Plane550.geometry}
          material={materials.KeyboardKey}
          position={[0.307, 2.063, -2.571]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane551"
          castShadow
          receiveShadow
          geometry={nodes.Plane551.geometry}
          material={materials.KeyboardKey}
          position={[0.438, 2.063, -2.571]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane553"
          castShadow
          receiveShadow
          geometry={nodes.Plane553.geometry}
          material={materials.KeyboardKey}
          position={[0.524, 2.063, -2.616]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane554"
          castShadow
          receiveShadow
          geometry={nodes.Plane554.geometry}
          material={materials.KeyboardKey}
          position={[0.524, 2.063, -2.785]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.KeyboardKey}
          position={[0.437, 2.063, -2.909]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.KeyboardKey}
          position={[0.522, 2.063, -2.91]}
          scale={[0.257, 0.044, 0.037]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.ClockMaterial}
          position={[-0.313, 2.032, -2.775]}
          scale={0.457}
        />
        <mesh
          name="MouseBody"
          castShadow
          receiveShadow
          geometry={nodes.MouseBody.geometry}
          material={materials.MouseBody}
          position={[1.135, 2.049, -2.8]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="MouseTop"
          castShadow
          receiveShadow
          geometry={nodes.MouseTop.geometry}
          material={materials.MouseTop}
          position={[1.135, 2.042, -2.8]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="ScrollWheel"
          castShadow
          receiveShadow
          geometry={nodes.ScrollWheel.geometry}
          material={materials.MouseBody}
          position={[1.135, 2.086, -2.895]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.925}
        />
        <mesh
          name="ScrollBoolean"
          castShadow
          receiveShadow
          geometry={nodes.ScrollBoolean.geometry}
          material={nodes.ScrollBoolean.material}
          position={[1.135, 2.086, -2.895]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[1.134, 2.064, -2.916]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[0.081, 0.198, 0.096]}
        />
        <mesh
          name="FlowerPot"
          castShadow
          receiveShadow
          geometry={nodes.FlowerPot.geometry}
          material={materials.Vase}
          position={[3.592, 4.796, -3.523]}
          scale={0.357}
        />
        <mesh
          name="BézierCurve"
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve.geometry}
          material={materials.FlowerStem}
          position={[3.567, 4.826, -3.49]}
          rotation={[-0.062, -0.257, -1.553]}
          scale={0.092}
        >
          <mesh
            name="Leaf"
            castShadow
            receiveShadow
            geometry={nodes.Leaf.geometry}
            material={materials.Material}
            position={[29.773, -5.883, 0.122]}
            rotation={[0.548, -0.182, 0.342]}
            scale={0.317}
          />
          <mesh
            name="Leaf_1"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_1.geometry}
            material={materials.Material}
            position={[29.764, -6.282, 0.104]}
            rotation={[3.109, -0.017, 0.776]}
            scale={0.21}
          />
          <mesh
            name="Leaf_2"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_2.geometry}
            material={materials.Material}
            position={[29.795, -6.053, 0.137]}
            rotation={[0.721, -1.067, 2.979]}
            scale={0.357}
          />
          <mesh
            name="Leaf_3"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_3.geometry}
            material={materials.Material}
            position={[29.747, -7.127, 0.063]}
            rotation={[-2.858, -0.905, 2.056]}
            scale={0.246}
          />
          <mesh
            name="Leaf_4"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_4.geometry}
            material={materials.Material}
            position={[29.692, -7.589, 0.011]}
            rotation={[0.733, 0.333, -2.596]}
            scale={0.342}
          />
          <mesh
            name="Leaf_5"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_5.geometry}
            material={materials.Material}
            position={[29.633, -9.215, -0.299]}
            rotation={[1.739, 1.102, -2.275]}
            scale={0.365}
          />
          <mesh
            name="Leaf_6"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_6.geometry}
            material={materials.Material}
            position={[29.59, -9.531, -0.461]}
            rotation={[-2.684, 0.948, -2.605]}
            scale={0.256}
          />
          <mesh
            name="Leaf_7"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_7.geometry}
            material={materials.Material}
            position={[29.533, -9.65, -0.652]}
            rotation={[-1.938, -0.473, -0.249]}
            scale={0.26}
          />
          <mesh
            name="Leaf_8"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_8.geometry}
            material={materials.Material}
            position={[29.214, -9.796, -0.868]}
            rotation={[1.822, -0.506, -0.437]}
            scale={0.264}
          />
          <mesh
            name="Leaf_9"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_9.geometry}
            material={materials.Material}
            position={[28.717, -9.363, -0.82]}
            rotation={[0.646, 0.532, 2.843]}
            scale={0.331}
          />
          <mesh
            name="Leaf_10"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_10.geometry}
            material={materials.Material}
            position={[28.479, -9.126, -0.774]}
            rotation={[-0.348, 0.669, -1.201]}
            scale={0.365}
          />
          <mesh
            name="Leaf_11"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_11.geometry}
            material={materials.Material}
            position={[28.245, -8.903, -0.773]}
            rotation={[-0.476, -0.349, -3.034]}
            scale={0.216}
          />
          <mesh
            name="Leaf_12"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_12.geometry}
            material={materials.Material}
            position={[27.944, -8.687, -0.71]}
            rotation={[2.014, -1.386, -2.964]}
            scale={0.299}
          />
          <mesh
            name="Leaf_13"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_13.geometry}
            material={materials.Material}
            position={[27.695, -8.402, -0.612]}
            rotation={[3.013, 0.166, 0.823]}
            scale={0.318}
          />
          <mesh
            name="Leaf_14"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_14.geometry}
            material={materials.Material}
            position={[27.834, -8.561, -0.674]}
            rotation={[-2.53, 1.383, 2.773]}
            scale={0.324}
          />
          <mesh
            name="Leaf_15"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_15.geometry}
            material={materials.Material}
            position={[27.518, -8.374, -0.558]}
            rotation={[-2.62, 0.101, -0.762]}
            scale={0.198}
          />
          <mesh
            name="Leaf_16"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_16.geometry}
            material={materials.Material}
            position={[27.22, -8.164, -0.508]}
            rotation={[1.538, -0.624, -1.656]}
            scale={0.313}
          />
          <mesh
            name="Leaf_17"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_17.geometry}
            material={materials.Material}
            position={[27.401, -8.268, -0.507]}
            rotation={[-1.97, -0.354, 2.8]}
            scale={0.347}
          />
          <mesh
            name="Leaf_18"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_18.geometry}
            material={materials.Material}
            position={[26.639, -7.82, -0.401]}
            rotation={[1.986, -0.117, -0.768]}
            scale={0.234}
          />
          <mesh
            name="Leaf_19"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_19.geometry}
            material={materials.Material}
            position={[26.771, -7.922, -0.397]}
            rotation={[-1.283, -0.354, -0.26]}
            scale={0.27}
          />
          <mesh
            name="Leaf_20"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_20.geometry}
            material={materials.Material}
            position={[26.497, -7.775, -0.382]}
            rotation={[1.79, -0.089, 1.935]}
            scale={0.292}
          />
          <mesh
            name="Leaf_21"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_21.geometry}
            material={materials.Material}
            position={[26.173, -7.69, -0.279]}
            rotation={[0.192, -0.393, -0.915]}
            scale={0.311}
          />
          <mesh
            name="Leaf_22"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_22.geometry}
            material={materials.Material}
            position={[25.387, -7.672, -0.345]}
            rotation={[-2.219, -0.092, -2.843]}
            scale={0.27}
          />
          <mesh
            name="Leaf_23"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_23.geometry}
            material={materials.Material}
            position={[25.087, -7.812, -0.396]}
            rotation={[2.501, 0.37, -0.39]}
            scale={0.375}
          />
          <mesh
            name="Leaf_24"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_24.geometry}
            material={materials.Material}
            position={[24.716, -7.921, -0.41]}
            rotation={[-0.931, 0.275, 3.056]}
            scale={0.26}
          />
          <mesh
            name="Leaf_25"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_25.geometry}
            material={materials.Material}
            position={[24.295, -7.933, -0.461]}
            rotation={[1.176, 0.536, -2.763]}
            scale={0.247}
          />
          <mesh
            name="Leaf_26"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_26.geometry}
            material={materials.Material}
            position={[24.551, -7.892, -0.484]}
            rotation={[-1.794, 0.61, -0.098]}
            scale={0.261}
          />
          <mesh
            name="Leaf_27"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_27.geometry}
            material={materials.Material}
            position={[24.085, -8.009, -0.499]}
            rotation={[0.53, 0.295, -1.872]}
            scale={0.203}
          />
          <mesh
            name="Leaf_28"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_28.geometry}
            material={materials.Material}
            position={[23.593, -7.978, -0.548]}
            rotation={[1.456, -0.292, 2.877]}
            scale={0.226}
          />
          <mesh
            name="Leaf_29"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_29.geometry}
            material={materials.Material}
            position={[23.888, -7.961, -0.574]}
            rotation={[-2.71, 0.121, 1.735]}
            scale={0.3}
          />
          <mesh
            name="Leaf_30"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_30.geometry}
            material={materials.Material}
            position={[22.494, -8.013, -0.773]}
            rotation={[-2.038, 0.34, 0.08]}
            scale={0.288}
          />
          <mesh
            name="Leaf_31"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_31.geometry}
            material={materials.Material}
            position={[21.84, -7.99, -0.968]}
            rotation={[0.843, -0.377, 3.06]}
            scale={0.367}
          />
          <mesh
            name="Leaf_32"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_32.geometry}
            material={materials.Material}
            position={[22.216, -8.001, -0.855]}
            rotation={[-1.911, -1.243, 0.614]}
            scale={0.216}
          />
          <mesh
            name="Leaf_33"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_33.geometry}
            material={materials.Material}
            position={[21.52, -8.029, -1.122]}
            rotation={[0.343, -0.039, 1.759]}
            scale={0.25}
          />
          <mesh
            name="Leaf_34"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_34.geometry}
            material={materials.Material}
            position={[21.821, -8.066, -0.99]}
            rotation={[3.014, 1.152, 2.862]}
            scale={0.253}
          />
          <mesh
            name="Leaf_35"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_35.geometry}
            material={materials.Material}
            position={[22.205, -8.042, -0.85]}
            rotation={[2.419, 0.185, 0.328]}
            scale={0.336}
          />
          <mesh
            name="Leaf_36"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_36.geometry}
            material={materials.Material}
            position={[21.501, -8.089, -1.092]}
            rotation={[-2.774, -0.026, 1.594]}
            scale={0.275}
          />
          <mesh
            name="Leaf_37"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_37.geometry}
            material={materials.Material}
            position={[19.677, -8.191, -2.221]}
            rotation={[-1.398, 0.2, 2.728]}
            scale={0.252}
          />
          <mesh
            name="Leaf_38"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_38.geometry}
            material={materials.Material}
            position={[20.104, -8.177, -1.937]}
            rotation={[1.612, 0.327, -1.817]}
            scale={0.267}
          />
          <mesh
            name="Leaf_39"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_39.geometry}
            material={materials.Material}
            position={[19.307, -8.26, -2.464]}
            rotation={[0.202, -0.211, 0.695]}
            scale={0.275}
          />
          <mesh
            name="Leaf_40"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_40.geometry}
            material={materials.Material}
            position={[19.654, -8.26, -2.2]}
            rotation={[0.065, -0.173, 2.035]}
            scale={0.328}
          />
          <mesh
            name="Leaf_41"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_41.geometry}
            material={materials.Material}
            position={[18.963, -8.289, -2.644]}
            rotation={[-1.763, 0.376, -2.493]}
            scale={0.304}
          />
          <mesh
            name="Leaf_42"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_42.geometry}
            material={materials.Material}
            position={[18.164, -8.366, -3.117]}
            rotation={[2.403, -0.03, 0.817]}
            scale={0.239}
          />
          <mesh
            name="Leaf_43"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_43.geometry}
            material={materials.Material}
            position={[18.534, -8.324, -2.927]}
            rotation={[-1.752, -1.222, -0.741]}
            scale={0.338}
          />
          <mesh
            name="Leaf_44"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_44.geometry}
            material={materials.Material}
            position={[18.967, -8.295, -2.672]}
            rotation={[0.4, -1.064, 1.501]}
            scale={0.381}
          />
          <mesh
            name="Leaf_45"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_45.geometry}
            material={materials.Material}
            position={[17.081, -8.421, -3.726]}
            rotation={[1.407, 0.313, 2.791]}
            scale={0.263}
          />
          <mesh
            name="Leaf_46"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_46.geometry}
            material={materials.Material}
            position={[17.408, -8.478, -3.537]}
            rotation={[-1.252, 1.009, 2.448]}
            scale={0.362}
          />
          <mesh
            name="Leaf_47"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_47.geometry}
            material={materials.Material}
            position={[16.759, -8.49, -3.848]}
            rotation={[1.311, 0.969, 2.134]}
            scale={0.21}
          />
          <mesh
            name="Leaf_48"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_48.geometry}
            material={materials.Material}
            position={[16.077, -8.545, -4.134]}
            rotation={[-0.713, -0.374, -0.869]}
            scale={0.218}
          />
          <mesh
            name="Leaf_49"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_49.geometry}
            material={materials.Material}
            position={[16.382, -8.554, -4.007]}
            rotation={[0.893, -0.213, 2.379]}
            scale={0.282}
          />
          <mesh
            name="Leaf_50"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_50.geometry}
            material={materials.Material}
            position={[15.811, -8.506, -4.181]}
            rotation={[-1.202, 0.591, 2.91]}
            scale={0.306}
          />
          <mesh
            name="Leaf_51"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_51.geometry}
            material={materials.Material}
            position={[14.567, -8.456, -4.081]}
            rotation={[-0.538, 0.428, -1.881]}
            scale={0.222}
          />
          <mesh
            name="Leaf_52"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_52.geometry}
            material={materials.Material}
            position={[14.779, -8.488, -4.181]}
            rotation={[1.714, 0.089, 2.384]}
            scale={0.34}
          />
          <mesh
            name="Leaf_53"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_53.geometry}
            material={materials.Material}
            position={[15.021, -8.522, -4.234]}
            rotation={[-1.68, -0.181, 1]}
            scale={0.222}
          />
          <mesh
            name="Leaf_54"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_54.geometry}
            material={materials.Material}
            position={[14.575, -8.543, -4.108]}
            rotation={[1.289, -0.439, -3.036]}
            scale={0.335}
          />
          <mesh
            name="Leaf_55"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_55.geometry}
            material={materials.Material}
            position={[14.173, -8.402, -3.928]}
            rotation={[-0.246, -0.922, 1.017]}
            scale={0.383}
          />
          <mesh
            name="Leaf_56"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_56.geometry}
            material={materials.Material}
            position={[13.798, -8.118, -3.608]}
            rotation={[0.175, 0.13, 0.874]}
            scale={0.357}
          />
          <mesh
            name="Leaf_57"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_57.geometry}
            material={materials.Material}
            position={[13.316, -7.673, -3.268]}
            rotation={[-0.509, 0.88, -2.352]}
            scale={0.341}
          />
          <mesh
            name="Leaf_58"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_58.geometry}
            material={materials.Material}
            position={[13.532, -7.884, -3.461]}
            rotation={[-0.659, -0.523, 3.095]}
            scale={0.372}
          />
          <mesh
            name="Leaf_59"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_59.geometry}
            material={materials.Material}
            position={[13.797, -8.135, -3.692]}
            rotation={[1.812, -1.118, -1.34]}
            scale={0.199}
          />
          <mesh
            name="Leaf_60"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_60.geometry}
            material={materials.Material}
            position={[13.301, -7.722, -3.28]}
            rotation={[2.782, 0.279, 1.549]}
            scale={0.307}
          />
          <mesh
            name="Leaf_61"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_61.geometry}
            material={materials.Material}
            position={[13.518, -7.951, -3.426]}
            rotation={[-1.048, 1.102, 0.172]}
            scale={0.304}
          />
          <mesh
            name="Leaf_62"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_62.geometry}
            material={materials.Material}
            position={[13.794, -8.145, -3.61]}
            rotation={[-0.246, 0.027, 0.788]}
            scale={0.27}
          />
          <mesh
            name="Leaf_63"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_63.geometry}
            material={materials.Material}
            position={[11.674, -5.675, -1.823]}
            rotation={[1.128, -0.371, 1.691]}
            scale={0.312}
          />
          <mesh
            name="Leaf_64"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_64.geometry}
            material={materials.Material}
            position={[11.952, -6.014, -2.109]}
            rotation={[-2.725, 0.246, -0.547]}
            scale={0.371}
          />
          <mesh
            name="Leaf_65"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_65.geometry}
            material={materials.Material}
            position={[12.256, -6.515, -2.331]}
            rotation={[-2.162, 0.225, -0.018]}
            scale={0.342}
          />
          <mesh
            name="Leaf_66"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_66.geometry}
            material={materials.Material}
            position={[10.731, -4.67, -1.347]}
            rotation={[0.558, -0.581, -1.313]}
            scale={0.266}
          />
          <mesh
            name="Leaf_67"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_67.geometry}
            material={materials.Material}
            position={[11.008, -5.011, -1.584]}
            rotation={[0.729, 0.065, 2.766]}
            scale={0.364}
          />
          <mesh
            name="Leaf_68"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_68.geometry}
            material={materials.Material}
            position={[11.379, -5.379, -1.752]}
            rotation={[-2.584, 0.844, 0.289]}
            scale={0.369}
          />
          <mesh
            name="Leaf_69"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_69.geometry}
            material={materials.Material}
            position={[10.712, -4.682, -1.442]}
            rotation={[2.55, 0.334, -2.656]}
            scale={0.199}
          />
          <mesh
            name="Leaf_70"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_70.geometry}
            material={materials.Material}
            position={[10.997, -5.032, -1.577]}
            rotation={[-3.036, -0.266, 2.145]}
            scale={0.364}
          />
          <mesh
            name="Leaf_71"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_71.geometry}
            material={materials.Material}
            position={[11.367, -5.402, -1.751]}
            rotation={[-1.288, -0.16, 2.528]}
            scale={0.359}
          />
          <mesh
            name="Leaf_72"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_72.geometry}
            material={materials.Material}
            position={[10.699, -4.706, -1.444]}
            rotation={[0.21, 0.164, 1.202]}
            scale={0.319}
          />
          <mesh
            name="Leaf_73"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_73.geometry}
            material={materials.Material}
            position={[10.992, -5.045, -1.56]}
            rotation={[2.431, -0.303, 2.639]}
            scale={0.309}
          />
          <mesh
            name="Leaf_74"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_74.geometry}
            material={materials.Material}
            position={[11.364, -5.423, -1.693]}
            rotation={[2.551, -0.498, 1.596]}
            scale={0.373}
          />
          <mesh
            name="Leaf_75"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_75.geometry}
            material={materials.Material}
            position={[10.718, -4.694, -1.348]}
            rotation={[-2.525, 0.276, 1.069]}
            scale={0.335}
          />
          <mesh
            name="Leaf_76"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_76.geometry}
            material={materials.Material}
            position={[10.034, -4.081, -1.086]}
            rotation={[-2.127, 0.524, 1.605]}
            scale={0.269}
          />
          <mesh
            name="Leaf_77"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_77.geometry}
            material={materials.Material}
            position={[10.403, -4.443, -1.282]}
            rotation={[0.45, -0.059, 2.624]}
            scale={0.296}
          />
          <mesh
            name="Leaf_78"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_78.geometry}
            material={materials.Material}
            position={[9.725, -3.802, -0.863]}
            rotation={[2.985, -1.06, -2.943]}
            scale={0.226}
          />
          <mesh
            name="Leaf_79"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_79.geometry}
            material={materials.Material}
            position={[9.088, -3.21, -0.266]}
            rotation={[2.627, -0.328, 1.031]}
            scale={0.227}
          />
          <mesh
            name="Leaf_80"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_80.geometry}
            material={materials.Material}
            position={[9.44, -3.537, -0.658]}
            rotation={[-1.836, 0.94, 0.009]}
            scale={0.312}
          />
          <mesh
            name="Leaf_81"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_81.geometry}
            material={materials.Material}
            position={[8.79, -2.954, 0.071]}
            rotation={[1.98, 0.487, -0.447]}
            scale={0.232}
          />
          <mesh
            name="Leaf_82"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_82.geometry}
            material={materials.Material}
            position={[9.085, -3.231, -0.221]}
            rotation={[-2.279, -0.039, -1.219]}
            scale={0.353}
          />
          <mesh
            name="Leaf_83"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_83.geometry}
            material={materials.Material}
            position={[8.555, -2.683, 0.423]}
            rotation={[-0.486, -1.249, -1.042]}
            scale={0.336}
          />
          <mesh
            name="Leaf_84"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_84.geometry}
            material={materials.Material}
            position={[7.924, -2.288, 1.315]}
            rotation={[3.012, -0.163, -2.981]}
            scale={0.282}
          />
          <mesh
            name="Leaf_85"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_85.geometry}
            material={materials.Material}
            position={[8.191, -2.515, 0.934]}
            rotation={[0.255, 1.102, 2.535]}
            scale={0.373}
          />
          <mesh
            name="Leaf_86"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_86.geometry}
            material={materials.Material}
            position={[8.538, -2.749, 0.501]}
            rotation={[2.985, -1.2, 2.388]}
            scale={0.201}
          />
          <mesh
            name="Leaf_87"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_87.geometry}
            material={materials.Material}
            position={[7.149, -1.706, 2.631]}
            rotation={[2.939, -0.152, 2.58]}
            scale={0.365}
          />
          <mesh
            name="Leaf_88"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_88.geometry}
            material={materials.Material}
            position={[7.408, -1.846, 2.197]}
            rotation={[-1.847, 1.162, 2.476]}
            scale={0.235}
          />
          <mesh
            name="Leaf_89"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_89.geometry}
            material={materials.Material}
            position={[7.689, -2.092, 1.685]}
            rotation={[-1.965, -0.063, -2.574]}
            scale={0.208}
          />
          <mesh
            name="Leaf_90"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_90.geometry}
            material={materials.Material}
            position={[7.138, -1.696, 2.535]}
            rotation={[0.298, 0.323, 2.638]}
            scale={0.363}
          />
          <mesh
            name="Leaf_91"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_91.geometry}
            material={materials.Material}
            position={[7.374, -1.912, 2.156]}
            rotation={[-2.935, 0.406, -1.68]}
            scale={0.282}
          />
          <mesh
            name="Leaf_92"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_92.geometry}
            material={materials.Material}
            position={[7.679, -2.116, 1.687]}
            rotation={[-0.375, 0.007, -2.367]}
            scale={0.355}
          />
          <mesh
            name="Leaf_93"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_93.geometry}
            material={materials.Material}
            position={[7.121, -1.757, 2.567]}
            rotation={[1.419, 0.174, -0.659]}
            scale={0.219}
          />
          <mesh
            name="Leaf_94"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_94.geometry}
            material={materials.Material}
            position={[7.387, -1.916, 2.241]}
            rotation={[-2.937, -0.192, 2.099]}
            scale={0.203}
          />
          <mesh
            name="Leaf_95"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_95.geometry}
            material={materials.Material}
            position={[7.696, -2.12, 1.785]}
            rotation={[2.693, -0.129, -1.027]}
            scale={0.316}
          />
          <mesh
            name="Leaf_96"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_96.geometry}
            material={materials.Material}
            position={[6.439, -1.247, 3.461]}
            rotation={[-1.584, 0.216, -0.433]}
            scale={0.305}
          />
          <mesh
            name="Leaf_97"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_97.geometry}
            material={materials.Material}
            position={[6.648, -1.448, 3.239]}
            rotation={[0.673, -0.861, 1.995]}
            scale={0.354}
          />
          <mesh
            name="Leaf_98"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_98.geometry}
            material={materials.Material}
            position={[6.248, -1.16, 3.682]}
            rotation={[-2.458, -0.794, -0.742]}
            scale={0.226}
          />
          <mesh
            name="Leaf_99"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_99.geometry}
            material={materials.Material}
            position={[5.821, -1.087, 4.066]}
            rotation={[0.857, 0.755, -2.778]}
            scale={0.377}
          />
          <mesh
            name="Leaf_100"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_100.geometry}
            material={materials.Material}
            position={[5.003, -1.013, 4.498]}
            rotation={[2.607, 0.897, 0.964]}
            scale={0.298}
          />
          <mesh
            name="Leaf_101"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_101.geometry}
            material={materials.Material}
            position={[5.189, -1.016, 4.464]}
            rotation={[2.968, 0.283, -1.474]}
            scale={0.275}
          />
          <mesh
            name="Leaf_102"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_102.geometry}
            material={materials.Material}
            position={[4.258, -0.935, 5.054]}
            rotation={[-2.604, -0.507, 2.433]}
            scale={0.218}
          />
          <mesh
            name="Leaf_103"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_103.geometry}
            material={materials.Material}
            position={[4.445, -0.939, 4.91]}
            rotation={[-0.765, -0.177, -2.122]}
            scale={0.304}
          />
          <mesh
            name="Leaf_104"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_104.geometry}
            material={materials.Material}
            position={[4.675, -0.947, 4.762]}
            rotation={[2.137, 0.564, -1.054]}
            scale={0.291}
          />
          <mesh
            name="Leaf_105"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_105.geometry}
            material={materials.Material}
            position={[4.253, -1.017, 4.998]}
            rotation={[-0.924, 0.24, -2.433]}
            scale={0.353}
          />
          <mesh
            name="Leaf_106"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_106.geometry}
            material={materials.Material}
            position={[3.809, -0.931, 5.39]}
            rotation={[2.763, -0.25, -2.132]}
            scale={0.268}
          />
          <mesh
            name="Leaf_107"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_107.geometry}
            material={materials.Material}
            position={[4.053, -0.936, 5.145]}
            rotation={[1.876, -0.192, 1]}
            scale={0.235}
          />
          <mesh
            name="Leaf_108"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_108.geometry}
            material={materials.Material}
            position={[2.856, -0.866, 5.994]}
            rotation={[-1.824, 0.194, -1.735]}
            scale={0.365}
          />
          <mesh
            name="Leaf_109"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_109.geometry}
            material={materials.Material}
            position={[3.078, -0.848, 5.812]}
            rotation={[2.293, -0.161, 2.239]}
            scale={0.34}
          />
          <mesh
            name="Leaf_110"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_110.geometry}
            material={materials.Material}
            position={[3.368, -0.874, 5.654]}
            rotation={[-1.161, -0.439, -0.93]}
            scale={0.211}
          />
          <mesh
            name="Leaf_111"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_111.geometry}
            material={materials.Material}
            position={[2.84, -0.925, 5.961]}
            rotation={[0.672, -0.08, -2.341]}
            scale={0.362}
          />
          <mesh
            name="Leaf_112"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_112.geometry}
            material={materials.Material}
            position={[3.083, -0.94, 5.831]}
            rotation={[1.582, 0.142, 1.037]}
            scale={0.263}
          />
          <mesh
            name="Leaf_113"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_113.geometry}
            material={materials.Material}
            position={[1.062, -1.007, 6.482]}
            rotation={[-1.476, 0.195, 0.524]}
            scale={0.38}
          />
          <mesh
            name="Leaf_114"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_114.geometry}
            material={materials.Material}
            position={[0.538, -1.125, 6.53]}
            rotation={[0.973, -0.33, -2.691]}
            scale={0.323}
          />
          <mesh
            name="Leaf_115"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_115.geometry}
            material={materials.Material}
            position={[0.734, -1.137, 6.442]}
            rotation={[-0.597, -0.899, -1.355]}
            scale={0.303}
          />
          <mesh
            name="Leaf_116"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_116.geometry}
            material={materials.Material}
            position={[1.059, -1.054, 6.498]}
            rotation={[-0.186, -0.992, -2.323]}
            scale={0.253}
          />
          <mesh
            name="Leaf_117"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_117.geometry}
            material={materials.Material}
            position={[0.531, -1.174, 6.542]}
            rotation={[-2.383, 0.115, 0.302]}
            scale={0.362}
          />
          <mesh
            name="Leaf_118"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_118.geometry}
            material={materials.Material}
            position={[0.055, -1.234, 6.421]}
            rotation={[-2.644, 1.191, 2.443]}
            scale={0.205}
          />
          <mesh
            name="Leaf_119"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_119.geometry}
            material={materials.Material}
            position={[0.32, -1.164, 6.488]}
            rotation={[0.204, 0.797, -0.934]}
            scale={0.355}
          />
          <mesh
            name="Leaf_120"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_120.geometry}
            material={materials.Material}
            position={[-0.157, -1.292, 6.389]}
            rotation={[-2.126, -0.078, 0.261]}
            scale={0.28}
          />
          <mesh
            name="Leaf_121"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_121.geometry}
            material={materials.Material}
            position={[0.047, -1.307, 6.462]}
            rotation={[0.896, 0.081, 1.764]}
            scale={0.201}
          />
          <mesh
            name="Leaf_122"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_122.geometry}
            material={materials.Material}
            position={[0.318, -1.224, 6.523]}
            rotation={[2.628, -0.558, 2.54]}
            scale={0.211}
          />
          <mesh
            name="Leaf_123"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_123.geometry}
            material={materials.Material}
            position={[-0.766, -1.46, 6.073]}
            rotation={[-0.676, -0.146, 2.643]}
            scale={0.373}
          />
          <mesh
            name="Leaf_124"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_124.geometry}
            material={materials.Material}
            position={[-1.104, -1.551, 5.816]}
            rotation={[1.964, 0.739, 1.422]}
            scale={0.332}
          />
          <mesh
            name="Leaf_125"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_125.geometry}
            material={materials.Material}
            position={[-1.31, -1.517, 5.601]}
            rotation={[-0.657, -0.037, -0.604]}
            scale={0.375}
          />
          <mesh
            name="Leaf_126"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_126.geometry}
            material={materials.Material}
            position={[-1.554, -1.513, 5.32]}
            rotation={[1.117, -0.147, -0.68]}
            scale={0.216}
          />
          <mesh
            name="Leaf_127"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_127.geometry}
            material={materials.Material}
            position={[-1.551, -1.32, 5.023]}
            rotation={[-2.17, 0.082, 0.494]}
            scale={0.321}
          />
          <mesh
            name="Leaf_128"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_128.geometry}
            material={materials.Material}
            position={[-1.57, -1.13, 4.786]}
            rotation={[2.177, -0.529, 2.553]}
            scale={0.355}
          />
          <mesh
            name="Leaf_129"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_129.geometry}
            material={materials.Material}
            position={[-1.501, -0.925, 4.458]}
            rotation={[-2.55, -0.086, -1.457]}
            scale={0.254}
          />
          <mesh
            name="Leaf_130"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_130.geometry}
            material={materials.Material}
            position={[-1.605, -1.065, 4.56]}
            rotation={[2.946, 0.194, 0.614]}
            scale={0.365}
          />
          <mesh
            name="Leaf_131"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_131.geometry}
            material={materials.Material}
            position={[-1.487, -0.845, 4.326]}
            rotation={[-1.452, -0.538, -0.105]}
            scale={0.342}
          />
          <mesh
            name="Leaf_132"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_132.geometry}
            material={materials.Material}
            position={[-1.448, -0.664, 4.032]}
            rotation={[0.885, -0.496, -0.047]}
            scale={0.32}
          />
          <mesh
            name="Leaf_133"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_133.geometry}
            material={materials.Material}
            position={[-1.503, -0.744, 4.179]}
            rotation={[-2.373, 0.178, 2.331]}
            scale={0.302}
          />
          <mesh
            name="Leaf_134"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_134.geometry}
            material={materials.Material}
            position={[-1.423, -0.58, 3.932]}
            rotation={[1.082, 0.325, -2.721]}
            scale={0.304}
          />
          <mesh
            name="Leaf_135"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_135.geometry}
            material={materials.Material}
            position={[-1.37, -0.221, 3.344]}
            rotation={[-1.96, 0.093, 2.859]}
            scale={0.258}
          />
          <mesh
            name="Leaf_136"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_136.geometry}
            material={materials.Material}
            position={[-1.442, -0.34, 3.363]}
            rotation={[1.952, 0.256, 1.559]}
            scale={0.205}
          />
          <mesh
            name="Leaf_137"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_137.geometry}
            material={materials.Material}
            position={[-1.349, 0.151, 2.629]}
            rotation={[-0.75, -0.255, 0.188]}
            scale={0.306}
          />
          <mesh
            name="Leaf_138"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_138.geometry}
            material={materials.Material}
            position={[-0.971, 0.783, 1.988]}
            rotation={[-2.857, 0.16, 0.026]}
            scale={0.373}
          />
          <mesh
            name="Leaf_139"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_139.geometry}
            material={materials.Material}
            position={[-1.01, 0.725, 1.985]}
            rotation={[1.72, 0.738, 0.529]}
            scale={0.246}
          />
          <mesh
            name="Leaf_140"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_140.geometry}
            material={materials.Material}
            position={[-0.304, 0.917, 1.764]}
            rotation={[0.503, 0.174, -0.007]}
            scale={0.305}
          />
          <mesh
            name="Leaf_141"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_141.geometry}
            material={materials.Material}
            position={[-0.207, 0.97, 1.84]}
            rotation={[-1.577, -0.101, -0.501]}
            scale={0.37}
          />
          <mesh
            name="Leaf_142"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_142.geometry}
            material={materials.Material}
            position={[-0.103, 0.999, 1.863]}
            rotation={[-3.017, 0.002, 0.77]}
            scale={0.36}
          />
          <mesh
            name="Leaf_143"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_143.geometry}
            material={materials.Material}
            position={[0.167, 1.068, 1.926]}
            rotation={[0.512, -0.148, 0.423]}
            scale={0.255}
          />
          <mesh
            name="Leaf_144"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_144.geometry}
            material={materials.Material}
            position={[0.286, 1.107, 1.989]}
            rotation={[-2.777, -0.568, 1.351]}
            scale={0.375}
          />
          <mesh
            name="Leaf_145"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_145.geometry}
            material={materials.Material}
            position={[0.41, 1.134, 2.104]}
            rotation={[1.472, -0.501, 0.536]}
            scale={0.28}
          />
          <mesh
            name="Leaf_146"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_146.geometry}
            material={materials.Material}
            position={[0.545, 1.159, 2.047]}
            rotation={[0.817, -0.061, -1.824]}
            scale={0.342}
          />
          <mesh
            name="Leaf_147"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_147.geometry}
            material={materials.Material}
            position={[0.911, 1.223, 2.222]}
            rotation={[-1.001, 0.083, -2.251]}
            scale={0.232}
          />
          <mesh
            name="Leaf_148"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_148.geometry}
            material={materials.Material}
            position={[1.073, 1.252, 2.191]}
            rotation={[0.72, -0.537, 0.581]}
            scale={0.315}
          />
          <mesh
            name="Leaf_149"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_149.geometry}
            material={materials.Material}
            position={[0.979, 1.242, 2.146]}
            rotation={[-2.521, 0.429, 0.442]}
            scale={0.327}
          />
        </mesh>
        <mesh
          name="BézierCurve001"
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve001.geometry}
          material={materials.FlowerStem}
          position={[3.645, 4.89, -3.402]}
        >
          <mesh
            name="Leaf_150"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_150.geometry}
            material={materials.Material}
            position={[-1.841, -2.872, -0.091]}
            rotation={[0.548, -0.182, 0.342]}
            scale={0.031}
          />
          <mesh
            name="Leaf_151"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_151.geometry}
            material={materials.Material}
            position={[-1.866, -2.869, -0.094]}
            rotation={[3.109, -0.017, 0.776]}
            scale={0.02}
          />
          <mesh
            name="Leaf_152"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_152.geometry}
            material={materials.Material}
            position={[-1.852, -2.875, -0.093]}
            rotation={[0.721, -1.067, 2.979]}
            scale={0.035}
          />
          <mesh
            name="Leaf_153"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_153.geometry}
            material={materials.Material}
            position={[-1.915, -2.872, -0.115]}
            rotation={[-2.858, -0.905, 2.056]}
            scale={0.024}
          />
          <mesh
            name="Leaf_154"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_154.geometry}
            material={materials.Material}
            position={[-1.941, -2.87, -0.128]}
            rotation={[0.733, 0.333, -2.596]}
            scale={0.034}
          />
          <mesh
            name="Leaf_155"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_155.geometry}
            material={materials.Material}
            position={[-2.031, -2.869, -0.234]}
            rotation={[1.739, 1.102, -2.275]}
            scale={0.036}
          />
          <mesh
            name="Leaf_156"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_156.geometry}
            material={materials.Material}
            position={[-2.037, -2.867, -0.256]}
            rotation={[-2.684, 0.948, -2.605]}
            scale={0.025}
          />
          <mesh
            name="Leaf_157"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_157.geometry}
            material={materials.Material}
            position={[-2.04, -2.854, -0.274]}
            rotation={[-1.938, -0.473, -0.249]}
            scale={0.025}
          />
          <mesh
            name="Leaf_158"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_158.geometry}
            material={materials.Material}
            position={[-2.019, -2.832, -0.32]}
            rotation={[1.822, -0.506, -0.437]}
            scale={0.026}
          />
          <mesh
            name="Leaf_159"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_159.geometry}
            material={materials.Material}
            position={[-1.994, -2.828, -0.332]}
            rotation={[0.646, 0.532, 2.843]}
            scale={0.033}
          />
          <mesh
            name="Leaf_160"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_160.geometry}
            material={materials.Material}
            position={[-1.974, -2.821, -0.346]}
            rotation={[-0.348, 0.669, -1.201]}
            scale={0.036}
          />
          <mesh
            name="Leaf_161"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_161.geometry}
            material={materials.Material}
            position={[-1.915, -2.799, -0.356]}
            rotation={[-0.476, -0.349, -3.034]}
            scale={0.021}
          />
          <mesh
            name="Leaf_162"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_162.geometry}
            material={materials.Material}
            position={[-1.887, -2.799, -0.365]}
            rotation={[2.014, -1.386, -2.964]}
            scale={0.029}
          />
          <mesh
            name="Leaf_163"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_163.geometry}
            material={materials.Material}
            position={[-1.858, -2.794, -0.365]}
            rotation={[3.013, 0.166, 0.823]}
            scale={0.031}
          />
          <mesh
            name="Leaf_164"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_164.geometry}
            material={materials.Material}
            position={[-1.876, -2.79, -0.368]}
            rotation={[-2.53, 1.383, 2.773]}
            scale={0.032}
          />
          <mesh
            name="Leaf_165"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_165.geometry}
            material={materials.Material}
            position={[-1.805, -2.774, -0.36]}
            rotation={[-2.62, 0.101, -0.762]}
            scale={0.019}
          />
          <mesh
            name="Leaf_166"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_166.geometry}
            material={materials.Material}
            position={[-1.776, -2.776, -0.355]}
            rotation={[1.538, -0.624, -1.656]}
            scale={0.031}
          />
          <mesh
            name="Leaf_167"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_167.geometry}
            material={materials.Material}
            position={[-1.791, -2.779, -0.365]}
            rotation={[-1.97, -0.354, 2.8]}
            scale={0.034}
          />
          <mesh
            name="Leaf_168"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_168.geometry}
            material={materials.Material}
            position={[-1.725, -2.762, -0.355]}
            rotation={[1.986, -0.117, -0.768]}
            scale={0.023}
          />
          <mesh
            name="Leaf_169"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_169.geometry}
            material={materials.Material}
            position={[-1.738, -2.761, -0.36]}
            rotation={[-1.283, -0.354, -0.26]}
            scale={0.026}
          />
          <mesh
            name="Leaf_170"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_170.geometry}
            material={materials.Material}
            position={[-1.687, -2.733, -0.352]}
            rotation={[1.79, -0.089, 1.935]}
            scale={0.029}
          />
          <mesh
            name="Leaf_171"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_171.geometry}
            material={materials.Material}
            position={[-1.663, -2.725, -0.347]}
            rotation={[0.192, -0.393, -0.915]}
            scale={0.031}
          />
          <mesh
            name="Leaf_172"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_172.geometry}
            material={materials.Material}
            position={[-1.637, -2.672, -0.347]}
            rotation={[-2.219, -0.092, -2.843]}
            scale={0.027}
          />
          <mesh
            name="Leaf_173"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_173.geometry}
            material={materials.Material}
            position={[-1.634, -2.612, -0.36]}
            rotation={[2.501, 0.37, -0.39]}
            scale={0.037}
          />
          <mesh
            name="Leaf_174"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_174.geometry}
            material={materials.Material}
            position={[-1.63, -2.586, -0.355]}
            rotation={[-0.931, 0.275, 3.056]}
            scale={0.025}
          />
          <mesh
            name="Leaf_175"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_175.geometry}
            material={materials.Material}
            position={[-1.625, -2.597, -0.358]}
            rotation={[1.176, 0.536, -2.763]}
            scale={0.024}
          />
          <mesh
            name="Leaf_176"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_176.geometry}
            material={materials.Material}
            position={[-1.635, -2.574, -0.36]}
            rotation={[-1.794, 0.61, -0.098]}
            scale={0.026}
          />
          <mesh
            name="Leaf_177"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_177.geometry}
            material={materials.Material}
            position={[-1.634, -2.548, -0.363]}
            rotation={[0.53, 0.295, -1.872]}
            scale={0.02}
          />
          <mesh
            name="Leaf_178"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_178.geometry}
            material={materials.Material}
            position={[-1.639, -2.523, -0.352]}
            rotation={[1.456, -0.292, 2.877]}
            scale={0.022}
          />
          <mesh
            name="Leaf_179"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_179.geometry}
            material={materials.Material}
            position={[-1.633, -2.536, -0.362]}
            rotation={[-2.71, 0.121, 1.735]}
            scale={0.03}
          />
          <mesh
            name="Leaf_180"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_180.geometry}
            material={materials.Material}
            position={[-1.658, -2.401, -0.333]}
            rotation={[-2.038, 0.34, 0.08]}
            scale={0.028}
          />
          <mesh
            name="Leaf_181"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_181.geometry}
            material={materials.Material}
            position={[-1.655, -2.375, -0.336]}
            rotation={[0.843, -0.377, 3.06]}
            scale={0.036}
          />
          <mesh
            name="Leaf_182"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_182.geometry}
            material={materials.Material}
            position={[-1.656, -2.354, -0.325]}
            rotation={[-1.911, -1.243, 0.614]}
            scale={0.021}
          />
          <mesh
            name="Leaf_183"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_183.geometry}
            material={materials.Material}
            position={[-1.657, -2.329, -0.323]}
            rotation={[0.343, -0.039, 1.759]}
            scale={0.024}
          />
          <mesh
            name="Leaf_184"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_184.geometry}
            material={materials.Material}
            position={[-1.66, -2.34, -0.333]}
            rotation={[3.014, 1.152, 2.862]}
            scale={0.025}
          />
          <mesh
            name="Leaf_185"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_185.geometry}
            material={materials.Material}
            position={[-1.663, -2.318, -0.33]}
            rotation={[2.419, 0.185, 0.328]}
            scale={0.033}
          />
          <mesh
            name="Leaf_186"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_186.geometry}
            material={materials.Material}
            position={[-1.662, -2.293, -0.326]}
            rotation={[-2.774, -0.026, 1.594]}
            scale={0.027}
          />
          <mesh
            name="Leaf_187"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_187.geometry}
            material={materials.Material}
            position={[-1.594, -2.157, -0.351]}
            rotation={[-1.398, 0.2, 2.728]}
            scale={0.025}
          />
          <mesh
            name="Leaf_188"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_188.geometry}
            material={materials.Material}
            position={[-1.605, -2.178, -0.355]}
            rotation={[1.612, 0.327, -1.817]}
            scale={0.026}
          />
          <mesh
            name="Leaf_189"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_189.geometry}
            material={materials.Material}
            position={[-1.578, -2.148, -0.361]}
            rotation={[0.202, -0.211, 0.695]}
            scale={0.027}
          />
          <mesh
            name="Leaf_190"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_190.geometry}
            material={materials.Material}
            position={[-1.55, -2.11, -0.36]}
            rotation={[0.065, -0.173, 2.035]}
            scale={0.032}
          />
          <mesh
            name="Leaf_191"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_191.geometry}
            material={materials.Material}
            position={[-1.565, -2.132, -0.353]}
            rotation={[-1.763, 0.376, -2.493]}
            scale={0.03}
          />
          <mesh
            name="Leaf_192"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_192.geometry}
            material={materials.Material}
            position={[-1.53, -2.099, -0.353]}
            rotation={[2.403, -0.03, 0.817]}
            scale={0.023}
          />
          <mesh
            name="Leaf_193"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_193.geometry}
            material={materials.Material}
            position={[-1.493, -2.061, -0.359]}
            rotation={[-1.752, -1.222, -0.741]}
            scale={0.033}
          />
          <mesh
            name="Leaf_194"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_194.geometry}
            material={materials.Material}
            position={[-1.517, -2.08, -0.359]}
            rotation={[0.4, -1.064, 1.501]}
            scale={0.038}
          />
          <mesh
            name="Leaf_195"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_195.geometry}
            material={materials.Material}
            position={[-1.407, -1.993, -0.355]}
            rotation={[1.407, 0.313, 2.791]}
            scale={0.026}
          />
          <mesh
            name="Leaf_196"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_196.geometry}
            material={materials.Material}
            position={[-1.424, -2.015, -0.349]}
            rotation={[-1.252, 1.009, 2.448]}
            scale={0.036}
          />
          <mesh
            name="Leaf_197"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_197.geometry}
            material={materials.Material}
            position={[-1.451, -2.034, -0.36]}
            rotation={[1.311, 0.969, 2.134]}
            scale={0.02}
          />
          <mesh
            name="Leaf_198"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_198.geometry}
            material={materials.Material}
            position={[-1.338, -1.94, -0.343]}
            rotation={[-0.713, -0.374, -0.869]}
            scale={0.021}
          />
          <mesh
            name="Leaf_199"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_199.geometry}
            material={materials.Material}
            position={[-1.358, -1.96, -0.343]}
            rotation={[0.893, -0.213, 2.379]}
            scale={0.028}
          />
          <mesh
            name="Leaf_200"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_200.geometry}
            material={materials.Material}
            position={[-1.383, -1.981, -0.355]}
            rotation={[-1.202, 0.591, 2.91]}
            scale={0.03}
          />
          <mesh
            name="Leaf_201"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_201.geometry}
            material={materials.Material}
            position={[-1.265, -1.892, -0.337]}
            rotation={[-0.538, 0.428, -1.881]}
            scale={0.022}
          />
          <mesh
            name="Leaf_202"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_202.geometry}
            material={materials.Material}
            position={[-1.286, -1.909, -0.345]}
            rotation={[1.714, 0.089, 2.384]}
            scale={0.034}
          />
          <mesh
            name="Leaf_203"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_203.geometry}
            material={materials.Material}
            position={[-1.313, -1.929, -0.348]}
            rotation={[-1.68, -0.181, 1]}
            scale={0.022}
          />
          <mesh
            name="Leaf_204"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_204.geometry}
            material={materials.Material}
            position={[-1.203, -1.833, -0.339]}
            rotation={[1.289, -0.439, -3.036]}
            scale={0.033}
          />
          <mesh
            name="Leaf_205"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_205.geometry}
            material={materials.Material}
            position={[-1.219, -1.855, -0.34]}
            rotation={[-0.246, -0.922, 1.017]}
            scale={0.038}
          />
          <mesh
            name="Leaf_206"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_206.geometry}
            material={materials.Material}
            position={[-1.186, -1.816, -0.335]}
            rotation={[0.175, 0.13, 0.874]}
            scale={0.035}
          />
          <mesh
            name="Leaf_207"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_207.geometry}
            material={materials.Material}
            position={[-1.139, -1.787, -0.329]}
            rotation={[-0.509, 0.88, -2.352]}
            scale={0.034}
          />
          <mesh
            name="Leaf_208"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_208.geometry}
            material={materials.Material}
            position={[-1.157, -1.804, -0.334]}
            rotation={[-0.659, -0.523, 3.095]}
            scale={0.037}
          />
          <mesh
            name="Leaf_209"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_209.geometry}
            material={materials.Material}
            position={[-1.18, -1.823, -0.336]}
            rotation={[1.812, -1.118, -1.34]}
            scale={0.019}
          />
          <mesh
            name="Leaf_210"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_210.geometry}
            material={materials.Material}
            position={[-1.139, -1.786, -0.336]}
            rotation={[2.782, 0.279, 1.549]}
            scale={0.03}
          />
          <mesh
            name="Leaf_211"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_211.geometry}
            material={materials.Material}
            position={[-1.111, -1.748, -0.334]}
            rotation={[-1.048, 1.102, 0.172]}
            scale={0.03}
          />
          <mesh
            name="Leaf_212"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_212.geometry}
            material={materials.Material}
            position={[-1.125, -1.77, -0.327]}
            rotation={[-0.246, 0.027, 0.788]}
            scale={0.026}
          />
          <mesh
            name="Leaf_213"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_213.geometry}
            material={materials.Material}
            position={[-1.023, -1.605, -0.346]}
            rotation={[1.128, -0.371, 1.691]}
            scale={0.031}
          />
          <mesh
            name="Leaf_214"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_214.geometry}
            material={materials.Material}
            position={[-1.007, -1.567, -0.35]}
            rotation={[-2.725, 0.246, -0.547]}
            scale={0.037}
          />
          <mesh
            name="Leaf_215"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_215.geometry}
            material={materials.Material}
            position={[-0.987, -1.531, -0.339]}
            rotation={[-2.162, 0.225, -0.018]}
            scale={0.034}
          />
          <mesh
            name="Leaf_216"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_216.geometry}
            material={materials.Material}
            position={[-0.952, -1.485, -0.333]}
            rotation={[0.558, -0.581, -1.313]}
            scale={0.026}
          />
          <mesh
            name="Leaf_217"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_217.geometry}
            material={materials.Material}
            position={[-0.915, -1.438, -0.303]}
            rotation={[0.729, 0.065, 2.766]}
            scale={0.036}
          />
          <mesh
            name="Leaf_218"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_218.geometry}
            material={materials.Material}
            position={[-0.938, -1.466, -0.317]}
            rotation={[-2.584, 0.844, 0.289]}
            scale={0.036}
          />
          <mesh
            name="Leaf_219"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_219.geometry}
            material={materials.Material}
            position={[-0.896, -1.415, -0.291]}
            rotation={[2.55, 0.334, -2.656]}
            scale={0.019}
          />
          <mesh
            name="Leaf_220"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_220.geometry}
            material={materials.Material}
            position={[-0.915, -1.437, -0.308]}
            rotation={[-3.036, -0.266, 2.145]}
            scale={0.036}
          />
          <mesh
            name="Leaf_221"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_221.geometry}
            material={materials.Material}
            position={[-0.936, -1.465, -0.322]}
            rotation={[-1.288, -0.16, 2.528]}
            scale={0.036}
          />
          <mesh
            name="Leaf_222"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_222.geometry}
            material={materials.Material}
            position={[-0.896, -1.415, -0.293]}
            rotation={[0.21, 0.164, 1.202]}
            scale={0.031}
          />
          <mesh
            name="Leaf_223"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_223.geometry}
            material={materials.Material}
            position={[-0.916, -1.436, -0.309]}
            rotation={[2.431, -0.303, 2.639]}
            scale={0.03}
          />
          <mesh
            name="Leaf_224"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_224.geometry}
            material={materials.Material}
            position={[-0.88, -1.388, -0.278]}
            rotation={[2.551, -0.498, 1.596]}
            scale={0.037}
          />
          <mesh
            name="Leaf_225"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_225.geometry}
            material={materials.Material}
            position={[-0.815, -1.338, -0.226]}
            rotation={[-2.525, 0.276, 1.069]}
            scale={0.033}
          />
          <mesh
            name="Leaf_226"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_226.geometry}
            material={materials.Material}
            position={[-0.733, -1.285, -0.177]}
            rotation={[-2.127, 0.524, 1.605]}
            scale={0.026}
          />
          <mesh
            name="Leaf_227"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_227.geometry}
            material={materials.Material}
            position={[-0.782, -1.314, -0.208]}
            rotation={[0.45, -0.059, 2.624]}
            scale={0.029}
          />
          <mesh
            name="Leaf_228"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_228.geometry}
            material={materials.Material}
            position={[-0.691, -1.263, -0.144]}
            rotation={[2.985, -1.06, -2.943]}
            scale={0.022}
          />
          <mesh
            name="Leaf_229"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_229.geometry}
            material={materials.Material}
            position={[-0.596, -1.211, -0.086]}
            rotation={[2.627, -0.328, 1.031]}
            scale={0.022}
          />
          <mesh
            name="Leaf_230"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_230.geometry}
            material={materials.Material}
            position={[-0.651, -1.24, -0.12]}
            rotation={[-1.836, 0.94, 0.009]}
            scale={0.031}
          />
          <mesh
            name="Leaf_231"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_231.geometry}
            material={materials.Material}
            position={[-0.55, -1.188, -0.055]}
            rotation={[1.98, 0.487, -0.447]}
            scale={0.023}
          />
          <mesh
            name="Leaf_232"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_232.geometry}
            material={materials.Material}
            position={[-0.591, -1.215, -0.081]}
            rotation={[-2.279, -0.039, -1.219]}
            scale={0.035}
          />
          <mesh
            name="Leaf_233"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_233.geometry}
            material={materials.Material}
            position={[-0.648, -1.24, -0.126]}
            rotation={[-0.486, -1.249, -1.042]}
            scale={0.033}
          />
          <mesh
            name="Leaf_234"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_234.geometry}
            material={materials.Material}
            position={[-0.411, -1.116, 0.029]}
            rotation={[3.012, -0.163, -2.981]}
            scale={0.028}
          />
          <mesh
            name="Leaf_235"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_235.geometry}
            material={materials.Material}
            position={[-0.453, -1.142, 0.007]}
            rotation={[0.255, 1.102, 2.535]}
            scale={0.037}
          />
          <mesh
            name="Leaf_236"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_236.geometry}
            material={materials.Material}
            position={[-0.502, -1.171, -0.026]}
            rotation={[2.985, -1.2, 2.388]}
            scale={0.019}
          />
          <mesh
            name="Leaf_237"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_237.geometry}
            material={materials.Material}
            position={[-0.403, -1.121, 0.029]}
            rotation={[2.939, -0.152, 2.58]}
            scale={0.036}
          />
          <mesh
            name="Leaf_238"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_238.geometry}
            material={materials.Material}
            position={[-0.451, -1.14, -0.002]}
            rotation={[-1.847, 1.162, 2.476]}
            scale={0.023}
          />
          <mesh
            name="Leaf_239"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_239.geometry}
            material={materials.Material}
            position={[-0.374, -1.095, 0.051]}
            rotation={[-1.965, -0.063, -2.574]}
            scale={0.02}
          />
          <mesh
            name="Leaf_240"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_240.geometry}
            material={materials.Material}
            position={[-0.297, -1.048, 0.102]}
            rotation={[0.298, 0.323, 2.638]}
            scale={0.036}
          />
          <mesh
            name="Leaf_241"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_241.geometry}
            material={materials.Material}
            position={[-0.332, -1.071, 0.084]}
            rotation={[-2.935, 0.406, -1.68]}
            scale={0.028}
          />
          <mesh
            name="Leaf_242"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_242.geometry}
            material={materials.Material}
            position={[-0.375, -1.096, 0.055]}
            rotation={[-0.375, 0.007, -2.367]}
            scale={0.035}
          />
          <mesh
            name="Leaf_243"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_243.geometry}
            material={materials.Material}
            position={[-0.295, -1.051, 0.108]}
            rotation={[1.419, 0.174, -0.659]}
            scale={0.021}
          />
          <mesh
            name="Leaf_244"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_244.geometry}
            material={materials.Material}
            position={[-0.325, -1.075, 0.083]}
            rotation={[-2.937, -0.192, 2.099]}
            scale={0.02}
          />
          <mesh
            name="Leaf_245"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_245.geometry}
            material={materials.Material}
            position={[-0.367, -1.1, 0.052]}
            rotation={[2.693, -0.129, -1.027]}
            scale={0.031}
          />
          <mesh
            name="Leaf_246"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_246.geometry}
            material={materials.Material}
            position={[-0.294, -1.048, 0.099]}
            rotation={[-1.584, 0.216, -0.433]}
            scale={0.03}
          />
          <mesh
            name="Leaf_247"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_247.geometry}
            material={materials.Material}
            position={[-0.233, -1.009, 0.139]}
            rotation={[0.673, -0.861, 1.995]}
            scale={0.035}
          />
          <mesh
            name="Leaf_248"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_248.geometry}
            material={materials.Material}
            position={[-0.268, -1.029, 0.116]}
            rotation={[-2.458, -0.794, -0.742]}
            scale={0.022}
          />
          <mesh
            name="Leaf_249"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_249.geometry}
            material={materials.Material}
            position={[-0.16, -0.934, 0.185]}
            rotation={[0.857, 0.755, -2.778]}
            scale={0.037}
          />
          <mesh
            name="Leaf_250"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_250.geometry}
            material={materials.Material}
            position={[-0.129, -0.819, 0.212]}
            rotation={[2.607, 0.897, 0.964]}
            scale={0.029}
          />
          <mesh
            name="Leaf_251"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_251.geometry}
            material={materials.Material}
            position={[-0.125, -0.837, 0.215]}
            rotation={[2.968, 0.283, -1.474]}
            scale={0.027}
          />
          <mesh
            name="Leaf_252"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_252.geometry}
            material={materials.Material}
            position={[-0.126, -0.804, 0.214]}
            rotation={[-2.604, -0.507, 2.433]}
            scale={0.021}
          />
          <mesh
            name="Leaf_253"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_253.geometry}
            material={materials.Material}
            position={[-0.127, -0.818, 0.211]}
            rotation={[-0.765, -0.177, -2.122]}
            scale={0.03}
          />
          <mesh
            name="Leaf_254"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_254.geometry}
            material={materials.Material}
            position={[-0.125, -0.835, 0.206]}
            rotation={[2.137, 0.564, -1.054]}
            scale={0.029}
          />
          <mesh
            name="Leaf_255"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_255.geometry}
            material={materials.Material}
            position={[-0.133, -0.756, 0.236]}
            rotation={[-0.924, 0.24, -2.433]}
            scale={0.035}
          />
          <mesh
            name="Leaf_256"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_256.geometry}
            material={materials.Material}
            position={[-0.15, -0.721, 0.247]}
            rotation={[2.763, -0.25, -2.132]}
            scale={0.026}
          />
          <mesh
            name="Leaf_257"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_257.geometry}
            material={materials.Material}
            position={[-0.136, -0.739, 0.238]}
            rotation={[1.876, -0.192, 1]}
            scale={0.023}
          />
          <mesh
            name="Leaf_258"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_258.geometry}
            material={materials.Material}
            position={[-0.173, -0.645, 0.269]}
            rotation={[-1.824, 0.194, -1.735]}
            scale={0.036}
          />
          <mesh
            name="Leaf_259"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_259.geometry}
            material={materials.Material}
            position={[-0.17, -0.663, 0.257]}
            rotation={[2.293, -0.161, 2.239]}
            scale={0.034}
          />
          <mesh
            name="Leaf_260"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_260.geometry}
            material={materials.Material}
            position={[-0.162, -0.685, 0.249]}
            rotation={[-1.161, -0.439, -0.93]}
            scale={0.021}
          />
          <mesh
            name="Leaf_261"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_261.geometry}
            material={materials.Material}
            position={[-0.201, -0.587, 0.286]}
            rotation={[0.672, -0.08, -2.341]}
            scale={0.036}
          />
          <mesh
            name="Leaf_262"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_262.geometry}
            material={materials.Material}
            position={[-0.194, -0.605, 0.278]}
            rotation={[1.582, 0.142, 1.037]}
            scale={0.026}
          />
          <mesh
            name="Leaf_263"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_263.geometry}
            material={materials.Material}
            position={[-0.291, -0.413, 0.363]}
            rotation={[-1.476, 0.195, 0.524]}
            scale={0.038}
          />
          <mesh
            name="Leaf_264"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_264.geometry}
            material={materials.Material}
            position={[-0.303, -0.378, 0.376]}
            rotation={[0.973, -0.33, -2.691]}
            scale={0.032}
          />
          <mesh
            name="Leaf_265"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_265.geometry}
            material={materials.Material}
            position={[-0.296, -0.389, 0.362]}
            rotation={[-0.597, -0.899, -1.355]}
            scale={0.03}
          />
          <mesh
            name="Leaf_266"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_266.geometry}
            material={materials.Material}
            position={[-0.302, -0.361, 0.378]}
            rotation={[-0.186, -0.992, -2.323]}
            scale={0.025}
          />
          <mesh
            name="Leaf_267"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_267.geometry}
            material={materials.Material}
            position={[-0.31, -0.33, 0.386]}
            rotation={[-2.383, 0.115, 0.302]}
            scale={0.036}
          />
          <mesh
            name="Leaf_268"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_268.geometry}
            material={materials.Material}
            position={[-0.323, -0.302, 0.393]}
            rotation={[-2.644, 1.191, 2.443]}
            scale={0.02}
          />
          <mesh
            name="Leaf_269"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_269.geometry}
            material={materials.Material}
            position={[-0.322, -0.318, 0.389]}
            rotation={[0.204, 0.797, -0.934]}
            scale={0.035}
          />
          <mesh
            name="Leaf_270"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_270.geometry}
            material={materials.Material}
            position={[-0.324, -0.291, 0.398]}
            rotation={[-2.126, -0.078, 0.261]}
            scale={0.027}
          />
          <mesh
            name="Leaf_271"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_271.geometry}
            material={materials.Material}
            position={[-0.318, -0.272, 0.41]}
            rotation={[0.896, 0.081, 1.764]}
            scale={0.019}
          />
          <mesh
            name="Leaf_272"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_272.geometry}
            material={materials.Material}
            position={[-0.317, -0.285, 0.406]}
            rotation={[2.628, -0.558, 2.54]}
            scale={0.021}
          />
          <mesh
            name="Leaf_273"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_273.geometry}
            material={materials.Material}
            position={[-0.319, -0.225, 0.416]}
            rotation={[-0.676, -0.146, 2.643]}
            scale={0.037}
          />
          <mesh
            name="Leaf_274"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_274.geometry}
            material={materials.Material}
            position={[-0.316, -0.169, 0.411]}
            rotation={[1.964, 0.739, 1.422]}
            scale={0.033}
          />
          <mesh
            name="Leaf_275"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_275.geometry}
            material={materials.Material}
            position={[-0.311, -0.151, 0.399]}
            rotation={[-0.657, -0.037, -0.604]}
            scale={0.037}
          />
          <mesh
            name="Leaf_276"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_276.geometry}
            material={materials.Material}
            position={[-0.309, -0.1, 0.378]}
            rotation={[1.117, -0.147, -0.68]}
            scale={0.021}
          />
          <mesh
            name="Leaf_277"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_277.geometry}
            material={materials.Material}
            position={[-0.301, -0.087, 0.368]}
            rotation={[-2.17, 0.082, 0.494]}
            scale={0.032}
          />
          <mesh
            name="Leaf_278"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_278.geometry}
            material={materials.Material}
            position={[-0.298, -0.045, 0.337]}
            rotation={[2.177, -0.529, 2.553]}
            scale={0.035}
          />
          <mesh
            name="Leaf_279"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_279.geometry}
            material={materials.Material}
            position={[-0.298, -0.033, 0.312]}
            rotation={[-2.55, -0.086, -1.457]}
            scale={0.025}
          />
          <mesh
            name="Leaf_280"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_280.geometry}
            material={materials.Material}
            position={[-0.294, -0.023, 0.292]}
            rotation={[2.946, 0.194, 0.614]}
            scale={0.036}
          />
          <mesh
            name="Leaf_281"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_281.geometry}
            material={materials.Material}
            position={[-0.292, -0.013, 0.273]}
            rotation={[-1.452, -0.538, -0.105]}
            scale={0.034}
          />
          <mesh
            name="Leaf_282"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_282.geometry}
            material={materials.Material}
            position={[-0.287, 0.006, 0.21]}
            rotation={[0.885, -0.496, -0.047]}
            scale={0.032}
          />
          <mesh
            name="Leaf_283"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_283.geometry}
            material={materials.Material}
            position={[-0.288, 0.002, 0.222]}
            rotation={[-2.373, 0.178, 2.331]}
            scale={0.03}
          />
          <mesh
            name="Leaf_284"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_284.geometry}
            material={materials.Material}
            position={[-0.28, 0.008, 0.202]}
            rotation={[1.082, 0.325, -2.721]}
            scale={0.03}
          />
          <mesh
            name="Leaf_285"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_285.geometry}
            material={materials.Material}
            position={[-0.276, 0.015, 0.148]}
            rotation={[-1.96, 0.093, 2.859]}
            scale={0.025}
          />
          <mesh
            name="Leaf_286"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_286.geometry}
            material={materials.Material}
            position={[-0.275, 0.026, 0.136]}
            rotation={[1.952, 0.256, 1.559]}
            scale={0.02}
          />
          <mesh
            name="Leaf_287"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_287.geometry}
            material={materials.Material}
            position={[-0.212, 0.084, 0.124]}
            rotation={[-0.75, -0.255, 0.188]}
            scale={0.03}
          />
          <mesh
            name="Leaf_288"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_288.geometry}
            material={materials.Material}
            position={[-0.174, 0.084, 0.039]}
            rotation={[-2.857, 0.16, 0.026]}
            scale={0.037}
          />
          <mesh
            name="Leaf_289"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_289.geometry}
            material={materials.Material}
            position={[-0.179, 0.088, 0.047]}
            rotation={[1.72, 0.738, 0.529]}
            scale={0.024}
          />
          <mesh
            name="Leaf_290"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_290.geometry}
            material={materials.Material}
            position={[-0.118, 0.103, 0.008]}
            rotation={[0.503, 0.174, -0.007]}
            scale={0.03}
          />
          <mesh
            name="Leaf_291"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_291.geometry}
            material={materials.Material}
            position={[-0.096, 0.1, 0.027]}
            rotation={[-1.577, -0.101, -0.501]}
            scale={0.037}
          />
          <mesh
            name="Leaf_292"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_292.geometry}
            material={materials.Material}
            position={[-0.1, 0.101, 0.021]}
            rotation={[-3.017, 0.002, 0.77]}
            scale={0.036}
          />
          <mesh
            name="Leaf_293"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_293.geometry}
            material={materials.Material}
            position={[-0.075, 0.075, 0.039]}
            rotation={[0.512, -0.148, 0.423]}
            scale={0.025}
          />
          <mesh
            name="Leaf_294"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_294.geometry}
            material={materials.Material}
            position={[-0.062, 0.06, 0.039]}
            rotation={[-2.777, -0.568, 1.351]}
            scale={0.037}
          />
          <mesh
            name="Leaf_295"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_295.geometry}
            material={materials.Material}
            position={[-0.067, 0.068, 0.032]}
            rotation={[1.472, -0.501, 0.536]}
            scale={0.027}
          />
          <mesh
            name="Leaf_296"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_296.geometry}
            material={materials.Material}
            position={[-0.056, 0.054, 0.033]}
            rotation={[0.817, -0.061, -1.824]}
            scale={0.034}
          />
          <mesh
            name="Leaf_297"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_297.geometry}
            material={materials.Material}
            position={[-0.011, 0, 0.02]}
            rotation={[-1.001, 0.083, -2.251]}
            scale={0.023}
          />
          <mesh
            name="Leaf_298"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_298.geometry}
            material={materials.Material}
            position={[-0.024, 0.01, 0.021]}
            rotation={[0.72, -0.537, 0.581]}
            scale={0.031}
          />
          <mesh
            name="Leaf_299"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_299.geometry}
            material={materials.Material}
            position={[-0.033, 0.026, 0.025]}
            rotation={[-2.521, 0.429, 0.442]}
            scale={0.032}
          />
        </mesh>
        <mesh
          name="BézierCurve002"
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve002.geometry}
          material={materials.FlowerStem}
          position={[3.645, 4.89, -3.402]}
        >
          <mesh
            name="Leaf_300"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_300.geometry}
            material={materials.Material}
            position={[-0.279, -2.814, 0.404]}
            rotation={[0.548, -0.182, 0.342]}
            scale={0.031}
          />
          <mesh
            name="Leaf_301"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_301.geometry}
            material={materials.Material}
            position={[-0.289, -2.811, 0.434]}
            rotation={[3.109, -0.017, 0.776]}
            scale={0.02}
          />
          <mesh
            name="Leaf_302"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_302.geometry}
            material={materials.Material}
            position={[-0.285, -2.812, 0.417]}
            rotation={[0.721, -1.067, 2.979]}
            scale={0.035}
          />
          <mesh
            name="Leaf_303"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_303.geometry}
            material={materials.Material}
            position={[-0.29, -2.82, 0.448]}
            rotation={[-2.858, -0.905, 2.056]}
            scale={0.024}
          />
          <mesh
            name="Leaf_304"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_304.geometry}
            material={materials.Material}
            position={[-0.306, -2.819, 0.469]}
            rotation={[0.733, 0.333, -2.596]}
            scale={0.034}
          />
          <mesh
            name="Leaf_305"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_305.geometry}
            material={materials.Material}
            position={[-0.299, -2.821, 0.457]}
            rotation={[1.739, 1.102, -2.275]}
            scale={0.036}
          />
          <mesh
            name="Leaf_306"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_306.geometry}
            material={materials.Material}
            position={[-0.314, -2.825, 0.51]}
            rotation={[-2.684, 0.948, -2.605]}
            scale={0.025}
          />
          <mesh
            name="Leaf_307"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_307.geometry}
            material={materials.Material}
            position={[-0.349, -2.831, 0.61]}
            rotation={[-1.938, -0.473, -0.249]}
            scale={0.025}
          />
          <mesh
            name="Leaf_308"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_308.geometry}
            material={materials.Material}
            position={[-0.383, -2.83, 0.672]}
            rotation={[1.822, -0.506, -0.437]}
            scale={0.026}
          />
          <mesh
            name="Leaf_309"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_309.geometry}
            material={materials.Material}
            position={[-0.4, -2.834, 0.707]}
            rotation={[0.646, 0.532, 2.843]}
            scale={0.033}
          />
          <mesh
            name="Leaf_310"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_310.geometry}
            material={materials.Material}
            position={[-0.385, -2.839, 0.693]}
            rotation={[-0.348, 0.669, -1.201]}
            scale={0.036}
          />
          <mesh
            name="Leaf_311"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_311.geometry}
            material={materials.Material}
            position={[-0.404, -2.832, 0.726]}
            rotation={[-0.476, -0.349, -3.034]}
            scale={0.021}
          />
          <mesh
            name="Leaf_312"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_312.geometry}
            material={materials.Material}
            position={[-0.42, -2.841, 0.772]}
            rotation={[2.014, -1.386, -2.964]}
            scale={0.029}
          />
          <mesh
            name="Leaf_313"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_313.geometry}
            material={materials.Material}
            position={[-0.439, -2.836, 0.815]}
            rotation={[3.013, 0.166, 0.823]}
            scale={0.031}
          />
          <mesh
            name="Leaf_314"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_314.geometry}
            material={materials.Material}
            position={[-0.428, -2.842, 0.791]}
            rotation={[-2.53, 1.383, 2.773]}
            scale={0.032}
          />
          <mesh
            name="Leaf_315"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_315.geometry}
            material={materials.Material}
            position={[-0.431, -2.845, 0.937]}
            rotation={[-2.62, 0.101, -0.762]}
            scale={0.019}
          />
          <mesh
            name="Leaf_316"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_316.geometry}
            material={materials.Material}
            position={[-0.433, -2.851, 0.92]}
            rotation={[1.538, -0.624, -1.656]}
            scale={0.031}
          />
          <mesh
            name="Leaf_317"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_317.geometry}
            material={materials.Material}
            position={[-0.42, -2.853, 0.946]}
            rotation={[-1.97, -0.354, 2.8]}
            scale={0.034}
          />
          <mesh
            name="Leaf_318"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_318.geometry}
            material={materials.Material}
            position={[-0.341, -2.851, 0.983]}
            rotation={[1.986, -0.117, -0.768]}
            scale={0.023}
          />
          <mesh
            name="Leaf_319"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_319.geometry}
            material={materials.Material}
            position={[-0.359, -2.846, 0.983]}
            rotation={[-1.283, -0.354, -0.26]}
            scale={0.026}
          />
          <mesh
            name="Leaf_320"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_320.geometry}
            material={materials.Material}
            position={[-0.326, -2.847, 0.993]}
            rotation={[1.79, -0.089, 1.935]}
            scale={0.029}
          />
          <mesh
            name="Leaf_321"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_321.geometry}
            material={materials.Material}
            position={[-0.284, -2.855, 1.002]}
            rotation={[0.192, -0.393, -0.915]}
            scale={0.031}
          />
          <mesh
            name="Leaf_322"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_322.geometry}
            material={materials.Material}
            position={[-0.239, -2.847, 0.997]}
            rotation={[-2.219, -0.092, -2.843]}
            scale={0.027}
          />
          <mesh
            name="Leaf_323"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_323.geometry}
            material={materials.Material}
            position={[-0.264, -2.849, 1.001]}
            rotation={[2.501, 0.37, -0.39]}
            scale={0.037}
          />
          <mesh
            name="Leaf_324"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_324.geometry}
            material={materials.Material}
            position={[-0.217, -2.857, 0.998]}
            rotation={[-0.931, 0.275, 3.056]}
            scale={0.025}
          />
          <mesh
            name="Leaf_325"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_325.geometry}
            material={materials.Material}
            position={[-0.171, -2.85, 0.984]}
            rotation={[1.176, 0.536, -2.763]}
            scale={0.024}
          />
          <mesh
            name="Leaf_326"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_326.geometry}
            material={materials.Material}
            position={[-0.196, -2.85, 0.998]}
            rotation={[-1.794, 0.61, -0.098]}
            scale={0.026}
          />
          <mesh
            name="Leaf_327"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_327.geometry}
            material={materials.Material}
            position={[-0.077, -2.845, 0.963]}
            rotation={[0.53, 0.295, -1.872]}
            scale={0.02}
          />
          <mesh
            name="Leaf_328"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_328.geometry}
            material={materials.Material}
            position={[-0.034, -2.843, 0.934]}
            rotation={[1.456, -0.292, 2.877]}
            scale={0.022}
          />
          <mesh
            name="Leaf_329"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_329.geometry}
            material={materials.Material}
            position={[-0.057, -2.845, 0.953]}
            rotation={[-2.71, 0.121, 1.735]}
            scale={0.03}
          />
          <mesh
            name="Leaf_330"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_330.geometry}
            material={materials.Material}
            position={[-0.009, -2.844, 0.929]}
            rotation={[-2.038, 0.34, 0.08]}
            scale={0.028}
          />
          <mesh
            name="Leaf_331"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_331.geometry}
            material={materials.Material}
            position={[-0.031, -2.851, 0.939]}
            rotation={[0.843, -0.377, 3.06]}
            scale={0.036}
          />
          <mesh
            name="Leaf_332"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_332.geometry}
            material={materials.Material}
            position={[-0.06, -2.85, 0.946]}
            rotation={[-1.911, -1.243, 0.614]}
            scale={0.021}
          />
          <mesh
            name="Leaf_333"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_333.geometry}
            material={materials.Material}
            position={[0.051, -2.837, 0.881]}
            rotation={[0.343, -0.039, 1.759]}
            scale={0.024}
          />
          <mesh
            name="Leaf_334"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_334.geometry}
            material={materials.Material}
            position={[0.033, -2.844, 0.897]}
            rotation={[3.014, 1.152, 2.862]}
            scale={0.025}
          />
          <mesh
            name="Leaf_335"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_335.geometry}
            material={materials.Material}
            position={[0.006, -2.848, 0.909]}
            rotation={[2.419, 0.185, 0.328]}
            scale={0.033}
          />
          <mesh
            name="Leaf_336"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_336.geometry}
            material={materials.Material}
            position={[0.046, -2.843, 0.875]}
            rotation={[-2.774, -0.026, 1.594]}
            scale={0.027}
          />
          <mesh
            name="Leaf_337"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_337.geometry}
            material={materials.Material}
            position={[0.081, -2.837, 0.836]}
            rotation={[-1.398, 0.2, 2.728]}
            scale={0.025}
          />
          <mesh
            name="Leaf_338"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_338.geometry}
            material={materials.Material}
            position={[0.111, -2.828, 0.802]}
            rotation={[1.612, 0.327, -1.817]}
            scale={0.026}
          />
          <mesh
            name="Leaf_339"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_339.geometry}
            material={materials.Material}
            position={[0.141, -2.824, 0.759]}
            rotation={[0.202, -0.211, 0.695]}
            scale={0.027}
          />
          <mesh
            name="Leaf_340"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_340.geometry}
            material={materials.Material}
            position={[0.161, -2.824, 0.718]}
            rotation={[0.065, -0.173, 2.035]}
            scale={0.032}
          />
          <mesh
            name="Leaf_341"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_341.geometry}
            material={materials.Material}
            position={[0.156, -2.829, 0.744]}
            rotation={[-1.763, 0.376, -2.493]}
            scale={0.03}
          />
          <mesh
            name="Leaf_342"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_342.geometry}
            material={materials.Material}
            position={[0.177, -2.831, 0.702]}
            rotation={[2.403, -0.03, 0.817]}
            scale={0.023}
          />
          <mesh
            name="Leaf_343"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_343.geometry}
            material={materials.Material}
            position={[0.162, -2.833, 0.718]}
            rotation={[-1.752, -1.222, -0.741]}
            scale={0.033}
          />
          <mesh
            name="Leaf_344"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_344.geometry}
            material={materials.Material}
            position={[0.149, -2.832, 0.74]}
            rotation={[0.4, -1.064, 1.501]}
            scale={0.038}
          />
          <mesh
            name="Leaf_345"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_345.geometry}
            material={materials.Material}
            position={[0.195, -2.831, 0.644]}
            rotation={[1.407, 0.313, 2.791]}
            scale={0.026}
          />
          <mesh
            name="Leaf_346"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_346.geometry}
            material={materials.Material}
            position={[0.217, -2.836, 0.611]}
            rotation={[-1.252, 1.009, 2.448]}
            scale={0.036}
          />
          <mesh
            name="Leaf_347"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_347.geometry}
            material={materials.Material}
            position={[0.236, -2.842, 0.526]}
            rotation={[1.311, 0.969, 2.134]}
            scale={0.02}
          />
          <mesh
            name="Leaf_348"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_348.geometry}
            material={materials.Material}
            position={[0.234, -2.855, 0.491]}
            rotation={[-0.713, -0.374, -0.869]}
            scale={0.021}
          />
          <mesh
            name="Leaf_349"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_349.geometry}
            material={materials.Material}
            position={[0.231, -2.849, 0.506]}
            rotation={[0.893, -0.213, 2.379]}
            scale={0.028}
          />
          <mesh
            name="Leaf_350"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_350.geometry}
            material={materials.Material}
            position={[0.239, -2.848, 0.475]}
            rotation={[-1.202, 0.591, 2.91]}
            scale={0.03}
          />
          <mesh
            name="Leaf_351"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_351.geometry}
            material={materials.Material}
            position={[0.233, -2.86, 0.439]}
            rotation={[-0.538, 0.428, -1.881]}
            scale={0.022}
          />
          <mesh
            name="Leaf_352"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_352.geometry}
            material={materials.Material}
            position={[0.233, -2.856, 0.455]}
            rotation={[1.714, 0.089, 2.384]}
            scale={0.034}
          />
          <mesh
            name="Leaf_353"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_353.geometry}
            material={materials.Material}
            position={[0.234, -2.863, 0.424]}
            rotation={[-1.68, -0.181, 1]}
            scale={0.022}
          />
          <mesh
            name="Leaf_354"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_354.geometry}
            material={materials.Material}
            position={[0.229, -2.865, 0.387]}
            rotation={[1.289, -0.439, -3.036]}
            scale={0.033}
          />
          <mesh
            name="Leaf_355"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_355.geometry}
            material={materials.Material}
            position={[0.219, -2.862, 0.289]}
            rotation={[-0.246, -0.922, 1.017]}
            scale={0.038}
          />
          <mesh
            name="Leaf_356"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_356.geometry}
            material={materials.Material}
            position={[0.202, -2.86, 0.254]}
            rotation={[0.175, 0.13, 0.874]}
            scale={0.035}
          />
          <mesh
            name="Leaf_357"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_357.geometry}
            material={materials.Material}
            position={[0.196, -2.862, 0.206]}
            rotation={[-0.509, 0.88, -2.352]}
            scale={0.034}
          />
          <mesh
            name="Leaf_358"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_358.geometry}
            material={materials.Material}
            position={[0.201, -2.865, 0.227]}
            rotation={[-0.659, -0.523, 3.095]}
            scale={0.037}
          />
          <mesh
            name="Leaf_359"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_359.geometry}
            material={materials.Material}
            position={[0.185, -2.851, 0.188]}
            rotation={[1.812, -1.118, -1.34]}
            scale={0.019}
          />
          <mesh
            name="Leaf_360"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_360.geometry}
            material={materials.Material}
            position={[0.174, -2.843, 0.138]}
            rotation={[2.782, 0.279, 1.549]}
            scale={0.03}
          />
          <mesh
            name="Leaf_361"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_361.geometry}
            material={materials.Material}
            position={[0.153, -2.832, 0.096]}
            rotation={[-1.048, 1.102, 0.172]}
            scale={0.03}
          />
          <mesh
            name="Leaf_362"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_362.geometry}
            material={materials.Material}
            position={[0.138, -2.823, 0.06]}
            rotation={[-0.246, 0.027, 0.788]}
            scale={0.026}
          />
          <mesh
            name="Leaf_363"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_363.geometry}
            material={materials.Material}
            position={[0.129, -2.811, 0.024]}
            rotation={[1.128, -0.371, 1.691]}
            scale={0.031}
          />
          <mesh
            name="Leaf_364"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_364.geometry}
            material={materials.Material}
            position={[0.137, -2.819, 0.037]}
            rotation={[-2.725, 0.246, -0.547]}
            scale={0.037}
          />
          <mesh
            name="Leaf_365"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_365.geometry}
            material={materials.Material}
            position={[0.138, -2.83, 0.058]}
            rotation={[-2.162, 0.225, -0.018]}
            scale={0.034}
          />
          <mesh
            name="Leaf_366"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_366.geometry}
            material={materials.Material}
            position={[0.104, -2.801, -0.014]}
            rotation={[0.558, -0.581, -1.313]}
            scale={0.026}
          />
          <mesh
            name="Leaf_367"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_367.geometry}
            material={materials.Material}
            position={[0.097, -2.782, -0.032]}
            rotation={[0.729, 0.065, 2.766]}
            scale={0.036}
          />
          <mesh
            name="Leaf_368"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_368.geometry}
            material={materials.Material}
            position={[0.083, -2.771, -0.046]}
            rotation={[-2.584, 0.844, 0.289]}
            scale={0.036}
          />
          <mesh
            name="Leaf_369"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_369.geometry}
            material={materials.Material}
            position={[0.056, -2.722, -0.057]}
            rotation={[2.55, 0.334, -2.656]}
            scale={0.019}
          />
          <mesh
            name="Leaf_370"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_370.geometry}
            material={materials.Material}
            position={[0.054, -2.736, -0.058]}
            rotation={[-3.036, -0.266, 2.145]}
            scale={0.036}
          />
          <mesh
            name="Leaf_371"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_371.geometry}
            material={materials.Material}
            position={[0.06, -2.747, -0.054]}
            rotation={[-1.288, -0.16, 2.528]}
            scale={0.036}
          />
          <mesh
            name="Leaf_372"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_372.geometry}
            material={materials.Material}
            position={[0.033, -2.694, -0.056]}
            rotation={[0.21, 0.164, 1.202]}
            scale={0.031}
          />
          <mesh
            name="Leaf_373"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_373.geometry}
            material={materials.Material}
            position={[0.046, -2.701, -0.06]}
            rotation={[2.431, -0.303, 2.639]}
            scale={0.03}
          />
          <mesh
            name="Leaf_374"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_374.geometry}
            material={materials.Material}
            position={[0.043, -2.718, -0.06]}
            rotation={[2.551, -0.498, 1.596]}
            scale={0.037}
          />
          <mesh
            name="Leaf_375"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_375.geometry}
            material={materials.Material}
            position={[0.022, -2.654, -0.064]}
            rotation={[-2.525, 0.276, 1.069]}
            scale={0.033}
          />
          <mesh
            name="Leaf_376"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_376.geometry}
            material={materials.Material}
            position={[0.022, -2.668, -0.062]}
            rotation={[-2.127, 0.524, 1.605]}
            scale={0.026}
          />
          <mesh
            name="Leaf_377"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_377.geometry}
            material={materials.Material}
            position={[0.021, -2.64, -0.059]}
            rotation={[0.45, -0.059, 2.624]}
            scale={0.029}
          />
          <mesh
            name="Leaf_378"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_378.geometry}
            material={materials.Material}
            position={[-0.025, -2.498, -0.063]}
            rotation={[2.985, -1.06, -2.943]}
            scale={0.022}
          />
          <mesh
            name="Leaf_379"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_379.geometry}
            material={materials.Material}
            position={[-0.026, -2.45, -0.075]}
            rotation={[2.627, -0.328, 1.031]}
            scale={0.022}
          />
          <mesh
            name="Leaf_380"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_380.geometry}
            material={materials.Material}
            position={[-0.038, -2.404, -0.076]}
            rotation={[-1.836, 0.94, 0.009]}
            scale={0.031}
          />
          <mesh
            name="Leaf_381"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_381.geometry}
            material={materials.Material}
            position={[-0.043, -2.347, -0.086]}
            rotation={[1.98, 0.487, -0.447]}
            scale={0.023}
          />
          <mesh
            name="Leaf_382"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_382.geometry}
            material={materials.Material}
            position={[-0.044, -2.374, -0.09]}
            rotation={[-2.279, -0.039, -1.219]}
            scale={0.035}
          />
          <mesh
            name="Leaf_383"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_383.geometry}
            material={materials.Material}
            position={[-0.043, -2.321, -0.091]}
            rotation={[-0.486, -1.249, -1.042]}
            scale={0.033}
          />
          <mesh
            name="Leaf_384"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_384.geometry}
            material={materials.Material}
            position={[-0.055, -2.157, -0.103]}
            rotation={[3.012, -0.163, -2.981]}
            scale={0.028}
          />
          <mesh
            name="Leaf_385"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_385.geometry}
            material={materials.Material}
            position={[-0.053, -2.189, -0.101]}
            rotation={[0.255, 1.102, 2.535]}
            scale={0.037}
          />
          <mesh
            name="Leaf_386"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_386.geometry}
            material={materials.Material}
            position={[-0.051, -2.227, -0.098]}
            rotation={[2.985, -1.2, 2.388]}
            scale={0.019}
          />
          <mesh
            name="Leaf_387"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_387.geometry}
            material={materials.Material}
            position={[-0.051, -2.157, -0.104]}
            rotation={[2.939, -0.152, 2.58]}
            scale={0.036}
          />
          <mesh
            name="Leaf_388"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_388.geometry}
            material={materials.Material}
            position={[-0.049, -2.189, -0.103]}
            rotation={[-1.847, 1.162, 2.476]}
            scale={0.023}
          />
          <mesh
            name="Leaf_389"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_389.geometry}
            material={materials.Material}
            position={[-0.048, -2.228, -0.102]}
            rotation={[-1.965, -0.063, -2.574]}
            scale={0.02}
          />
          <mesh
            name="Leaf_390"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_390.geometry}
            material={materials.Material}
            position={[-0.05, -2.157, -0.109]}
            rotation={[0.298, 0.323, 2.638]}
            scale={0.036}
          />
          <mesh
            name="Leaf_391"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_391.geometry}
            material={materials.Material}
            position={[-0.056, -2.19, -0.109]}
            rotation={[-2.935, 0.406, -1.68]}
            scale={0.028}
          />
          <mesh
            name="Leaf_392"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_392.geometry}
            material={materials.Material}
            position={[-0.058, -2.126, -0.105]}
            rotation={[-0.375, 0.007, -2.367]}
            scale={0.035}
          />
          <mesh
            name="Leaf_393"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_393.geometry}
            material={materials.Material}
            position={[-0.05, -2.051, -0.11]}
            rotation={[1.419, 0.174, -0.659]}
            scale={0.021}
          />
          <mesh
            name="Leaf_394"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_394.geometry}
            material={materials.Material}
            position={[-0.058, -2.085, -0.107]}
            rotation={[-2.937, -0.192, 2.099]}
            scale={0.02}
          />
          <mesh
            name="Leaf_395"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_395.geometry}
            material={materials.Material}
            position={[-0.055, -2.019, -0.106]}
            rotation={[2.693, -0.129, -1.027]}
            scale={0.031}
          />
          <mesh
            name="Leaf_396"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_396.geometry}
            material={materials.Material}
            position={[-0.047, -1.941, -0.11]}
            rotation={[-1.584, 0.216, -0.433]}
            scale={0.03}
          />
          <mesh
            name="Leaf_397"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_397.geometry}
            material={materials.Material}
            position={[-0.051, -1.976, -0.115]}
            rotation={[0.673, -0.861, 1.995]}
            scale={0.035}
          />
          <mesh
            name="Leaf_398"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_398.geometry}
            material={materials.Material}
            position={[-0.053, -2.019, -0.116]}
            rotation={[-2.458, -0.794, -0.742]}
            scale={0.022}
          />
          <mesh
            name="Leaf_399"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_399.geometry}
            material={materials.Material}
            position={[-0.054, -1.941, -0.116]}
            rotation={[0.857, 0.755, -2.778]}
            scale={0.037}
          />
          <mesh
            name="Leaf_400"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_400.geometry}
            material={materials.Material}
            position={[-0.054, -1.863, -0.112]}
            rotation={[2.607, 0.897, 0.964]}
            scale={0.029}
          />
          <mesh
            name="Leaf_401"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_401.geometry}
            material={materials.Material}
            position={[-0.056, -1.907, -0.109]}
            rotation={[2.968, 0.283, -1.474]}
            scale={0.027}
          />
          <mesh
            name="Leaf_402"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_402.geometry}
            material={materials.Material}
            position={[-0.047, -1.714, -0.102]}
            rotation={[-2.604, -0.507, 2.433]}
            scale={0.021}
          />
          <mesh
            name="Leaf_403"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_403.geometry}
            material={materials.Material}
            position={[-0.048, -1.75, -0.102]}
            rotation={[-0.765, -0.177, -2.122]}
            scale={0.03}
          />
          <mesh
            name="Leaf_404"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_404.geometry}
            material={materials.Material}
            position={[-0.048, -1.794, -0.104]}
            rotation={[2.137, 0.564, -1.054]}
            scale={0.029}
          />
          <mesh
            name="Leaf_405"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_405.geometry}
            material={materials.Material}
            position={[-0.041, -1.714, -0.102]}
            rotation={[-0.924, 0.24, -2.433]}
            scale={0.035}
          />
          <mesh
            name="Leaf_406"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_406.geometry}
            material={materials.Material}
            position={[-0.037, -1.638, -0.105]}
            rotation={[2.763, -0.25, -2.132]}
            scale={0.026}
          />
          <mesh
            name="Leaf_407"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_407.geometry}
            material={materials.Material}
            position={[-0.044, -1.68, -0.109]}
            rotation={[1.876, -0.192, 1]}
            scale={0.023}
          />
          <mesh
            name="Leaf_408"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_408.geometry}
            material={materials.Material}
            position={[-0.043, -1.602, -0.104]}
            rotation={[-1.824, 0.194, -1.735]}
            scale={0.036}
          />
          <mesh
            name="Leaf_409"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_409.geometry}
            material={materials.Material}
            position={[-0.046, -1.637, -0.102]}
            rotation={[2.293, -0.161, 2.239]}
            scale={0.034}
          />
          <mesh
            name="Leaf_410"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_410.geometry}
            material={materials.Material}
            position={[-0.047, -1.68, -0.103]}
            rotation={[-1.161, -0.439, -0.93]}
            scale={0.021}
          />
          <mesh
            name="Leaf_411"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_411.geometry}
            material={materials.Material}
            position={[-0.032, -1.494, -0.092]}
            rotation={[0.672, -0.08, -2.341]}
            scale={0.036}
          />
          <mesh
            name="Leaf_412"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_412.geometry}
            material={materials.Material}
            position={[-0.032, -1.528, -0.097]}
            rotation={[1.582, 0.142, 1.037]}
            scale={0.026}
          />
          <mesh
            name="Leaf_413"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_413.geometry}
            material={materials.Material}
            position={[-0.034, -1.57, -0.098]}
            rotation={[-1.476, 0.195, 0.524]}
            scale={0.038}
          />
          <mesh
            name="Leaf_414"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_414.geometry}
            material={materials.Material}
            position={[-0.035, -1.493, -0.1]}
            rotation={[0.973, -0.33, -2.691]}
            scale={0.032}
          />
          <mesh
            name="Leaf_415"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_415.geometry}
            material={materials.Material}
            position={[-0.036, -1.424, -0.087]}
            rotation={[-0.597, -0.899, -1.355]}
            scale={0.03}
          />
          <mesh
            name="Leaf_416"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_416.geometry}
            material={materials.Material}
            position={[-0.036, -1.463, -0.089]}
            rotation={[-0.186, -0.992, -2.323]}
            scale={0.025}
          />
          <mesh
            name="Leaf_417"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_417.geometry}
            material={materials.Material}
            position={[-0.028, -1.391, -0.088]}
            rotation={[-2.383, 0.115, 0.302]}
            scale={0.036}
          />
          <mesh
            name="Leaf_418"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_418.geometry}
            material={materials.Material}
            position={[-0.03, -1.423, -0.094]}
            rotation={[-2.644, 1.191, 2.443]}
            scale={0.02}
          />
          <mesh
            name="Leaf_419"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_419.geometry}
            material={materials.Material}
            position={[-0.032, -1.462, -0.097]}
            rotation={[0.204, 0.797, -0.934]}
            scale={0.035}
          />
          <mesh
            name="Leaf_420"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_420.geometry}
            material={materials.Material}
            position={[-0.03, -1.391, -0.093]}
            rotation={[-2.126, -0.078, 0.261]}
            scale={0.027}
          />
          <mesh
            name="Leaf_421"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_421.geometry}
            material={materials.Material}
            position={[-0.038, -1.423, -0.093]}
            rotation={[0.896, 0.081, 1.764]}
            scale={0.019}
          />
          <mesh
            name="Leaf_422"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_422.geometry}
            material={materials.Material}
            position={[-0.039, -1.462, -0.096]}
            rotation={[2.628, -0.558, 2.54]}
            scale={0.021}
          />
          <mesh
            name="Leaf_423"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_423.geometry}
            material={materials.Material}
            position={[-0.034, -1.297, -0.079]}
            rotation={[-0.676, -0.146, 2.643]}
            scale={0.037}
          />
          <mesh
            name="Leaf_424"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_424.geometry}
            material={materials.Material}
            position={[-0.028, -1.326, -0.083]}
            rotation={[1.964, 0.739, 1.422]}
            scale={0.033}
          />
          <mesh
            name="Leaf_425"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_425.geometry}
            material={materials.Material}
            position={[-0.037, -1.362, -0.091]}
            rotation={[-0.657, -0.037, -0.604]}
            scale={0.037}
          />
          <mesh
            name="Leaf_426"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_426.geometry}
            material={materials.Material}
            position={[-0.039, -1.211, -0.082]}
            rotation={[1.117, -0.147, -0.68]}
            scale={0.021}
          />
          <mesh
            name="Leaf_427"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_427.geometry}
            material={materials.Material}
            position={[-0.032, -1.162, -0.073]}
            rotation={[-2.17, 0.082, 0.494]}
            scale={0.032}
          />
          <mesh
            name="Leaf_428"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_428.geometry}
            material={materials.Material}
            position={[-0.037, -1.188, -0.081]}
            rotation={[2.177, -0.529, 2.553]}
            scale={0.035}
          />
          <mesh
            name="Leaf_429"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_429.geometry}
            material={materials.Material}
            position={[-0.032, -1.081, -0.061]}
            rotation={[-2.55, -0.086, -1.457]}
            scale={0.025}
          />
          <mesh
            name="Leaf_430"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_430.geometry}
            material={materials.Material}
            position={[-0.029, -1.047, -0.059]}
            rotation={[2.946, 0.194, 0.614]}
            scale={0.036}
          />
          <mesh
            name="Leaf_431"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_431.geometry}
            material={materials.Material}
            position={[-0.032, -1.019, -0.052]}
            rotation={[-1.452, -0.538, -0.105]}
            scale={0.034}
          />
          <mesh
            name="Leaf_432"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_432.geometry}
            material={materials.Material}
            position={[-0.03, -0.994, -0.035]}
            rotation={[0.885, -0.496, -0.047]}
            scale={0.032}
          />
          <mesh
            name="Leaf_433"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_433.geometry}
            material={materials.Material}
            position={[-0.016, -0.972, -0.026]}
            rotation={[-2.373, 0.178, 2.331]}
            scale={0.03}
          />
          <mesh
            name="Leaf_434"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_434.geometry}
            material={materials.Material}
            position={[-0.014, -0.957, -0.007]}
            rotation={[1.082, 0.325, -2.721]}
            scale={0.03}
          />
          <mesh
            name="Leaf_435"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_435.geometry}
            material={materials.Material}
            position={[-0.007, -0.938, 0.008]}
            rotation={[-1.96, 0.093, 2.859]}
            scale={0.025}
          />
          <mesh
            name="Leaf_436"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_436.geometry}
            material={materials.Material}
            position={[-0.008, -0.946, -0.001]}
            rotation={[1.952, 0.256, 1.559]}
            scale={0.02}
          />
          <mesh
            name="Leaf_437"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_437.geometry}
            material={materials.Material}
            position={[-0.006, -0.931, 0.016]}
            rotation={[-0.75, -0.255, 0.188]}
            scale={0.03}
          />
          <mesh
            name="Leaf_438"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_438.geometry}
            material={materials.Material}
            position={[0.009, -0.885, 0.063]}
            rotation={[-2.857, 0.16, 0.026]}
            scale={0.037}
          />
          <mesh
            name="Leaf_439"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_439.geometry}
            material={materials.Material}
            position={[-0.002, -0.893, 0.055]}
            rotation={[1.72, 0.738, 0.529]}
            scale={0.024}
          />
          <mesh
            name="Leaf_440"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_440.geometry}
            material={materials.Material}
            position={[0.01, -0.876, 0.073]}
            rotation={[0.503, 0.174, -0.007]}
            scale={0.03}
          />
          <mesh
            name="Leaf_441"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_441.geometry}
            material={materials.Material}
            position={[0.014, -0.819, 0.136]}
            rotation={[-1.577, -0.101, -0.501]}
            scale={0.037}
          />
          <mesh
            name="Leaf_442"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_442.geometry}
            material={materials.Material}
            position={[0.004, -0.831, 0.124]}
            rotation={[-3.017, 0.002, 0.77]}
            scale={0.036}
          />
          <mesh
            name="Leaf_443"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_443.geometry}
            material={materials.Material}
            position={[0.004, -0.845, 0.11]}
            rotation={[0.512, -0.148, 0.423]}
            scale={0.025}
          />
          <mesh
            name="Leaf_444"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_444.geometry}
            material={materials.Material}
            position={[0.001, -0.779, 0.18]}
            rotation={[-2.777, -0.568, 1.351]}
            scale={0.037}
          />
          <mesh
            name="Leaf_445"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_445.geometry}
            material={materials.Material}
            position={[-0.001, -0.746, 0.215]}
            rotation={[1.472, -0.501, 0.536]}
            scale={0.027}
          />
          <mesh
            name="Leaf_446"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_446.geometry}
            material={materials.Material}
            position={[0.005, -0.766, 0.197]}
            rotation={[0.817, -0.061, -1.824]}
            scale={0.034}
          />
          <mesh
            name="Leaf_447"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_447.geometry}
            material={materials.Material}
            position={[-0.007, -0.556, 0.327]}
            rotation={[-1.001, 0.083, -2.251]}
            scale={0.023}
          />
          <mesh
            name="Leaf_448"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_448.geometry}
            material={materials.Material}
            position={[-0.012, -0.574, 0.322]}
            rotation={[0.72, -0.537, 0.581]}
            scale={0.031}
          />
          <mesh
            name="Leaf_449"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_449.geometry}
            material={materials.Material}
            position={[-0.013, -0.594, 0.312]}
            rotation={[-2.521, 0.429, 0.442]}
            scale={0.032}
          />
          <mesh
            name="Leaf_450"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_450.geometry}
            material={materials.Material}
            position={[0.006, -0.505, 0.35]}
            rotation={[1.711, 1.069, -0.434]}
            scale={0.027}
          />
          <mesh
            name="Leaf_451"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_451.geometry}
            material={materials.Material}
            position={[0.009, -0.467, 0.361]}
            rotation={[-2.756, 0.006, -2.963]}
            scale={0.023}
          />
          <mesh
            name="Leaf_452"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_452.geometry}
            material={materials.Material}
            position={[0.004, -0.488, 0.357]}
            rotation={[2.244, -0.28, -0.035]}
            scale={0.03}
          />
          <mesh
            name="Leaf_453"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_453.geometry}
            material={materials.Material}
            position={[0.017, -0.449, 0.356]}
            rotation={[-2.19, 0.307, -1.84]}
            scale={0.034}
          />
          <mesh
            name="Leaf_454"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_454.geometry}
            material={materials.Material}
            position={[0.012, -0.466, 0.352]}
            rotation={[-3.01, -0.125, -1.913]}
            scale={0.032}
          />
          <mesh
            name="Leaf_455"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_455.geometry}
            material={materials.Material}
            position={[0.006, -0.486, 0.348]}
            rotation={[-0.476, -0.452, 1.401]}
            scale={0.026}
          />
          <mesh
            name="Leaf_456"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_456.geometry}
            material={materials.Material}
            position={[0.025, -0.394, 0.369]}
            rotation={[1.591, -0.076, 2.421]}
            scale={0.021}
          />
          <mesh
            name="Leaf_457"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_457.geometry}
            material={materials.Material}
            position={[0.024, -0.412, 0.358]}
            rotation={[-1.675, -0.505, -2.577]}
            scale={0.022}
          />
          <mesh
            name="Leaf_458"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_458.geometry}
            material={materials.Material}
            position={[0.02, -0.433, 0.357]}
            rotation={[2.503, 0.274, -2.629]}
            scale={0.022}
          />
          <mesh
            name="Leaf_459"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_459.geometry}
            material={materials.Material}
            position={[0.028, -0.394, 0.359]}
            rotation={[-0.071, 0.677, -2.967]}
            scale={0.035}
          />
          <mesh
            name="Leaf_460"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_460.geometry}
            material={materials.Material}
            position={[0.036, -0.355, 0.37]}
            rotation={[-0.965, -1.007, 2.088]}
            scale={0.036}
          />
          <mesh
            name="Leaf_461"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_461.geometry}
            material={materials.Material}
            position={[0.041, -0.319, 0.369]}
            rotation={[2.987, -0.851, -2.543]}
            scale={0.026}
          />
          <mesh
            name="Leaf_462"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_462.geometry}
            material={materials.Material}
            position={[0.057, -0.279, 0.367]}
            rotation={[0.115, 0.583, -0.171]}
            scale={0.024}
          />
          <mesh
            name="Leaf_463"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_463.geometry}
            material={materials.Material}
            position={[0.053, -0.298, 0.362]}
            rotation={[1.914, 0.536, -2.394]}
            scale={0.027}
          />
          <mesh
            name="Leaf_464"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_464.geometry}
            material={materials.Material}
            position={[0.062, -0.261, 0.364]}
            rotation={[-1.515, 0.395, -0.38]}
            scale={0.024}
          />
          <mesh
            name="Leaf_465"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_465.geometry}
            material={materials.Material}
            position={[0.06, -0.216, 0.363]}
            rotation={[1.112, 0.14, -1.737]}
            scale={0.027}
          />
          <mesh
            name="Leaf_466"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_466.geometry}
            material={materials.Material}
            position={[0.076, -0.173, 0.36]}
            rotation={[-1.781, -0.206, 2.752]}
            scale={0.026}
          />
          <mesh
            name="Leaf_467"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_467.geometry}
            material={materials.Material}
            position={[0.066, -0.197, 0.357]}
            rotation={[2.034, -0.15, 1.637]}
            scale={0.036}
          />
          <mesh
            name="Leaf_468"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_468.geometry}
            material={materials.Material}
            position={[0.07, -0.151, 0.357]}
            rotation={[1.305, -1.204, 3.008]}
            scale={0.02}
          />
          <mesh
            name="Leaf_469"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_469.geometry}
            material={materials.Material}
            position={[0.079, -0.104, 0.364]}
            rotation={[-2.621, -0.802, -0.171]}
            scale={0.028}
          />
          <mesh
            name="Leaf_470"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_470.geometry}
            material={materials.Material}
            position={[0.078, -0.131, 0.357]}
            rotation={[1.178, 1.31, -0.226]}
            scale={0.02}
          />
          <mesh
            name="Leaf_471"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_471.geometry}
            material={materials.Material}
            position={[0.073, -0.081, 0.362]}
            rotation={[-2.573, 1.037, -0.258]}
            scale={0.036}
          />
          <mesh
            name="Leaf_472"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_472.geometry}
            material={materials.Material}
            position={[0.078, -0.031, 0.358]}
            rotation={[0.201, -1.247, 0.55]}
            scale={0.03}
          />
          <mesh
            name="Leaf_473"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_473.geometry}
            material={materials.Material}
            position={[0.077, -0.06, 0.357]}
            rotation={[-2.985, -0.172, 2.089]}
            scale={0.022}
          />
          <mesh
            name="Leaf_474"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_474.geometry}
            material={materials.Material}
            position={[0.077, 0.062, 0.369]}
            rotation={[1.887, 1.206, -1.964]}
            scale={0.03}
          />
          <mesh
            name="Leaf_475"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_475.geometry}
            material={materials.Material}
            position={[0.079, 0.04, 0.369]}
            rotation={[-1.221, 0.084, -0.881]}
            scale={0.032}
          />
          <mesh
            name="Leaf_476"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_476.geometry}
            material={materials.Material}
            position={[0.08, 0.014, 0.361]}
            rotation={[1.056, 0.39, 1.328]}
            scale={0.037}
          />
          <mesh
            name="Leaf_477"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_477.geometry}
            material={materials.Material}
            position={[0.083, 0.115, 0.356]}
            rotation={[-3.124, 0.182, 0.54]}
            scale={0.031}
          />
          <mesh
            name="Leaf_478"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_478.geometry}
            material={materials.Material}
            position={[0.083, 0.097, 0.357]}
            rotation={[-1.559, -0.75, -0.204]}
            scale={0.027}
          />
          <mesh
            name="Leaf_479"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_479.geometry}
            material={materials.Material}
            position={[0.073, 0.078, 0.359]}
            rotation={[0.914, -0.749, 0.995]}
            scale={0.026}
          />
          <mesh
            name="Leaf_480"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_480.geometry}
            material={materials.Material}
            position={[0.093, 0.148, 0.331]}
            rotation={[-2.842, -0.717, 0.137]}
            scale={0.032}
          />
          <mesh
            name="Leaf_481"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_481.geometry}
            material={materials.Material}
            position={[0.092, 0.166, 0.309]}
            rotation={[2.45, 0.225, 0.776]}
            scale={0.024}
          />
          <mesh
            name="Leaf_482"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_482.geometry}
            material={materials.Material}
            position={[0.106, 0.168, 0.288]}
            rotation={[0.395, 1.057, -2.881]}
            scale={0.022}
          />
          <mesh
            name="Leaf_483"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_483.geometry}
            material={materials.Material}
            position={[0.122, 0.171, 0.216]}
            rotation={[0.143, 0.466, 2.002]}
            scale={0.026}
          />
          <mesh
            name="Leaf_484"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_484.geometry}
            material={materials.Material}
            position={[0.128, 0.157, 0.186]}
            rotation={[0.412, -0.129, 2.739]}
            scale={0.034}
          />
          <mesh
            name="Leaf_485"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_485.geometry}
            material={materials.Material}
            position={[0.124, 0.165, 0.203]}
            rotation={[-0.279, 0.068, -3.111]}
            scale={0.029}
          />
          <mesh
            name="Leaf_486"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_486.geometry}
            material={materials.Material}
            position={[0.147, 0.126, 0.126]}
            rotation={[0.16, 0.097, 1.609]}
            scale={0.029}
          />
          <mesh
            name="Leaf_487"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_487.geometry}
            material={materials.Material}
            position={[0.15, 0.103, 0.096]}
            rotation={[0.21, 0.167, 3.058]}
            scale={0.026}
          />
          <mesh
            name="Leaf_488"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_488.geometry}
            material={materials.Material}
            position={[0.141, 0.114, 0.114]}
            rotation={[-0.249, 0.242, 0.003]}
            scale={0.037}
          />
          <mesh
            name="Leaf_489"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_489.geometry}
            material={materials.Material}
            position={[0.146, 0.051, 0.044]}
            rotation={[-1.302, -0.27, 0.184]}
            scale={0.03}
          />
          <mesh
            name="Leaf_490"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_490.geometry}
            material={materials.Material}
            position={[0.15, 0.064, 0.056]}
            rotation={[1.141, -0.043, -2.564]}
            scale={0.028}
          />
          <mesh
            name="Leaf_491"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_491.geometry}
            material={materials.Material}
            position={[0.153, 0.076, 0.075]}
            rotation={[-1.571, 0.377, -0.102]}
            scale={0.022}
          />
          <mesh
            name="Leaf_492"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_492.geometry}
            material={materials.Material}
            position={[0.151, 0.046, 0.049]}
            rotation={[0.558, -0.254, -1.459]}
            scale={0.026}
          />
          <mesh
            name="Leaf_493"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_493.geometry}
            material={materials.Material}
            position={[0.144, 0.02, 0.021]}
            rotation={[-2.399, -0.499, -2.969]}
            scale={0.036}
          />
          <mesh
            name="Leaf_494"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_494.geometry}
            material={materials.Material}
            position={[0.147, 0.038, 0.033]}
            rotation={[1.96, -0.049, 2.834]}
            scale={0.02}
          />
          <mesh
            name="Leaf_495"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_495.geometry}
            material={materials.Material}
            position={[0.142, 0.005, 0.012]}
            rotation={[0.775, -0.541, 1.124]}
            scale={0.032}
          />
          <mesh
            name="Leaf_496"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_496.geometry}
            material={materials.Material}
            position={[0.138, 0.02, 0.024]}
            rotation={[-2.45, 0.191, -1.005]}
            scale={0.032}
          />
          <mesh
            name="Leaf_497"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_497.geometry}
            material={materials.Material}
            position={[0.136, -0.008, 0.003]}
            rotation={[1.669, 0.888, 2.462]}
            scale={0.027}
          />
          <mesh
            name="Leaf_498"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_498.geometry}
            material={materials.Material}
            position={[0.12, -0.044, -0.004]}
            rotation={[-2.024, 0.097, 2.747]}
            scale={0.027}
          />
          <mesh
            name="Leaf_499"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_499.geometry}
            material={materials.Material}
            position={[0.123, -0.027, 0]}
            rotation={[1.664, -0.095, 1.398]}
            scale={0.024}
          />
        </mesh>
        <mesh
          name="Leaf_500"
          castShadow
          receiveShadow
          geometry={nodes.Leaf_500.geometry}
          material={materials.Material}
          position={[3.601, 1.897, -2.653]}
          scale={0.063}
        />
        <group
          name="Cube"
          position={[-3.587, 4.977, -3.526]}
          rotation={[0, Math.PI / 4, 0]}
          scale={0.344}
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
          name="Clock"
          position={[-2.929, 2.208, -3.136]}
          rotation={[Math.PI / 2, 0, -0.615]}
          scale={0.024}
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
        <group name="Flower" position={[-3.612, 2.479, -2.766]} scale={0.03}>
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
        <mesh
          name="LedStrip"
          castShadow
          receiveShadow
          geometry={nodes.LedStrip.geometry}
          material={materials.Text}
          position={[-2.254, 1.854, -3.237]}
          rotation={[0, 0, Math.PI]}
          scale={[0.038, 0.012, 0.993]}
        />
        <mesh
          name="LedStrip002"
          castShadow
          receiveShadow
          geometry={nodes.LedStrip002.geometry}
          material={materials.Text}
          position={[2.306, 1.854, -3.236]}
          rotation={[0, 0, Math.PI]}
          scale={[0.038, 0.012, 0.993]}
        />
        <mesh
          name="LedStrip001"
          castShadow
          receiveShadow
          geometry={nodes.LedStrip001.geometry}
          material={materials.Text}
          position={[-0.036, 4.353, -3.18]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={[0.038, 0.012, 4.028]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Desk.glb");
