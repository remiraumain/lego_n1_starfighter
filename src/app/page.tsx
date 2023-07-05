"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="w-1/3 bg-slate-50">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <div className="bg-red-400 w-full relative">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <OrbitControls />
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full hover:opacity-50">
          Click and hold to drag
        </p>
      </div>
    </main>
  );
}
