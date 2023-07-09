"use client";
import Experience from "@/components/experience";
import { LoadContext } from "@/components/loadContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import { FcRotateToLandscape } from "react-icons/fc";
import { getOrientation, isLandscaped } from "@/components/helpers/device";

import picture from "../../public/picture.jpeg";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(true);
  useEffect(() => {
    const handleWindowResize = () => {
      getOrientation() === "landscape"
        ? setIsLandscape(true)
        : setIsLandscape(false);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  console.log(isLandscape);
  return (
    <LoadContext.Provider value={{ isLoaded, setIsLoaded }}>
      <main className="w-screen min-h-screen flex overflow-hidden ">
        {!isLandscape && (
          <div className="absolute flex flex-col gap-4 z-10 bg-white justify-center items-center text-center top-0 w-full h-full">
            <FcRotateToLandscape className="text-6xl" />
            To start the experience, please rotate your device to landscape mode
          </div>
        )}
        <div
          className={`${
            isLoaded ? "w-1/3" : "hidden"
          } bg-slate-50 h-screen overflow-y-auto no-scrollbar`}
        >
          <div className="p-4  flex flex-col gap-4 ">
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
            <p>
              The Lego n-1 Starfighter is a true marvel of miniature
              engineering. At first glance, one is immediately captivated by its
              sleek lines and elegant design. Every detail has been carefully
              thought out and reproduced with remarkable precision.
            </p>
            <p>Here is a picture of mine:</p>
            <Image
              src={picture}
              alt="Real picture of N-1 Starfighter LEGO"
              className="rounded-lg"
            />
          </div>
        </div>

        <div
          className={`${
            isLoaded ? "w-2/3" : "w-full"
          } bg-gradient-to-t from-blue-300 to-blue-400 relative h-screen`}
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
