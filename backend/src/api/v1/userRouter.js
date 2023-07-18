const express = require('express');
const ensureAuthenticated=require('../../middlewares/index');
const UserController=require('../../controllers/userController')
const passport=require('passport');

const router = express.Router();

// create a staff user
router.post('/',ensureAuthenticated, UserController.registerUser);

// get a tenant by staff id
router.get('/:id',
    ensureAuthenticated, UserController.getUser
);

// update tenant by tenant id
router.put('/:id',ensureAuthenticated,  UserController.updateUser);

// delete tenant by tenant id
router.delete('/:id',ensureAuthenticated,UserController.deleteUser);

module.exports = router;
