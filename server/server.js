//Library imports
let express = require('express');
let bodyParser = require('body-parser');

//Local imports using object destructuring
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {ObjectID} = require('mongodb');

//Defining port
const port = process.env.PORT || 3000;

//Initiating our app
let app = express();

//parsing request body
app.use(bodyParser.json());

//Sending POST request
app.post('/todos', (req, res) => {

    //Creating a new Todo item
    let newTodo = new Todo({
        text: req.body.text,
    });

    //Saving this item to database
    newTodo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

//Sending GET request to retrieve all todos
app.get('/todos', (req, res) => {

  Todo.find({}).then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

//Sending GET request along with id parameter
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
      res.send({todo});
  }, (err) => {
      res.status(400).send();
  });
});

//app listening
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});

//exporting app
module.exports = {app};
