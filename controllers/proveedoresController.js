const Proveedor = require('../models/proveedor');

//tarea para agregar tareas
exports.agregarProveedor = async (req, res) => {
    try{
        let proveedores = new Proveedor(req.body, res);
        await proveedores.save();
        res.json(proveedores);
    }catch(error){
        console.log(error);
        res.status(500).send('Hay un error al agregar el proveedor ' + error)
    }
}

exports.buscarProveedores = async(req, res) => {
    try{
       const proveedores = await Proveedor.find();
       res.json(proveedores);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostras los proveedores ' + error);
    }
}

//Actualizar PUT
exports.actualizarProveedor = async(req, res) =>{
    try {
        const proveedor = await Proveedor.findOneAndUpdate({
            _id:req.params.id
        }, req.body);

        if(!proveedor){
            res.status(500).send('No se encontro el proveedor ' + req.params.id);
        }else{
            const proveedorupdate = await Proveedor.findById(req.params.id);
            res.json(proveedorupdate);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar una tarea ' + error)
    }
}

//Actualizar Patch
exports.ModificarProveedor = async(req, res) =>{
    try {

        const {razonsocial, numerodeidentificacion, telefono, direccion, correoelectronico} = req.body;
        let proveedor = await Proveedor.findById(req.params.id);
        
        if(!proveedor){
            res.status(404).send({msg:"Proveedor no encontrada con el Id " + req.params.id});
            return
        }
        proveedor.razonsocial = razonsocial;
        proveedor.numerodeidentificacion = numerodeidentificacion;
        proveedor.telefono = telefono;
        proveedor.direccion = direccion;
        proveedor.correoelectronico = correoelectronico;

        proveedor = await Proveedor.findOneAndUpdate({
            _id:req.params.id
        }, proveedor, {new:true});

       res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar un proveedor ' + error)
    }
}

//Buscar un proveedor
exports.buscarProveedor = async(req, res)=>{
    try{
        const proveedor = await Proveedor.findById(req.params.id);
        
        if(!proveedor){
            res.status(404).send({msg:"Proveedor no encontrado con el Id " + req.params.id});
            return
        }
        res.json(proveedor);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostrar el proveedor ' + req.params.id + ' ' + error)
    }
}
//Eliminar una tarea
exports.eliminarProveedor = async(req, res)=>{
    try{
        const proveedor = await Proveedor.findById(req.params.id);
        
        if(!proveedor){
            res.status(404).send({msg:"Proveedor no encontrado con el Id " + req.params.id});
            return
        }
        await Proveedor.findOneAndDelete({_id: req.params.id})
        res.json('Proveedor Eliminado correctamente');
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al mostrar el proveedor ' + req.params.id + ' ' + error)
    }
}