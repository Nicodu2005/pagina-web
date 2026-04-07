import { Link } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../context/ContextAuth";
import type { filterProp } from "../interfaces/filter";
import { cartContext } from "../context/ContexrCart";
import Carrito from "../components/Carrito"

function Menu({ palabra, setPalabra }: filterProp) {
  const [open, setOpen] = useState(false);
  const [openCarrito, setOpenCarrito] = useState(false);
  const { isLogged, cerrarsesion } = useContext(AuthContext);
  const { totalItems } = useContext(cartContext)!;

  return (
    <>
      <nav className="sticky top-0 bg-blue-500 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4 p-2 ">
          <img
            className="w-10 h-10  md:w-14 md:h-14 object-contain"
            src="/img/tiendas.png"
            alt=""
          />
          <h3 className="font-sans text-base  md:text-2xl">Break Street</h3>
          <input
            value={palabra}
            type="text"
            onChange={(e) => setPalabra(e.target.value)}
            className="border shadow-lg h-8  flex-1 w-full h-9 max-w-xs md:max-w-md text rounded-xl p-2 bg-white text-black"
            placeholder="Buscar "
          />

          <ul className="flex gap-6 ml-auto p-2 hidden lg:flex gap-6 ml-auto ">
            <li className=" font-sans text-base  md:text-2xl hover:text-gray-300">
              <Link to="/">Inicio</Link>
            </li>
            <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
              <Link to="/productos">Productos</Link>
            </li>
            <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
              <FiShoppingCart
                className="text-xl"
                onClick={() => setOpenCarrito(!openCarrito)}
              />
              {totalItems > 0 && <span>{totalItems}</span>}
            </li>
            {!isLogged && (
              <>
                <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
                  <Link to="/Login">Iniciar Sesión</Link>
                </li>
                <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
                  <Link to="/Registro">Registarse</Link>
                </li>
              </>
            )}

            {isLogged && (
              <>
                <li
                  className="font-sans text-base  md:text-2xl hover:text-gray-300"
                  onClick={cerrarsesion}
                >
                  Cerrar Sesion
                </li>
              </>
            )}
          </ul>

          <button
            className="lg:hidden ml-auto text-2xl hover:text-gray-300 "
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
            <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
              <Link to="/">Inicio</Link>
            </li>
            <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
              <Link to="/productos">Productos</Link>
            </li>
            <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
              <Link to="/">
                <FiShoppingCart className="text-xl" />
                {totalItems > 0 && <span>{totalItems}</span>}
              </Link>
            </li>
            {!isLogged && (
              <>
                <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
                  <Link to="/Login">Iniciar Sesión</Link>
                </li>
                <li className="font-sans text-base  md:text-2xl hover:text-gray-300">
                  <Link to="/Registro">Registarse</Link>
                </li>
              </>
            )}

            {isLogged && (
              <>
                <li
                  className="font-sans text-base  md:text-2xl hover:text-gray-300"
                  onClick={cerrarsesion}
                >
                  Cerrar Sesion
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {openCarrito && <Carrito></Carrito>}
    </>
  );
}

export default Menu;
