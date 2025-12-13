import type { IAuthRegister } from "../interfaces/AuthRegister";
import type { RegisterData } from "../interfaces/IRegister";
import type { IResponseBackend } from "../interfaces/ResponseLogin";

export class Registerservice implements IAuthRegister {
  async register(registerData: RegisterData): Promise<IResponseBackend> {
    try {
      const response = await fetch("http://localhost:3000/User/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      return { ok: response.ok, data };
    } catch (error) {
      console.log("Error de servidor", error);
      return { ok: false, data: { message: "Error de server" } };
    }
  }
}
