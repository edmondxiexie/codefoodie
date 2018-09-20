const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const router = express.Router();

const Recipe = mongoose.model('Recipe');

router.get('/', (req, res, next) => {
  const nums = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'e' }
  ];
  res.json(nums);
});

router.post('/new', (req, res) => {
  const { title, ingredients, author, category, link } = req.body;

  const recipe = new Recipe({
    recipe_id: shortid.generate(),
    title,
    ingredients,
    author,
    category,
    link
  });

  recipe.save().then(
    doc => {
      console.log('Saved new recipe!');
      res.send(doc);
    },
    err => {
      console.log('Unable to save recipe.');
    }
  );
});

module.exports = router;
