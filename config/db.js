const mongosee=require('mongoose');
require('dotenv').config();

const conectarDB =() => {
    mongosee
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados a la base de datos"))
    .catch((err) => console.error(err));
}

module.exports = conectarDB;