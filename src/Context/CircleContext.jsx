import { createContext } from "react";

export const CircleContext = createContext("");

export const CircleProvider = ({ children }) => {
  return <CircleContext.Provider>{children}</CircleContext.Provider>;
};
