const express = require('express');
const brandingController=require('../../controllers/brandingController');
const router = express.Router();

// create a staff user
router.post('/', brandingController.createBranding);

// get a tenant by staff id
router.get('/:id', brandingController.getBranding);

// update tenant by tenant id
router.put('/:id', brandingController.updateBranding);

// delete tenant by tenant id
router.delete('/:id', brandingController.deleteBranding);

module.exports = router;