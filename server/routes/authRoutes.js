const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');

const router = express.Router();

const User = mongoose.model('users');


// @route   GET api/auth/test
// @desc    Test auth route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'Auth works',
}));


// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    User
        .findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            }

            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        });
});


// @route   GET api/auth/login
// @desc    Login User / Return JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User
        .findOne({ email })
        .then((user) => {
            // Check for user
            if (!user) {
                return res.status(404).json({ email: 'User not found' });
            }

            // Check Password
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    // User Matched

                    const payload = { id: user.id, email: user.email };

                    // Sign Token
                    jwt.sign(
                        payload,
                        keys.JWT_SECRET_OR_KEY,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token,
                            });
                        },
                    );
                } else {
                    return res.status(400).json({ password: 'Password incorrect' });
                }
            });
        });
});


// @route   GET api/auth/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
    });
});


module.exports = router;
