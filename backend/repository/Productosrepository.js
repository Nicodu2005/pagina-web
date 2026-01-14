const  Iproductos = require( "../Interfaces/ProductosBD");

class productosBD  extends Iproductos {
constructor(database){
    super();
    this.database = database; 
}
async traerProductos() {
    return new Promise ((resolve, reject)=>{
        this.database.query("call productos();",(err,result)=>{
            if(err){
                return reject(new Error("Error en la consulta de traer productos"+ err.message));
            }
            resolve(result[0]);
        })
    })
    
}

}
module.exports= productosBD;