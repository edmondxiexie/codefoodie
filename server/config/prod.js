// prod.js - keys in Heroku

module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  secretOrKey: process.env.SECRET_OR_KEY,
};
