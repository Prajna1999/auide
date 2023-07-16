const passport=require('../middlewares/passport');
const bcrypt=require('bcrypt');
const User=require('../models').User;

// Login functionality
async function login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
  
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
  
        return res.json({ message: 'Login successful' });
      });
    })(req, res, next);
  }
  
  // Logout functionality
  function logout(req, res,next) {
    req.logout((err)=>{
        if(err) return next(err)
        res.json({ message: 'Logout successful' });
    });
   
  }
  
async function signup(req,res,next){
    try{
        const {email, password}=req.body;

        // check if the current user already exist
        const existingUser=await User.findOne({
            where:{user_email:email}
        })

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
          }
          
        // hashs the password
        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=await User.create({
            user_email:email,
            user_password:hashedPassword,
            user_role:'staff',
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.json({message:'signup successful'})
    }catch(error){
        return next(error);
    }
}

  module.exports = { login, logout,signup };
