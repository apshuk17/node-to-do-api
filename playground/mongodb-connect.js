//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//Connecting to Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Successfully connected to MongoDB Server');

  //Inserting a record into Database.
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Apoorva Shukla',
  //   age: 31,
  //   location: 'Delhi'
  // }, (err, result) => {
  //     if(err) {
  //        return console.log('Unable to insert todo', err);
  //      }
  //      console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Closing the Database connection.
  db.close();
});
