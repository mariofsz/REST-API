//Main REST API Code

'use strict';

//Calling the needed modules 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Connection to the Mongo Database
let users = require('./models/usersdata');

mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;

//GET function to the users list
app.get('/users', (request, response) => {
  
  users.getUsers(function(err, users){
    if(err){
      throw err;
    }
    response.json(users);
  })
  
});

// GET function to a specific user
app.get('/users/:_id', (request, response) => {

  users.getUser(request.params._id, function(err, user){
    if(err){
      throw err;
    }
    response.json(user);
  })
  
});
  

//POST function to insert a new user
app.post('/users', (request, response) => {

  var user = request.body;
  users.create(user, function(err, user){
    if(err){
      throw err;
    }
    response.json(user);
  });
  
});

//PUT function to update an user (doesn't working properly)
app.put('/users/:_id', (request, response) => {

  var id = request.params._id;
  var user = request.body;
  users.updateUser(id, user, {}, function(err, user){
    if(err){
      throw err;
    }
    response.json(user);
  });
  
});


//DELETE function to remove an user
app.delete('/users/:_id', (request, response) => {
  
  var id = request.params._id;
  users.removeUser(id, function(err, user){
    if(err){
      throw err;
    }
    response.json(user);
  });
  
});

//Console message, related to the status of the connection.
const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);
  
});
