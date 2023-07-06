// import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Base from "./base";
import Starfighter from "./starfighter";

function Experience() {
  return (
    <>
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
    </>
  );
}

export default Experience;
