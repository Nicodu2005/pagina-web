import type { IResponseBackend } from "../interfaces/ResponseLogin";
import type { IProductMethod } from "../interfaces/IProductMethod";
import type { IProductData } from "../interfaces/Product";


export class ProductService implements IProductMethod {
  async traerProductos(): Promise<IResponseBackend<IProductData[]>> {
    try {
      const response = await fetch("http://localhost:3000/home/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
       
      });
      const data = await response.json();
      return { ok: response.ok, data };
    } catch (e) {
      console.error("Error en traer productos", e);
      return { ok: false, data:[] };
    }
  }
};
