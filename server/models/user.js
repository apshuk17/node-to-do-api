let mongoose = require('mongoose');

//Creating User Model
let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//Exporting User model

module.exports = {User};