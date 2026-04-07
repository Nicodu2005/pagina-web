import type { CartItems, cartContextType } from "../interfaces/cart";
import type { CartProviderProps } from "../interfaces/IContextCart";
import { useEffect, useState } from "react";
import { cartContext } from "../context/ContexrCart";
import type { IProductData } from "../interfaces/Product";


function CartProvider({ children }: CartProviderProps) {
 const [items, setItems] = useState<CartItems[]>(() => {
  const data = localStorage.getItem("carrito");
  return data ? JSON.parse(data) : [];
});

  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);
 
  const agregarcarrito: cartContextType["agregarcarrito"] = (product:IProductData,quantity:number ) => {
  
   if (quantity < 1) return;
    const productoencontrado = items.find(
      (item) => item.product.id_producto === product.id_producto,
    );

    if (productoencontrado) {
      setItems((prev)=>  prev.map((item) => {
        if (item.product.id_producto === product.id_producto  )
          return { ...item, quantity: item.quantity + quantity };
        return item;
      }));
      return
    }
    setItems((prev) => [...prev, { product, quantity }]);
  };


  const eliminarProducto :cartContextType ["eliminarProducto"] = (id_producto :number)=>{
    setItems((prev)=>  prev.filter((item) => item.product.id_producto !== id_producto) )   
};

const aumentarCantidad :cartContextType ["aumentarCantidad"]  = (id_producto: number) =>{

  setItems((prev)=>prev.map((item) => (item.product.id_producto === id_producto)
        ? {...item, quantity: item.quantity + 1} : item));
      
}
const disminuirCantidad :cartContextType ["disminuirCantidad"]  = (id_producto: number) =>{

  setItems((prev)=> prev.map((item) => (item.product.id_producto === id_producto)
        ? {...item, quantity: item.quantity - 1} : item).filter((item)=>item.quantity>0));
        
}
const vaciarCarrito : cartContextType["vaciarCarrito"] = () =>{
    setItems([]);
}

const calcularItems =()=>{
const totalitem = items.reduce((counter,item)=>counter +  item.quantity,0)
    return totalitem
}

const totalItems:cartContextType["totalItems"]=calcularItems();
  
  const calcularprecio = ()=>{
    return items.reduce((acc,item)=>{ return acc +Number(item.product.precio) * item.quantity},0
  )}

  const totalPrice : cartContextType["totalPrice"]= calcularprecio();

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
