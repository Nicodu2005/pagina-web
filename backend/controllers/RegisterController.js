const conectationsBD = require ("../database/database");
const bcrypt = require("bcryptjs");
const AuthServiceRegister = require ("../services/AuthRegisterService");
const crearUsuario = require("../repository/UserRepositoryRegister");
const AuthError = require("../errors/AuthError");



const Register = async( req, res)=>{
    try{
        const {nombre,apellido,correoElectronico,telefono,password} = req.body;
        const data ={
            nombre,
            apellido,
            correoElectronico,
            telefono,
            password
        }

        
    const bd = new conectationsBD().connect();
    const repositoryRegister = new crearUsuario(bd);
    const serviceRegister = new AuthServiceRegister(repositoryRegister, bcrypt);
    
    const response = await serviceRegister.registro (data);

    return res.status(201).json(response)
      
    }catch(e){
         if (e instanceof AuthError) {
            console.error("no se ha podido realizar el registro con la bd", e);
            return res.status(409).json({message: e.message});
         }
         return res.status(500).json("Error en el servidor");
        }

}

module.exports = Register;
