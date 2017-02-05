const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58971ae85d811104f40743bc';
var userId = '589731556e7ef528be9102f1';

if(!ObjectID.isValid(id)){
  console.log('id is invalid');
}

//In mongoose we don't need to convert a string into ObjectID, mongoose does it on its own.
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// }, (err) => {
//   console.log(err);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// }, (err) => {
//   console.log(err);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo', todo);
// }, (err) => {
//   console.log(err);
// });

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('No such user exist.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log(err);
});
