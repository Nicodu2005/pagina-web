const mysql = require("mysql2")
const connectionBD = require('../Interfaces/BdInterface')


class conectationsBD extends connectionBD{
    connect(){
const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"tiendaVirtual"
});

return connection;
}
}

module.exports= conectationsBD;