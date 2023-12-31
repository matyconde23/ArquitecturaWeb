var { Router } = require('express');
var router = Router()



const { renderPlayerForm, createNewPlayer, renderPlayers, deletePlayer,renderEditForm,updatePlayer} = require('../controllers/player.controller')

router.get('/player/add', renderPlayerForm)

router.post('/player/add', createNewPlayer)

router.get('/player', renderPlayers)
// editar


router.get('/player/edit-player/:id', renderEditForm)

router.put('/player/edit-player/:id', updatePlayer)

router.delete('/player/delete/:id', deletePlayer)



module.exports = router