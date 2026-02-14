import type { cartContextType } from "../interfaces/cart";
import { createContext,  } from "react";

export const cartContext = createContext<cartContextType>({} as cartContextType);

