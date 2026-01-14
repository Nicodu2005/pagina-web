import type { IProductIdMethod } from "./../interfaces/IProductIDMethod";
import type { IResponseBackend } from "./../interfaces/ResponseLogin";
import type { IProductData } from "../interfaces/Product";

export class ProductIdService implements IProductIdMethod {
  async traerProductoById(
    id_product: number
  ): Promise<IResponseBackend<IProductData>> {
    try {
      const response = await fetch(
        `http://localhost:3000/home/producto/${id_product}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

      const data = await response.json();
      return { ok: response.ok, data };
    } catch (e) {
      console.error("Error en traer producto por ID", e);
      return {ok: false , message:"Error de servidor" };
    }
  }
}
