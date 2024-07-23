const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// creacion servidor
const app = express();
//Configurar puerto
const port = process.env.PORT || 5000;

// Enlazar conexion a BD
conectarBD();
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/tareas', require('../routes/routesTareas'));
app.use('/api/proveedores', require('../routes/routesProveedores'));

//ruta para verificar servidor en la web
app.get('/', (req, res) => {
    res.send("hola mundo desde la web");
});

app.listen(port, ()=>{
    console.log('El servidor se encuentra conectado');
});
