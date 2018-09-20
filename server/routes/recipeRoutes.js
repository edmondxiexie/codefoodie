const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const router = express.Router();

const Recipe = mongoose.model('Recipe');

router.get('/all', (req, res, next) => {
  Recipe.find().then(
    recipes => {
      res.send({ recipes });
    },
    err => {
      res.status(400).send(err);
    }
  );
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
