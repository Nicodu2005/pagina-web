import type { IProductData } from "./Product";

export interface CartItems {

    product: IProductData;
    quantity:number;
}

export interface cartContextType{
    CartItems : CartItems[];
    
    agregarcarrito:(product: IProductData) => void;
    eliminarProducto: (id_product:number) => void;
    aumentarCantidad:(id_product:number) => void;
    disminuirCantidad:(id_product:number) => void;
    vaciarCarrito:()=>void;

    totalItems:number;
    totalPrice:number;
}