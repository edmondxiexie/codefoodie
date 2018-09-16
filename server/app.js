const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/User');
require('./models/Todo');

// mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // production assets
  // like main.js or main.css file
  app.use(express.static('client/dist'));

  // index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
  });
}

app.get('/api/users', function(req, res, next) {
  const nums = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'e' }
  ];
  res.json(nums);
});

// const Todo = mongoose.model('Todo');

// const newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then(
//   doc => {
//     console.log('Saved todo', doc);
//   },
//   e => {
//     console.log('Unable to save todo!');
//   }
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports.app = app;
