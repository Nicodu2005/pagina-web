const mysql = require("mysql2")
const connectionBD = require('../Interfaces/BdInterface')


class conectationsBD extends connectionBD{
    connect(){
const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Root",
    database:"tiendavirtual"
});

return connection;
}
}

module.exports= conectationsBD;