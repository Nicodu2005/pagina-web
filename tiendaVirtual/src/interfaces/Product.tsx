export interface IProductData{
    id_producto: bigint,
    nombre:string,
    descripcion:string,
    precio:number,
    imagerURL:string,
    id_categoria_Fk?: {              // opcional si devuelves el nombre de la categoría
        id_categoria: number;
        nombre_categoria: string;
    };
}

