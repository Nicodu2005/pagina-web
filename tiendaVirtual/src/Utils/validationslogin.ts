import type { Credenciales } from "../interfaces/ILogin";
import type { IResponseBackend } from "../interfaces/ResponseLogin";

export const validateLogin = (credenciales: Credenciales): IResponseBackend | null => {
  if (!credenciales.user) {
    return { ok: false, data: { message: "Usuario esta vacio" } };
  }

  if (!credenciales.password) {
    return { ok: false, data: { message: "contraseña esta vacio" } };
  }

  return null;
};
