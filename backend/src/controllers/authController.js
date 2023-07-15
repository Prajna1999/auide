const passport=require('passport');
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
  function logout(req, res) {
    req.logout();
    res.json({ message: 'Logout successful' });
  }
  
  module.exports = { login, logout };
