//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//Connecting to Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Successfully connected to MongoDB Server');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate(
//   {_id: new ObjectID('588d9cc7e7b0b984d742ad3b')},
//   {$set: {completed: true}},
//   {returnOriginal: false}
// ).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate(
  {_id: new ObjectID('588d75bb8f57f10489bd4313')},
  {$set: {name: 'Akash Chopra'}, $inc: {age: 1}},
  {returnOriginal: false}
).then((result) => {
  console.log(result);
});



  //Closing the Database connection.
  db.close();
});
