import type { CartItems, cartContextType } from "../interfaces/cart";
import type { CartProviderProps } from "../interfaces/ContexrCart";
import { useState } from "react";
import { cartContext } from "../interfaces/ContexrCart";
import type { IProductData } from "../interfaces/Product";


function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItems[]>([]);

  const agregarcarrito: cartContextType["agregarcarrito"] = (product:IProductData ) => {
    const productoencontrado = items.find(
      (item) => item.product.id_producto === product.id_producto,
    );

    if (productoencontrado) {
      const nuevoCarrito = items.map((item) => {
        if (item.product.id_producto === product.id_producto)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      setItems(nuevoCarrito);
      return;
    }
    setItems([...items, { product, quantity: 1 }]);
  };

  const eliminarProducto :cartContextType ["eliminarProducto"] = (id_producto :number)=>{
    const copiaCarrito = items.filter((item) => item.product.id_producto !== id_producto) 
     setItems(copiaCarrito);
};

  return (
    <cartContext.Provider
      value={{
        items,
        agregarcarrito,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
