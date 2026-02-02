import type { cartContextType } from "./cart";
import { createContext,  } from "react";
import type { ReactNode } from "react";

export const cartContext = createContext<cartContextType>({} as cartContextType);

export interface CartProviderProps{
  children: ReactNode;
}