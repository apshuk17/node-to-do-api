//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//Connecting to Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Successfully connected to MongoDB Server');

//deleteMany
// db.collection('Todos').deleteMany({completed: true}).then(
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(`Unable to perform delete operation. ${err}`);
//   });

//deleteOne
// db.collection('Todos').deleteOne({text: `Something to do`}).then(
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(`Unable to perform delete operation. ${err}`);
//   });

//findOneAndDelete
db.collection('Todos').findOneAndDelete({text: `Something to do`}).then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(`Unable to perform delete operation. ${err}`);
  });

  //Closing the Database connection.
  db.close();
});
