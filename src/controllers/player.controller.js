const playerCtrl = {};
var Player = require('../models/player');
var TorneoModel = require('../models/torneo');

playerCtrl.renderPlayerForm = async (req, res) =>{
    var torneos = await TorneoModel.find();
    
    
    res.render('player/new-player',{torneos})

}
 playerCtrl.createNewPlayer = async (req,res) =>{
    const { dni, edad, categoria, torneo} = req.body
    var newPlayer = new Player({dni, edad,categoria, torneo})
    await newPlayer.save()
    
    res.redirect('/player')
}
 

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
    const {dni,edad,categoria, torneo}= req.body
    await Player.findByIdAndUpdate(req.params.id, {dni,edad, categoria, torneo});
    res.redirect("/player")
}


playerCtrl.deletePlayer = async(req, res)=>{
    await Player.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.redirect('/player')
}


module.exports = playerCtrl