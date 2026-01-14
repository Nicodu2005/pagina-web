const  iproductosId = require( "../Interfaces/ProductosID");

class productoIdBD  extends iproductosId {
constructor(database){
    super();
    this.database = database; 
}
async productoID(id_producto) {
    return new Promise ((resolve, reject)=>{
        this.database.query("call BuscarProductoID(?);",[id_producto],(err,result)=>{
            if(err){
                return reject(new Error("Error en la consulta de traer productos por id"+ err.message));
            }
            if(!result[0] || result[0].length  ===0){
                return resolve(null);
            }
            resolve(result[0][0]);

            
        })
    })
    
}

}
module.exports= productoIdBD;