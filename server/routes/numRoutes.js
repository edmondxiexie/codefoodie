const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'e' }]);
});

module.exports = router;
