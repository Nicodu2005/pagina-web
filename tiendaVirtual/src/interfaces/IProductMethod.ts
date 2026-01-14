import type {IResponseBackend} from '../interfaces/ResponseLogin';

import type { IProductData } from "../interfaces/Product";

export interface IProductMethod{
    traerProductos():Promise<IResponseBackend<IProductData[]>>;
}