const ProductIdRepository = require("../repository/ProductoIdRepository");
const ProductIDService = require("../services/ProductoIdService");
const ConectationsBD =require("../database/database");
const ProductError = require("../Errors/ProductError");
const database = new ConectationsBD().connect();

const productIdController= async(req,res)=>{
    try{
        const {id_producto} = req.params;

            const ProductIdRepositortio = new ProductIdRepository(database);
            const ProductIDServicio = new ProductIDService(ProductIdRepositortio);

            const response = await ProductIDServicio.ProductoIdService(id_producto)
            return res.status(200).json(response.data)

            
    }catch (e){
        if(e instanceof ProductError){
            return res.status(404).json({ok:false, message: e.message});
        }
        console.error("Error en traer producto por id",e);
         return res.status(500).json({ok:false, message:"error de servidor"});
    }
}
module.exports=productIdController;