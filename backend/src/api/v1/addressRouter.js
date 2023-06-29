const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createAddress);

// get a tenant by staff id
router.get('/:id', getAddressById);

// update tenant by tenant id
router.put('/:id', updateAddressById);

// delete tenant by tenant id
router.delete('/:id', deleteAddressById);

module.exports = router;