import { createContext,  } from "react";
import type { ReactNode } from "react";

export interface AuthContexType {
    isLogged:boolean;
    setIsLogged: (value:boolean) =>void;
    cerrarsesion:()=>void;
}

export interface AuthProviderProps{
  children: ReactNode;
}

export const AuthContext = createContext<AuthContexType>({} as AuthContexType);