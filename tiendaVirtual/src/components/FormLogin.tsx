import React from "react";
import icono from "../img/cuenta.png";

interface formLogin {
  user: string;
  password: string;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  redireccionar: () => void;
}

const FormLogin: React.FC<formLogin> = ({
  user,
  password,
  loading,
  onChange,
  onSubmit,
  redireccionar,
}) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col md:flex-row grap-6">
        <div className=" flex flex-col items-center text-center md:w-1/2">
          <img
            src={icono}
            alt="icono user"
            className="w-28 h-28  md:w-40 md:h-40 object-contain "
          />
          <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-500 ">
            Bienvenido a login
          </h1>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full md:w-1/2 flex flex-col gap-6  px-2 md:px-6"
        >
          <div>
            <label
              className="font-sans text-sm text-blue-500 md:text-2xl"
              htmlFor="Usuario_login"
            >
              Usuario
            </label>
            <input
              placeholder="Correo Electronico"
              onChange={onChange}
              value={user}
              type="text"
              name="user"
              id="user_login"
              className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" font-sans text-sm text-blue-500 md:text-2xl"
            >
              Password
            </label>
            <input
              placeholder="Contraseña"
              value={password}
              onChange={onChange}
              type="password"
              name="password"
              id="password"
              className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1"
            />
          </div>

          <button
            type="submit"
            className=" w-full md:w-auto  bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-sky-700   rounded-xl text-xl text-white h-7 hover:border"
            disabled={loading}
          >
            {loading ? "Iniciando Sesión" : "Iniciar Sesión"}
          </button>

          <button
            type="button"
            className=" w-full md:w-auto  bg-green-500 shadow-md shadow-green-500/50 hover:bg-green-700   rounded-xl text-xl text-white h-7 hover:border"
            onClick={redireccionar}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
