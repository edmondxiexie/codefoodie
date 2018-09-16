const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  password: String
});

mongoose.model('User', UserSchema);
