
const ProductRepository = require("../repository/Productosrepository");
const ProductService = require("../services/ProductosService");
const ConectationsBD =require("../database/database");
const ProductError = require("../Errors/ProductError");
const database = new ConectationsBD().connect();

const  productController = async (req,res)=>{
try{    
    const productRepository = new ProductRepository(database);
    const productService = new ProductService (productRepository);

    const response = await productService.productosService();

    return res.status(200).json(response.data);
    
}catch(e){
    if (e instanceof ProductError){
        return res.status(404).json({ok:false, message: e.message});
    }
    console.error("Error de servidor en productos", e);
    return res.status(500).json({ok:false, message:"error de servidor"});
}

}
module.exports=productController;