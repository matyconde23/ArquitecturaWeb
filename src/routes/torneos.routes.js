var { Router } = require('express');
var router = Router()



const {renderTorneoForm, createNewTorneo, renderTorneos, deleteTorneo ,renderEditForm, updateTorneo} = require('../controllers/torneo.controllers')

router.get('/torneo/add',renderTorneoForm)

router.post('/torneo/new-torneo', createNewTorneo)

router.get('/torneo', renderTorneos)
// editar


router.get('/torneo/edit-torneo/:id', renderEditForm)

router.put('/torneo/edit-torneo/:id', updateTorneo)

router.delete('/torneo/delete/:id', deleteTorneo)



module.exports = router