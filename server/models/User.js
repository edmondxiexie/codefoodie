const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  first_name: String,
  last_name: String,
  password: {
    type: String,
    required: true
  }
});

mongoose.model('User', UserSchema);
