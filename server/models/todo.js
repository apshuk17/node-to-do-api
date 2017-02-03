let mongoose = require('mongoose');

//Creating Todo Model
 let Todo = mongoose.model('Todo', {
   text: {
     type: String,
     required: true,
     minlength: 1,
     trim: true
   },
   completed: {
     type: Boolean
   },
   completedAt: {
     type: Number
   }
 });


//Exporting Todo model
module.exports = {Todo};