import { useContext } from "react";
import { cartContext } from "../context/ContexrCart";
const Carrito = () => {
  const datos = useContext(cartContext);

  return (
    <div className="p-4 m-2">
      <h1 className="font-sans text-base  font-extrabold md:text-2xl ">
        Carrito de compras:  {datos.totalItems}
      </h1>
      
      {datos.items.length === 0 ? (
        <p className="font-sans text-base  md:text-2xl">El carrito esta vacio </p>
      ) : (
        datos.items.map((item) => (
          <div key={item.product.id_producto}>
            <div className="flex flex-col md:flex-row items-center md:p-4 m-2 gap-4 rounded-xl bg-gray-400/30 shadow-md mb-4">
            <img
              className="h-20 w-20 md:h-28 md:w-28 object-contain"
              src={`/img/${item.product.imagenURL}`}
              alt=""
            />
            <div className="flex flex-col gap-2 ">
            <h3 className="font-sans text-base  font-extrabold md:text-2xl" >{item.product.nombre}</h3>
            <div className=" flex items-center gap-1">
            <p className="font-sans text-base " >Precio: </p> <p className="font-sans  font-extrabold text-base text-green-600">{item.product.precio}</p>
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
            <p className=" font-sans text-base  md:text-2xl" >{item.quantity}</p>
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

      <p className=" font-sans text-base  md:text-2xl">Total de productos {datos.totalItems}</p>
      <p className=" font-sans text-base  md:text-2xl">Total a pagar {datos.totalPrice}</p>
    
    </div>
  );
};

export default Carrito;
