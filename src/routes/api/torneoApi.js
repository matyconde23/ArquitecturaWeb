var express = require('express');
var router = express.Router();
var torneoController = require('../../controllers/api/torneoControllerApi')

router.get('/api/torneo', torneoController.torneo_list);
router.delete('/delete', torneoController.torneo_delete);
router.post('/create', torneoController.torneo_create)

module.exports = router;