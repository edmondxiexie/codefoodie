const express = require('express');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = mongoose.model('User');
const { authenticate } = require('../middleware/authenticate');

router.get('/all', (req, res, next) => {
  User.find().then(
    users => {
      res.send({ users });
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.get('/me', authenticate, (req, res) => {
  res.send(req.user);
});

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const user = new User({
    user_id: uuidv4(),
    email,
    password
  });

  user
    .save()
    .then(
      () => {
        return user.generateAuthToken();
      },
      err => {
        res.status(400).send(err);
      }
    )
    .then(token => {
      res.header('x-auth', token).send(user);
    });
});

module.exports = router;
