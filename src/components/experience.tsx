// import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Base from "./base";
import Starfighter from "./starfighter";
import { Canvas } from "@react-three/fiber";

function Experience() {
  return (
    <>
      <Canvas camera={{ position: [-5, 2, 0] }} shadows>
        <directionalLight
          position={[3, 5, 3]}
          intensity={0.6}
          shadow-normalBias={0.04}
          castShadow
        />
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Starfighter />
          <Base />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Experience;
