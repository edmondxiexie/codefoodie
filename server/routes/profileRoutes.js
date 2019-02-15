const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();

const Profile = mongoose.model('profiles');
const User = mongoose.model('users');


// @route   GET api/profile/test
// @desc    Test profile route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'Profile works',
}));


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Profile
            .findOne({ user: req.user.id })
            .then((profile) => {
                if (!profile) {
                    errors.noProfile = 'There is no profile for this user';
                    return res.status(404).json(errors);
                }
                return res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    },
);


// @route   POST api/profile
// @desc    Create user profile
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const profileFields = {};
        profileFields.user = req.user.id;

        const errors = {};

        Profile
            .findOne({ user: req.user.id })
            .then((profile) => {
                if (profile) {
                    // Update
                    Profile.findOneAndUpdate(
                        { user: req.user.id },
                        { $set: profileFields },
                        { new: true },
                    ).then(updated_profile => res.json(updated_profile));
                } else {
                    // Create
                    new Profile(profileFields)
                        .save()
                        .then(new_profile => res.json(new_profile));
                }
            })
            .catch(err => res.status(404).json(err));
    },
);

module.exports = router;
