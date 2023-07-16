const passport = require("passport");
require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pg = require("pg");
const { User } = require("../models");
const { Sequelize } = require("sequelize");

const authUser = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: 86400 });
};

const pool = new pg.Pool({
  //extract to env varibles later
  connectionString: "postgresql://postgres:1234@localhost/auide",
});
// LocalStrategy for passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: { user_email: email },
        });

        // if no user found
        if (!user) {
          return done(null, false, { message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.user_password);
        // // if invalid password provided
        if (!isMatch) {
          return done(null, false, { message: "Invalid Password" });
        }
        // if email and password match, return the user object with the access token
        const token = authUser(user);
        return done(null, { user, token });
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
);

// serlialize and deserialize user from storing and retrieving from the sessions
passport.serializeUser((user, done) => {
  done(null, { email: user.user_email, token: user.token });
});
// deserializing users
passport.deserializeUser(async (email, done) => {
  try {
    const user = await User.findOne({
      where: { user_email: email },
    });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = passport;
