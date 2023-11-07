"use client";

import { ReactNode, createContext, useContext } from "react";
import { useViewportSize } from "@mantine/hooks";

type TGlobalContextProviderProps = {
  children: ReactNode;
};

type TGlobalContext = {
  viewportSize: TViewportSize;
};

type TViewportSize = {
  height: number;
  width: number;
};

export const GlobalContext = createContext<TGlobalContext | null>(null);

export default function GlobalContextProvider({
  children,
}: TGlobalContextProviderProps) {
  const { height, width } = useViewportSize();
  const viewportSize = { height: height, width: width };

  return (
    <GlobalContext.Provider value={{ viewportSize }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
}
