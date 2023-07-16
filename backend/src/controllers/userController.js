const  User  = require('../models').User;
const bcrypt=require('bcrypt');

const UserController = {
  // Create a new user
  registerUser:async(req,res)=>{
    const {user_name, user_email, user_role}=req.body;

    try{
      const exisitngUser=await User.findOne({
        where:{user_email}
      });

      if(exisitngUser){
        return res.status(400).json({message:'User already exists'});

      }
      // generate a default password for the new user
      const defaultPassword='password';

      const hashedPassword=await bcrypt.hash(defaultPassword, 10);

      // create a new user
      const newUser=await User.create({
        user_name,
        user_email,
        user_password:hashedPassword,
        user_role,
      });
      res.status(201).json({message:'User registered successfully', user:newUser});

    }catch(error){
      console.error(error);
      res.status(500).json({message:'Internal Server Error'});

    }
  },
  updateUser:async(req,res)=>{
    const {id}=req.params;
    const {user_name, user_email, user_role}=req.body;

    try{
      const user=await User.findByPk(id);

      // check if the user exists
      if(!user) return res.status(404).json({message:'User not found'});

      // update the user details
      user.user_name=user_name;
      user.user_email=user_email;
      user.user_role=user_role;

      await user.save();
      res.status(201).json({message: "User updated successfully", user});
    }catch(error){
      console.error(error);
      res.status(500).json({message:'Internal Server Error'})
    }
  },
  deleteUser:async(req,res)=>{
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Delete the user
      await user.destroy();
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },
  getAllUsers:async(req,res)=>{
    try {
      const users = await User.findAll({ attributes: ['user_name', 'user_email', 'user_role'] });
  
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },
  getUser:async(req,res)=>{
    const {id}=req.params;
    try{
      const user = await User.findByPk(id);
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).send(user)
    }catch(error){
      console.error(error);
      res.status(500).json({message:"Server Error"});
    }
  }
};

module.exports = UserController;
