const express = require('express');
const museumController=require('../../controllers/museumController');
const router = express.Router();

// create a staff user
router.post('/', museumController.createMuseum);

// get a tenant by staff id
router.get('/:id', museumController.getMuseumById);

// update tenant by tenant id
router.put('/:id', museumController.updateMuseumById);

// delete tenant by tenant id
router.delete('/:id', museumController.deleteMuseumById);

module.exports = router;
