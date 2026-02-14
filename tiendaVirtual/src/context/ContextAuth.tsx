import { createContext,  } from "react";
import type { AuthContexType } from "../interfaces/IContextAuth";


export const AuthContext = createContext<AuthContexType>({} as AuthContexType);