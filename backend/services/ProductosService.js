const ProductError = require ("../Errors/ProductError");

class ServiceProduct{
    constructor(productorepository){
        this.productorepository=productorepository;
    }
    async productosService(){
        const productos = await this.productorepository.traerProductos();

        if(!productos || productos.length ===0){
            throw new ProductError ("No existen productos");
        }
        return {
            ok:true, data:productos
        }
    }
}

module.exports = ServiceProduct;