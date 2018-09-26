const mongoose = require('mongoose');
const User = mongoose.model('User');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');
  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch(e => {
      // 401 authentication required
      res.status(401).send();
    });
};

module.exports = { authenticate };
