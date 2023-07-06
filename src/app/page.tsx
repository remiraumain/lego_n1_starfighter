"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="w-1/3 bg-slate-50">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <div className="bg-gradient-to-t from-blue-300 to-blue-400 w-full relative">
        <Canvas camera={{ position: [-5, 2, 0] }} shadows>
          <Experience />
        </Canvas>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full">
          Click and hold to drag
        </p>
      </div>
    </main>
  );
}
