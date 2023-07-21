const express = require('express');
const ensureAuth=require('../../middlewares/index');
const UserController=require('../../controllers/userController')
const passport=require('passport');

const router = express.Router();

// create a staff user
router.post('/',ensureAuth, UserController.registerUser);

// get a tenant by staff id
router.get('/:id',
    ensureAuth, UserController.getUser
);

// update tenant by tenant id
router.put('/:id',ensureAuth,  UserController.updateUser);

// delete tenant by tenant id
router.delete('/:id',ensureAuth,UserController.deleteUser);

module.exports = router;
