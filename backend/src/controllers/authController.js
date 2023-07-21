const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Replace '../models/User' with the correct path to your User model

const secretKey = 'your_secret_key_here'; // Replace with your actual secret key for JWT token

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ email });

    // If the user is not found or the password doesn't match, return an error
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // User is authenticated, generate a JWT token
    const payload = {
      sub: user.id,
      email: user.email,
      // Add any other user information you want to include in the token
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token will expire in 1 hour

    // Return the token to the client
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = loginUser;
