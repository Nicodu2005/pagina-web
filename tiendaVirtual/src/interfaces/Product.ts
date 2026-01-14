export interface IProductData{
    id_producto: bigint,
    nombre:string,
    descripcion:string,
    precio:number,
    imagenURL:string,
    categoria:string
}


export interface ProductProps {
  product: IProductData;
}
