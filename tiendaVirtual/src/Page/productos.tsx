import { useEffect, useState } from "react";
import ProductosComponent from "../components/ProductosComponent";
import type { IProductData } from "../interfaces/Product";
import { ProductService } from "../service/ProductService";
import type { filterProp } from "../interfaces/filter";

function Productos({ palabra }: filterProp) {
  const [productosdata, setProductos] = useState<IProductData[]>([]);

  const productosfiltrar = productosdata.filter((product) =>
    (product.nombre ?? "")
      .toLowerCase()
      .includes((palabra ?? "").toLowerCase()),
  );

  useEffect(() => {
    const service = new ProductService();

    service.traerProductos().then((res) => {
      if (!res.ok) {
        throw new Error("Error en los productos de la base de datos");
      }
      if (res.ok && res.data) {
        setProductos(res.data);
      }
    });
  }, []);

  return (
    <>
    <div className="px-6 mt-8">
      <h1 className="md:text-4xl font-bold text-gray-800 mb-6 ">
        Productos
      </h1>

      <div className=" flex justify-center items-center mx-auto">
        <div
          className=" justify-center items-center 
     grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5

    gap-y-12
    gap-x-6

    px-6
    py-10"
        >
          {productosfiltrar.map((product) => (
            <ProductosComponent key={product.id_producto} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Productos;
