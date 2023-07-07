"use client";
import Experience from "@/components/experience";
import { LoadContext } from "@/components/loadContext";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.svg";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <LoadContext.Provider value={{ isLoaded, setIsLoaded }}>
      <main className="w-screen min-h-screen flex sm:flex-col-reverse sm:overflow-auto overflow-hidden">
        <div
          className={`${
            isLoaded ? "w-1/3 sm:w-full" : "w-0"
          } bg-slate-50 h-screen overflow-y-auto sm:overflow-visible no-scrollbar`}
        >
          <div className="p-4  flex flex-col gap-4 sm:items-center">
            <Image
              src={logo}
              alt="logo"
              priority
              className="-rotate-12 w-40 mb-8"
            />
            <span className="px-3 py-2 text-white text-sm rounded-full w-fit bg-teal-600">
              mon premier LEGO
            </span>
            <h1 className="text-4xl font-bold flex flex-col sm:text-center">
              <span className="text-xl">The mandalorian</span>N-1 Starfighter
            </h1>
            <div className="h-screen bg-red-400 w-full" />
          </div>
        </div>

        <div
          className={`${
            isLoaded ? "w-2/3" : "w-full"
          } bg-gradient-to-t from-blue-300 to-blue-400 relative h-screen sm:h-3/5 sm:w-full`}
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
