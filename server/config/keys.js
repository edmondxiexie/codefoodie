// keys.js

/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod.js');
} else {
    module.exports = require('./dev.js');
}

/* eslint-enable global-require */
