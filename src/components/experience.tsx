// import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import Base from "./base";
import Starfighter from "./starfighter";
import { Canvas, act } from "@react-three/fiber";
import Loader from "./loader";

function Experience() {
  const [active, setActive] = useState(false);
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
        {!active && <Loader />}
        <Suspense fallback={<Loader />}>
          <Starfighter />
          <Base />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Experience;
