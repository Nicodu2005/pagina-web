const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/userRepositoryLogin");
const AuthIniciarsesion = require("../services/AuthIniciarSesionService");
const AuthError = require("../errors/AuthError");
const conectationsBD = require("../database/database");

const loginController = async (req, res) => {
  try {
    const { user, password } = req.body;



    const database = new conectationsBD().connect();
    const userRepository = new UserRepository(database);
    const authService = new AuthIniciarsesion(userRepository, bcrypt, jwt);
    const response = await authService.LoginService(user, password);



    return res.status(200).json(response);
  } catch (e) {
  
      if (e instanceof AuthError) {
        return res.status(401).json({ ok: false, message: e.message });
      }
    console.error("error de servidor", e);
    
      return res.status(500).json({ ok: false, message: "Error de servidor" });

}};
module.exports = loginController;
