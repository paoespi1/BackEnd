const express=require('express');
const router = express.Router();
const tareasController = require('../controllers/tareaController');

//rutas del CRUD

router.post('/', tareasController.agregarTareas);
router.get('/', tareasController.buscarTareas);
router.get('/:id', tareasController.buscartarea);
router.put('/:id', tareasController.actualizarTarea);
router.delete('/:id', tareasController.eliminartarea);
router.patch('/:id', tareasController.ModificarTarea);
module.exports = router;
