const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createExhibit);

// get a tenant by staff id
router.get('/:id', getExhibitById);

// update tenant by tenant id
router.put('/:id', updateExhibitById);

// delete tenant by tenant id
router.delete('/:id', deleteExhibitById);

module.exports = router;