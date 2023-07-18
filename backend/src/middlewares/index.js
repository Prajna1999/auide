// middleware/ensureAuthenticated.js

const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../config/keys');

const ensureAuthenticated = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')|| req.header('authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized token' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "jwtSecretKey");

    // Attach the user ID from the token to the request object
    req.userId = decoded.sub;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = ensureAuthenticated;
