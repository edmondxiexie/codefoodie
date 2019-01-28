// keys.js
const devConfig = require('./dev.js');
const prodConfig = require('./prod.js');

if (process.env.NODE_ENV === 'production') {
    module.exports = prodConfig;
} else {
    module.exports = devConfig;
}
