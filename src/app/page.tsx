"use client";
import Experience from "@/components/experience";
import { LoadContext } from "@/components/loadContext";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <LoadContext.Provider value={{ isLoaded, setIsLoaded }}>
      <main className="w-screen min-h-screen flex">
        <div className={`${isLoaded ? "w-1/3" : "w-0"} bg-slate-50`}>
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>

        <div
          className={`${
            isLoaded ? "w-2/3" : "w-full"
          } bg-gradient-to-t from-blue-300 to-blue-400 relative`}
        >
          <Experience />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full">
            Click and hold to drag
          </p>
        </div>
      </main>
    </LoadContext.Provider>
  );
}
