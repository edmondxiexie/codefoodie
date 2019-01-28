const express = require('express');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = mongoose.model('User');
const { authenticate } = require('../middleware/authenticate');

router.get('/all', (req, res, next) => {
    User.find().then(
        (users) => {
            res.send({ users });
        },
        (err) => {
            res.status(400).send(err);
        },
    );
});

router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
});

// api/auth/signup
router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    const user = new User({
        user_id: uuidv4(),
        email,
        password,
    });

    user
        .save()
        .then(
            () => user.generateAuthToken(),
            (err) => {
                res.status(400).send(err);
            },
        )
        .then((token) => {
            res.header('x-auth', token).send(user);
        });
});

// api/auth/login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findByCredentials(email, password)
        .then(user => user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        }))
        .catch((e) => {
            res.status(400).send();
        });
});

// api/auth/logout
router.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(
        () => {
            res.status(200).send();
        },
        () => {
            res.status(400).send();
        },
    );
});

module.exports = router;
