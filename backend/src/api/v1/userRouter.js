const express = require('express');

const router = express.Router();

// create a staff user
router.post('/', createUser);

// get a tenant by staff id
router.get('/:id', getUserById);

// update tenant by tenant id
router.put('/:id', updateUserById);

// delete tenant by tenant id
router.delete('/:id', deleteUserById);

module.exports = router;
