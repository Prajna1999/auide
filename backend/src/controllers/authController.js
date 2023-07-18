const passport=require('passport');
const bcrypt=require('bcrypt');
const User=require('../models').User;
const jwt=require('jsonwebtoken')

// Login functionality

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by their username
    const user = await User.findOne({ where: {user_email:email } });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.user_password);

    if (!passwordMatch) {
      // Passwords don't match
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create a JWT token with the user ID as the payload
    const token = jwt.sign({ sub: user.id }, "jwtSecretKey", { expiresIn: '1h' });

    // Send the token in the response
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
