const express=require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

//rutas del CRUD

router.post('/', proveedoresController.agregarProveedor);
router.get('/', proveedoresController.buscarProveedores);
router.get('/:id', proveedoresController.buscarProveedor);
router.put('/:id', proveedoresController.actualizarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedor);
router.patch('/:id', proveedoresController.ModificarProveedor);
module.exports = router;
