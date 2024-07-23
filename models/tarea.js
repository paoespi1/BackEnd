const mongoose = require('mongoose');

//El modelo debe ser igual a la base de datos
const tareaSchema = mongoose.Schema({
    nombre:{
        type:String, 
        required:true
        },
    responsable:{
        type:String, 
        required:true},
    fecha:{
        type:Date, 
        required:true
        },
    comentarios:{
        type:String, 
        required:true
                }
}, {versionkey:false});

module.exports = mongoose.model('Tarea', tareaSchema);
