import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { ReactNode, Suspense, useRef, useState } from "react";
import Base from "./base";
import Starfighter from "./starfighter";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "./loader";

interface RigProps {
  children?: ReactNode;
}

const Rig: React.FC<RigProps> = ({ children }) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0,
      0.05
    );
  });
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
};

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
        <Suspense fallback={<Loader />}>
          <Rig>
            <Starfighter />
            <Base />
          </Rig>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Experience;
