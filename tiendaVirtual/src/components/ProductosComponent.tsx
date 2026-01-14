import type { ProductProps } from "../interfaces/Product";
import { Link } from "react-router-dom";

function productosComponent({ product }: ProductProps) {
  return (
    <div>
      <Link to={`/producto/${product.id_producto}`}>
      <div className="justify-center items-center bg-gray shadow-md p-4 rounded-2xl transition-shadow duration-300 hover:shadow-xl  hover:bg-gray-50 w-64 flex flex-col gap-2">
        <img
          className="flex flex-col w-28 h-28  md:w-50 md:h-50 object-contain rounded-lg bg-gray-50"
          src={`/img/${product.imagenURL}`}
          alt={product.imagenURL}
        />
        <h2 className="hover:text-blue-400 font-semibold text-base md:text-2xl">{product.nombre}</h2>
        <p className="font-semibold line-clamp-2 text-base">{product.descripcion}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-green-600">
            ${product.precio}
          </span>

          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
            {product.categoria}
          </span>
        </div>
        
        <button className="mt-auto font-semibold h-8 w-full rounded-xl border bg-blue-500 text-white font-sans hover:bg-blue-700">
          Agregar al carrito
        </button>
      </div>
      </Link>
    </div>
  );
}

export default productosComponent;
