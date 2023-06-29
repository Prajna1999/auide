const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createBranding);

// get a tenant by staff id
router.get('/:id', getBrandingById);

// update tenant by tenant id
router.put('/:id', updateBrandingById);

// delete tenant by tenant id
router.delete('/:id', deleteBrandingById);

module.exports = router;