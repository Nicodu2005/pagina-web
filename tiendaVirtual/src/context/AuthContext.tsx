import { useState } from "react";
import type { AuthProviderProps } from "../interfaces/IContextAuth";
import {AuthContext} from "./ContextAuth";


function AuthProvider({ children }:AuthProviderProps) {
  const [isLogged, setIsLogged] = useState<boolean>(()=>{
    return !!localStorage.getItem("token");
  });

  const cerrarsesion = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, cerrarsesion}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
