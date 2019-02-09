const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema({
    text: String,
    completed: Boolean,
});

mongoose.model('Todo', TodoSchema);
