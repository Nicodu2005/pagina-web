import { Link } from "react-router-dom";
import {useState } from "react";
import Imgmenu from "../img/tiendas.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../interfaces/ContextAuth";

function Menu() {
  const [open, setOpen] = useState(false);
  const {isLogged , cerrarsesion}= useContext(AuthContext);

  return (
    <nav className="sticky top-0 bg-blue-500 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-4 p-2 ">
        <img
          className="w-10 h-10  md:w-14 md:h-14 object-contain"
          src={Imgmenu}
          alt=""
        />
        <h3 className="font-bold text-base  md:text-2xl">Mi tienda virtual </h3>
        <input
          type="text"
          className="border shadow-lg h-8  flex-1 w-full max-w-xs md:max-w-md text rounded-xl p-2 bg-white text-black"
          placeholder="Buscar "
        />

        <ul className="flex gap-6 ml-auto p-2 hidden lg:flex gap-6 ml-auto">
          <li className="font-bold text-base  md:text-2xl">
            <Link to="/">inicio</Link>
          </li>
          <li className="font-bold text-base  md:text-2xl">
            <Link to="/productos">Productos</Link>
          </li>
          {!isLogged && (
            <>
              <li className="font-bold text-base  md:text-2xl">
                <Link to="/Login">Iniciar Sesion</Link>
              </li>
              <li className="font-bold text-base  md:text-2xl">
                <Link to="/Registro">Registarse</Link>
              </li>
            </>
          )}

          {isLogged && (
            <>
              <li
                className="font-bold text-base  md:text-2xl"
                onClick={cerrarsesion}
              >
                Cerrar Sesion
              </li>
            </>
          )}
        </ul>

        <button
          className="lg:hidden ml-auto text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="block gap-6 p-2 w-full">
          <li className="font-bold text-base  md:text-2xl">
            <Link to="/">inicio</Link>
          </li>
          <li className="font-bold text-base  md:text-2xl">
            <Link to="/productos">Productos</Link>
          </li>
          {!isLogged && (
            <>
              <li className="font-bold text-base  md:text-2xl">
                <Link to="/Login">Iniciar Sesion</Link>
              </li>
              <li className="font-bold text-base  md:text-2xl">
                <Link to="/Registro">Registarse</Link>
              </li>
            </>
          )}

          {isLogged && (
            <>
              <li
                className="font-bold text-base  md:text-2xl"
                onClick={cerrarsesion}
              >
                Cerrar Sesion
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
