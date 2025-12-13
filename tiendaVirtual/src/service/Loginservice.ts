import type { Credenciales } from "../interfaces/ILogin";
import type { IAuthLogin } from "../interfaces/AuthLogin";
import type { IResponseBackend } from "../interfaces/ResponseLogin";

export class Loginservice implements IAuthLogin {
  async login(credenciales: Credenciales): Promise<IResponseBackend> {
    try {
      const response = await fetch("http://localhost:3000/User/iniciarsesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      const data = await response.json();

      return { ok: response.ok, data };
    } catch (e) {
      console.log("Error de servidor", e);
      return {
        ok: false,
        data: {
          message: "Error de servidor",
        },
      };
    }
  }
}

export default Loginservice;
