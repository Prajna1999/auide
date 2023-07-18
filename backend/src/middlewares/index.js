const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');

// Your secret key for signing and verifying JWT tokens
const secretKey = 'your_secret_key_here';

// Sample privileged users' IDs (You should replace these with your actual user IDs)
const privilegedUserIds = [1, 2, 3];

// Configure Passport JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      // Assuming you have a User model or database to retrieve user information
      // You can replace this with your own method of fetching user data based on jwtPayload.sub
      const user = await User.findById(jwtPayload.sub);

      if (user) {
        // Attach the user object to the request for access in the route handlers
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

// Middleware function to ensure authentication and privileged access
const ensureAuth = (req, res, next) => {
  // Use Passport to authenticate the request
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the authenticated user is privileged
    if (privilegedUserIds.includes(user.id)) {
      // Attach the user object to the request for access in the route handlers
      req.user = user;
      return next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  })(req, res, next);
};

module.exports = ensureAuth;
