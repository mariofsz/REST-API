var mongoose = require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true 
    },
    last_name:{
        type: String,
        required: true 
    },
    personal_phone:{
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    } 
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

//Get User
module.exports.getUser = function(id, callback){
    User.findById(id, callback);
}

//Add Genre
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

//Update User
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id: id};
    var update = {
        name: user.name
    }
    User.findOneAndUpdate(query, update, options, callback);
}

//Delete User
module.exports.removeUser = function(id, callback){
    var query = {_id: id};
    User.remove(query, callback);
}