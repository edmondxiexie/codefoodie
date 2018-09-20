const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  recipe_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  ingredients: Array,
  author: String,
  category: String,
  link: String
});

mongoose.model('Recipe', RecipeSchema);
