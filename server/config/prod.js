// prod.js - keys in Heroku

module.exports = {
    // mLab MongoDB URI
    MONGO_URI: process.env.MONGO_URI,

    // JWT SecretOrKey
    JWT_SECRET_OR_KEY: process.env.JWT_SECRET_OR_KEY,
};
