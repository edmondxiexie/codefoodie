const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('User');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      console.log('-==-');

      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (!user.validPassword(email, password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  )
);
