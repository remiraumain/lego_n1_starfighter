import { Html, useProgress } from "@react-three/drei";
import { useLoadContext } from "./loadContext";
import Image from "next/image";
import svg from "../../public/n1-mask.svg";

function Loader() {
  const { setIsLoaded } = useLoadContext();
  const { progress } = useProgress();
  if (progress === 100) {
    setIsLoaded(true);
    return null;
  }

  return (
    <Html center>
      <div className="bg-white w-screen h-screen flex justify-center items-center">
        <Image
          priority
          src={svg}
          alt="logo"
          className={`w-40 bg-gradient-to-l from-gray-600 from-[${progress}%] to-[${progress}%] to-transparent`}
        />
      </div>
    </Html>
  );
}

export default Loader;
