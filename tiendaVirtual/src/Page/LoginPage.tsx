import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { toast } from "react-toastify";
import FormLogin from "../components/FormLogin";
import { validateLogin } from "../Utils/validationslogin";
import type IFormLoginState from "../interfaces/ILogin";
import type { Credenciales } from "../interfaces/ILogin";
import Loginservice from "../service/Loginservice";

const service = new Loginservice();
function Login() {
  const navigate = useNavigate();
  const [formLogin, setformLogin] = useState<IFormLoginState>({
    user: "",
    password: "",
    loading: false,
  });

  const Registro = () => {
    navigate("/Registro");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { user, password } = formLogin;
      const credenciales: Credenciales = { user, password };

      const resultvalidateLogin = validateLogin(credenciales);
      if (resultvalidateLogin) {
        toast.error(resultvalidateLogin.data.message);
        return;
      }

      setformLogin((prev) => ({ ...prev, loading: true }));

      const result = await service.login(credenciales);

      console.log(result.ok);

      if (result.ok) {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }

      setformLogin((prev) => ({ ...prev, loading: false }));
    } catch (e) {
      console.log("server error", e);
      toast.error("error de servidor");
    } finally {
      setformLogin((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <FormLogin
      user={formLogin.user}
      password={formLogin.password}
      loading={formLogin.loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      redireccionar={Registro}
    />
  );
}
export default Login;
