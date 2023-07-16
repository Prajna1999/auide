const express = require('express');
const {ensureAuthenticated, ensureAdmin}=require('../../middlewares/index');
const UserController=require('../../controllers/userController')

const router = express.Router();

// create a staff user
router.post('/',ensureAuthenticated,ensureAdmin, UserController.registerUser);

// get a tenant by staff id
router.get('/:id',ensureAuthenticated,  UserController.getUser);

// update tenant by tenant id
router.put('/:id',ensureAuthenticated, ensureAdmin, UserController.updateUser);

// delete tenant by tenant id
router.delete('/:id',ensureAuthenticated,ensureAdmin ,UserController.deleteUser);

module.exports = router;
