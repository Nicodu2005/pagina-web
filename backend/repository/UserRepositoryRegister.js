
const IRegister = require("../Interfaces/AuthRegister")

class crearUsuario extends IRegister {
   constructor(database) {
    super();
    this.database=database;
  }
  async crearUsuario(dataHash) {
    return new Promise((resolve, reject) =>{
    this.database.query(
      "CALL register(?,?,?,?,?);",
      [
        dataHash.nombre,
        dataHash.apellido,
        dataHash.correoElectronico,
        dataHash.telefono,
        dataHash.password,
      ],
      (err) => {
        if (err) {
          console.log("Falló la operación en BD", err);
          return reject(new Error("Falló la operación en BD" ));
        }
        return resolve( true );
      }
    );
  });
}
}

module.exports = crearUsuario;
