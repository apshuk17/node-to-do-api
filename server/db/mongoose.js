let mongoose = require('mongoose');

//Using Promises with mongoose
mongoose.Promise = global.Promise;

//Connecting to Database
mongoose.connect('mongodb://localhost:27017/TodoApp');

//exporting mongoose
module.exports = {mongoose};