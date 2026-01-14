import type { IProductData } from "./Product";
import type { IResponseBackend } from "./ResponseLogin";

export interface IProductIdMethod{
    traerProductoById(id_product:number):Promise <IResponseBackend<IProductData>>;
}