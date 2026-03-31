import type { ProductProps } from "../interfaces/Product";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import {useContext, useState} from "react"
import { cartContext } from "../context/ContexrCart";

function Productid({ product }: ProductProps) {
  const [quantity,setquantity] = useState(0);

  const aumentarCantidad = ()=> {setquantity(quantity+1)}
  const disminuirCantidad = ()=> {if (quantity >= 1) {
    setquantity(quantity - 1);
  }}
  const carrito = useContext(cartContext)
  
  return (
    <div className=" flex p-10 mx-auto grid md:grid-cols-2   rounded-2xl transition-shadow duration-300 max-w-6xl w-full">
      <div className="flex w-auto items-center justify-center">
        <img
          className="h-80 w-80 md:h-200 md:w-200 object-contain"
          src={`/img/${product.imagenURL}`}
          alt=""
        />
      </div>

      <div className="p-5 bg-gray-100 space-y-4 rounded-2xl">
        <h2 className="font-bold  text-base md:text-3xl w-full">
          {product.nombre}
        </h2>
        <p className="text-gray-600 text-base md:text-xl">
          {product.descripcion}
        </p>
        <span className="inline-block bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full">
          Categoria: {product.categoria}
        </span>
        <div className="flex items-center justify-center">
          <p className="text-4xl font-extrabold text-green-600">
            $ {product.precio}
          </p>
        </div>
        <div className="gap-4 flex items-center">
          <span className="text-gray-600  text-base md:text-lg">
            Cantidad:{" "}
          </span>{" "}
          <button className="text-white bg-blue-500 w-10 h-10 rounded-xl hover:bg-blue-700 flex items-center justify-center" onClick={disminuirCantidad}>
            <FiMinus />
          </button>
          <input
            onChange={(e)=>setquantity(Number(e.target.value))}
            type="number"
            className="w-40 h-10 text-center border font-extrabold rounded-lg md:text-xl font-sans "
            value={quantity}
          />{" "}
          <button className="text-white bg-blue-500 w-10 h-10 rounded-xl hover:bg-blue-700  flex items-center justify-center" onClick={aumentarCantidad}>
            <FiPlus />
          </button>
        </div>
        <button className=" flex items-center justify-center gap-2 bg-blue-500 border rounded-xl text-white hover:bg-blue-800 w-full h-12 mt-auto " onClick={()=>carrito.agregarcarrito(product,quantity)}>
          Agregar al Carrito <FiShoppingCart className="text-xl" />
        </button>
        <div className="text-sm text-gray-500 space-y-1">
          <p>✔ Producto original</p>
          <p>✔ Garantía incluida</p>
          <p>✔ 🚚 Envíos a todo el país 🚚</p>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Material:</strong> Alta resistencia
          </p>
          <p>
            <strong>Presentación:</strong> Unidad
          </p>
          <p>
            <strong>Estado:</strong> Nuevo
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            Un producto pensado para quienes buscan funcionalidad y buen diseño,
            ideal para el uso diario y una experiencia confiable.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Diseño moderno y funcional</li>
            <li>Fácil de usar</li>
            <li>Excelente relación calidad-precio</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Productid;
