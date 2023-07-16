// middleware to check if the user is authenticated
const jwt=require('jsonwebtoken');
require('dotenv').config();
// middleware/authMiddleware.js


// const { secretKey } = require('../config/keys');

// const ensureAuthenticated = (req, res, next) => {
//   const token = req.headers.authorization;

//   // Check if the token exists
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_KEY);

//     // Set the user on the request object
//     req.user = decoded;

//     // Continue to the next middleware or route handler
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ message: 'User not logged in' });
//   }
// };
const ensureAuthenticated = (req, res, next) => {

  let token = req.session.jwt;
  let status = {
      message: ""
  }

  if (!token) status.message = "No Token is provided.";

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) status.message = "Failed to Authenticate Request"

  })

  if (req.isAuthenticated()) {
      return next(); // User is authenticated, proceed to the next middleware
  }

  res.status(401).send({ "status": false, message: status.message });


};






const ensureAdmin = (req, res, next) => {
    if (req.user && req.user.user_role === 'admin') {
      next(); // User is admin, continue to the next middleware or route handler
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  


module.exports={ensureAuthenticated, ensureAdmin};