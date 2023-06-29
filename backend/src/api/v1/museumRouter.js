const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createMuseum);

// get a tenant by staff id
router.get('/:id', getMuseumById);

// update tenant by tenant id
router.put('/:id', updateMuseumById);

// delete tenant by tenant id
router.delete('/:id', deleteMuseumById);

module.exports = router;
