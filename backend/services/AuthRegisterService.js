const AuthError = require("../errors/AuthError");


class AuthServiceRegister {
  constructor(userRepository, bcrypt) {
    this.userRepositoryRegister = userRepository;
    this.bcrypt = bcrypt;
  }
  async registro(data) {

    const dataHash = {
        nombre: data.nombre,
        apellido: data.apellido,
        correoElectronico:data.correoElectronico,
        telefono:data.telefono,
        password:data.password
    };
    const passwordHash = await this.bcrypt.hash(data.password, 10);
    dataHash.password = passwordHash;

    const Registrobd = await this.userRepositoryRegister.crearUsuario(dataHash);
    if (!Registrobd) {
      throw new AuthError ("Metodo Registrar usuario no funciona")
    }

    return({ok: true , message:"Registro exitoso"});
  };
}

module.exports = AuthServiceRegister;
