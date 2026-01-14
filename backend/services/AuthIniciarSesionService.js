
const AuthError = require("../errors/AuthError");

class AuthServiceLogin {
  constructor(userRepository, bcrypt, jwt) {
    this.userRepository = userRepository;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  async LoginService(user, password) {
    const usuariodb = await this.userRepository.buscarUsuario(user);

    if (!usuariodb) {
      
        throw new AuthError( "credenciales no validas" );
    
    }

    const passwordCorrecta = await this.bcrypt.compare(
      password,
      usuariodb.contrasena
    );

    if (!passwordCorrecta) {
        
      throw new AuthError("Usuario o contraseña incorrecta");
  
}

    const token = this.jwt.sign(
      {
        id_usuario: usuariodb.id_usuario,
        correoElectronico: usuariodb.correoElectronico,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );
    return { ok: true, message: "Inicio de sesion Exitoso", token };
  }
}

module.exports = AuthServiceLogin;
