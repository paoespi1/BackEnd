const mongoose = require('mongoose');

//El modelo debe ser igual a la base de datos
const proveedorSchema = mongoose.Schema({
    razonsocial:{
        type:String, 
        required:true},
    numerodeidentificacion:{
        type:String, 
        required:true
        },
    telefono:{
        type:String, 
        required:true
        },
    direccion:{
        type:String, 
        required:true
        },
    correoelectronico:{
        type:String, 
        required:true
        }
}, {versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);