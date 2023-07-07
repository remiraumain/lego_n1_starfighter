import { createContext, useContext } from "react";
export type LoadContent = {
  isLoaded: boolean;
  setIsLoaded: (c: boolean) => void;
};
export const LoadContext = createContext<LoadContent>({
  isLoaded: false, // set a default value
  setIsLoaded: () => {},
});
export const useLoadContext = () => useContext(LoadContext);
