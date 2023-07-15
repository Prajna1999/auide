const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');
const pg=require('pg');
const {User}=require('../models');
const {Sequelize}=require('sequelize')


const setupPassport=()=>{
    const pool=new pg.Pool({
        //extract to env varibles later
        connectionString:"postgresql://postgres:1234@localhost/auide"
    })
    // LocalStrategy for passport
    passport.use(new LocalStrategy(
        {
            usernameField:'email',
            passwordField:'password'
        },
       async(email, password, done)=>{
        try{
            const user=await User.findOne({
                where:{user_email:email}
    
    
            });
    
            // if no user found
            if(!user){
                return done(null, false, {message:'Invalid email'});
            }
    
            // const isMatch=await bcrypt.compare(password, user.user_password);
            // if invalid password provided
            // if(!isMatch){
            //     return done(null, false, {message:'Invalid Password'});
            // }
            // if email and password match, return the user object
            return done(null, user)
        }catch(error){
            console.log(error)
            return done(error);
        }
       }
    ));
    
    // serlialize and deserialize user from storing and retrieving from the sessions
    passport.serializeUser((user, done)=>{
        done(null, user.user_email);
    });
    // deserializing users
    passport.deserializeUser(async(email, done)=>{
        try{
            const user=await User.findOnde({
                where:{user_email:email}
            });
            return done(null, user);
        }catch(error){
            return done(error)
        }
    })
    
}
module.exports={setupPassport}