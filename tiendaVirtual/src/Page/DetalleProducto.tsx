import React, { useState, useEffect } from "react";
import ProductId from "../components/Productid";
import type { IProductData } from "../interfaces/Product";
import { ProductIdService } from "../service/ProductIdService";
import { useParams } from "react-router-dom";


function DetalleProducto() {
  const [productdataID, setProductosId] = useState<IProductData | null>(null);
  const id_producto = useParams();

  useEffect(() => {
    if (!id_producto) return;
    const service = new ProductIdService();

    service.traerProductoById(Number(id_producto.id_producto)).then((res) => {
      if (!res.ok) {
        throw new Error("Error en los productos de la base de datos");
      }
      if (res.ok && res.data) {
        setProductosId(res.data);
      }
    });
  }, [id_producto]);

  return (
    <div
      className=" justify-center items-center 
     grid
    grid-cols-1"
    >
      <div>{productdataID && <ProductId product={productdataID} />}</div>;
    </div>
  );
}

export default DetalleProducto;
