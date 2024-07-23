const Tarea = require('../models/tarea');

//tarea para agregar tareas
exports.agregarTareas = async (req, res) => {
    try{
        let tareas = new Tarea(req.body, res);
        await tareas.save();
        res.json(tareas);
    }catch(error){
        console.log(error);
        res.status(500).send('Hay un error al agregar la tarea ' + error)
    }
}

exports.buscarTareas = async(req, res) => {
    try{
       const tareas = await Tarea.find();
       res.json(tareas);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostras las tareas ' + error);
    }
}

//Actualizar PUT
exports.actualizarTarea = async(req, res) =>{
    try {
        const tareas = await Tarea.findOneAndUpdate({
            _id:req.params.id
        }, req.body);

        if(!tareas){
            res.status(500).send('No se encontro la tarea ' + req.params.id);
        }else{
            const tareaupdate = await Tarea.findById(req.params.id);
            res.json(tareaupdate);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar una tarea ' + error)
    }
}

//Actualizar Patch
exports.ModificarTarea = async(req, res) =>{
    try {

        const {nombre, responsable, fecha, comentarios} = req.body;
        let tarea = await Tarea.findById(req.params.id);
        
        if(!tarea){
            res.status(404).send({msg:"Tarea no encontrada con el Id " + req.params.id});
            return
        }
        tarea.nombre = nombre;
        tarea.responsable = responsable;
        tarea.fecha = fecha;
        tarea.comentarios = comentarios;

        tarea = await Tarea.findOneAndUpdate({
            _id:req.params.id
        }, tarea, {new:true});

       res.json(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar una tarea' + error)
    }
}

//Buscar una tarea
exports.buscartarea = async(req, res)=>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        
        if(!tarea){
            res.status(404).send({msg:"Tarea no encontrada con el Id " + req.params.id});
            return
        }
        res.json(tarea);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostrar la tarea ' + req.params.id + ' ' + error)
    }
}
//Eliminar una tarea
exports.eliminartarea = async(req, res)=>{
    try{
        const tareas = await Tarea.findById(req.params.id);
        
        if(!tareas){
            res.status(404).send({msg:"Tarea no encontrada con el Id " + req.params.id});
            return
        }
        await Tarea.findOneAndDelete({_id: req.params.id})
        res.json('Tarea Eliminada correctamente');
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostrar la tarea ' + req.params.id + ' ' + error)
    }
}