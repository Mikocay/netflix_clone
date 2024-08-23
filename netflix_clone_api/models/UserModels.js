const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 255,
  },

  likedMovies: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('users', userSchema);
