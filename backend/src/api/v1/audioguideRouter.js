const express = require('express');
const audioguideController=require('../../controllers/audiouideController')
const router = express.Router();

// create a staff user
router.post('/', audioguideController.createAudioguide);

// get a tenant by staff id
router.get('/:id', audioguideController.getAudioguideById);

// update tenant by tenant id
router.put('/:id', audioguideController.updateAudioguideById);

// delete tenant by tenant id
router.delete('/:id', audioguideController.deleteAudioguideById);

module.exports = router;