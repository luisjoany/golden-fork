const orden = require('../models/orden');

const ordenCtrl = {};

ordenCtrl.getOrdens = async(req, res) => {
    const ordenes = await orden.find();
    res.json(ordenes);
}

ordenCtrl.createOrden = async(req, res) => {
    const Orden = new orden(req.body);
    await Orden.save();
    res.json({
        'status': 'Orden Guardada'
    });

}

ordenCtrl.getOrden = async(req, res) => {
    console.log(req.params);
    //orden.findById();
    res.json('recived');

}

ordenCtrl.editOrden = function() {

}

ordenCtrl.deleteOrden = function() {


}

module.exports = ordenCtrl;
