const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createAudioguide);

// get a tenant by staff id
router.get('/:id', getAudioguideById);

// update tenant by tenant id
router.put('/:id', updateAudioguideById);

// delete tenant by tenant id
router.delete('/:id', deleteAudioguideById);

module.exports = router;