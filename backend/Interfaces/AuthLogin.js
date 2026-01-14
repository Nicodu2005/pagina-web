class ILogin {
    async buscarUsuario (user)
    {
        throw new Error ("Metodo buscar usuario no funciona")
    }
}
module.exports = ILogin;