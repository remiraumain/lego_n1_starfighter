import { Html, useProgress } from "@react-three/drei";
import { useLoadContext } from "./loadContext";
import Image from "next/image";
// import svg from "../../public/n1-mask.svg";
import png from "../../public/n1-mask.png";

function Loader() {
  const { setIsLoaded } = useLoadContext();
  const { progress } = useProgress();
  if (progress === 100) {
    setIsLoaded(true);
  }

  return (
    <Html center>
      <div className="bg-white w-screen h-screen flex justify-center items-center">
        <div className="relative w-40 h-fit">
          <Image src={png} alt="logo" className={`w-40 opacity-0`} />
          <Image
            priority
            src={png}
            alt="logo"
            className={`w-40 absolute top-0  z-20`}
          />
          <div
            className={` bg-zinc-400 absolute top-0 bottom-0 z-10`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

export default Loader;
