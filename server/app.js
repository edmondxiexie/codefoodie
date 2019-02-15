const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

// Models
require('./models/User');
require('./models/Profile');

// Routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(keys.MONGO_URI).then(
    () => {
        console.log('Connected to MongoBD server.');
    },
    (err) => {
        console.log('Unable to connect to MongoDB server.');
        console.log('Error: ', err);
    },
);

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// API Routers
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

console.log(`****** NODE_ENV: ${process.env.NODE_ENV || 'develop'} ******`);

if (process.env.NODE_ENV === 'production') {
    // production assets
    // like main.js or main.css file
    app.use(express.static('../client/dist'));

    // index.html file if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));
