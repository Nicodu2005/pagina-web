
const ILogin = require("../Interfaces/AuthLogin");

 class buscarUsuarioBD extends ILogin{
 constructor(database) {
    super();
    this.database=database;
  }
  async buscarUsuario (user){
   return new Promise((resolve, reject) =>{
    this.database.query("CALL buscarUsuario(?);", [user], async (err, result) => {
      if (err) {
        
        return reject(new Error("Error en consultar la base de datos") );
      }
       const usuariodb = result[0][0];

       if (!usuariodb ) {
        return resolve(null);
       }
       resolve(usuariodb);
    
    });
   
});
  };
};
module.exports = buscarUsuarioBD;
    