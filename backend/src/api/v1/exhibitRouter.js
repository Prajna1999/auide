const express = require('express');
const exhibitController=require('../../controllers/exhbitController');
const router = express.Router();

// create a staff user
router.post('/', exhibitController.createExhibit);

// get a tenant by staff id
router.get('/:id',exhibitController.getExhibitById);

// update tenant by tenant id
router.put('/:id', exhibitController.updateExhibitById);

// delete tenant by tenant id
router.delete('/:id', exhibitController.deleteExhibitById);

module.exports = router;