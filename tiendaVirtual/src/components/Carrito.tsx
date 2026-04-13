import { useContext } from "react";
import { cartContext } from "../context/ContexrCart";
import { FiShoppingCart } from "react-icons/fi";
const Carrito = () => {
  const datos = useContext(cartContext);

  return (
    <div className="p-4 flex flex-col h-full  ">
      <div className="mb-4 border-b pb-2">
        <h1 className="font-sans text-base  font-extrabold md:text-2xl ">
          Carrito de compras: {datos.totalItems}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        {datos.items.length === 0 ? (
          <p className="font-sans text-base  md:text-2xl">
            El carrito esta vacio{" "}
          </p>
        ) : (
          datos.items.map((item) => (
            <div key={item.product.id_producto}>
              <div className="flex flex-col md:flex-row items-center md:p-4 m-2 gap-4 rounded-xl bg-white border border-gray-200 shadow-md mb-4">
                <img
                  className="h-20 w-20 md:h-28 md:w-28 object-contain"
                  src={`/img/${item.product.imagenURL}`}
                  alt=""
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="font-sans text-base  font-extrabold md:text-2xl">
                    {item.product.nombre}
                  </h3>
                  <div className=" flex items-center gap-1">
                    <p className="font-sans text-base ">Precio: </p>{" "}
                    <p className="font-sans  font-extrabold text-base text-green-600">
                      {item.product.precio.toLocaleString('es-CO')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="flex items-center justify-center gap-2 bg-blue-500 border rounded-xl text-white hover:bg-blue-800 w-10 h-10 "
                      onClick={() => {
                        datos.aumentarCantidad(item.product.id_producto);
                      }}
                    >
                      +
                    </button>
                    <p className=" font-sans text-base  md:text-2xl">
                      {item.quantity}
                    </p>
                    <button
                      className="flex items-center justify-center gap-2 bg-blue-500 border rounded-xl text-white hover:bg-blue-800 w-10 h-10 "
                      onClick={() => {
                        datos.disminuirCantidad(item.product.id_producto);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="w-full bg-white border-t p-4 mb-4">
        <p className=" font-sans text-base  md:text-2xl">
          Total de productos:  {datos.totalItems}
        </p>
        <p className="text-lg md:text-xl font-bold text-green-600  font-sans text-base  md:text-2xl">
          Total a pagar: $ {datos.totalPrice.toLocaleString('es-CO')} COP
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md mt-3 flex items-center justify-center gap-2">
            <FiShoppingCart className="text-lg" />
            Ir a comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
