const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // production assets
  // like main.js or main.css file
  app.use(express.static('../client/dist'));

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));
