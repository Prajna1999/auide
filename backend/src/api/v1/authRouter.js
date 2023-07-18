const express=require('express')
const passport=require('passport');
const authController=require('../../controllers/authController');

const router=express.Router();

router.post('/login', authController.loginUser);
// router.get('/logout', authController.logout);
// router.get('/signup',authController.signup );
module.exports=router