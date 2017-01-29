//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//Connecting to Database
MongoClient.connect('mongodb://localhost:27017/video', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Successfully connected to MongoDB Server');

//Retreiving from Database
// db.collection('movies').find({year: 1968}).count().then((docs) => {
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to find', err);
// });

//Passing an ObjectID as a parameter
db.collection('movies').find({
  _id: new ObjectID('5692a7d224de1e0ce2dfe172')
}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to find', err);
});

  //Closing the Database connection.
  db.close();
});
