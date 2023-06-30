const express = require('express');
const addressController=require('../../controllers/addressController')

const router = express.Router();

// create a staff user
router.post('/', addressController.createAddress);

// get a tenant by staff id
router.get('/:id', addressController.getAddressById);

// update tenant by tenant id
router.put('/:id', addressController.updateAddressById);

// delete tenant by tenant id
router.delete('/:id', addressController.updateAddressById);

module.exports = router;