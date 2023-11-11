const torneoCtrl = {};
var Torneo = require('../models/torneo')

torneoCtrl.renderTorneoForm = (req, res) =>{
    res.render('torneo/new-torneo')
}

torneoCtrl.createNewTorneo = async(req, res ) => {
    const { nombre, lugar, categoria} = req.body
    var newTorneo = new Torneo({nombre, lugar,categoria})
    await newTorneo.save()
    console.log(newTorneo)
    res.redirect('/torneo')
}

torneoCtrl.renderTorneos = async (req, res) =>{
    const torneo = await Torneo.find();
    res.render('torneo/all-torneos', {torneo})
    
}

torneoCtrl.renderEditForm = async(req,res)=>{
    const torneo = await Torneo.findById(req.params.id).lean()
    res.render('torneo/edit-torneo', {torneo})
}

torneoCtrl.updateTorneo = async(req,res)=>{
    const {code,nombre,lugar,categoria}= req.body
    await Torneo.findByIdAndUpdate(req.params.id, {nombre,lugar,categoria});
    res.redirect("/torneo")
}


torneoCtrl.deleteTorneo = async(req, res)=>{
    await Torneo.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.redirect('/torneo')
}

module.exports = torneoCtrl