const playerCtrl = {};
var Player = require('../models/player');
var TorneoModel = require('../models/torneo');
const { body, validationResult } = require('express-validator');

playerCtrl.renderPlayerForm = async (req, res) =>{
    var torneos = await TorneoModel.find(); 
    res.render('player/add' ,{torneos})

}

playerCtrl.createNewPlayer = async (req, res) => {
    // Define las reglas de validación
    var torneos = await TorneoModel.find(); 
    const validationRules = [
        body('dni', 'DNI es requerido y debe ser un número').notEmpty().isInt(),
        body('edad', 'Edad es requerida y debe ser un número').notEmpty().isInt({ min: 1 }),
        body('categoria', 'Categoría es requerida').notEmpty(),
        body('torneo', 'Torneo es requerido').notEmpty(),
      ];
      await Promise.all(validationRules.map(validation => validation.run(req)));
  
    // Obtén los errores de validación
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // Si hay errores, vuelve a renderizar el formulario con los errores
      return res.render('player/add', { errors: errors.array(), torneos} );
      
    }
  
    // Si no hay errores, guarda el nuevo jugador y redirige a la página de jugadores
    const { dni, edad, categoria, torneo } = req.body;
    const newPlayer = new Player({ dni, edad, categoria, torneo });
    await newPlayer.save();
    res.redirect('/player');
  };

 

playerCtrl.renderPlayers = async (req, res) =>{
    const player = await Player.find();
    res.render('player/all-players', {player})
}

playerCtrl.renderEditForm = async(req,res)=>{
    const player = await Player.findById(req.params.id).lean()
    var torneos = await TorneoModel.find();
    res.render('player/edit-player', {player, torneos})

}

playerCtrl.updatePlayer = async(req,res)=>{
    const {dni,edad,categoria,torneo}= req.body
    await Player.findByIdAndUpdate(req.params.id, {dni,edad, categoria, torneo});
    res.redirect("/player")
}


playerCtrl.deletePlayer = async(req, res)=>{
    await Player.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.redirect('/player')
}


module.exports = playerCtrl