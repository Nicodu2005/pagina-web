import type { IProductData } from "./Product";

export interface CartItems {

    product: IProductData;
    quantity:number;
}

export interface cartContextType{
    items : CartItems[];
    agregarcarrito:(product: IProductData) => void;
    eliminarProducto: (id_producto:number) => void;
    aumentarCantidad:(id_producto:number) => void;
    disminuirCantidad:(id_producto:number) => void;
    vaciarCarrito:()=>void;

    totalItems:number;
    totalPrice:number;
}