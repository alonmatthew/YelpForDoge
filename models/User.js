var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  Name: {type: String, required: true},
  Username: {type: String, required: true},
  Password: {type: Number, required: true},
  Email: {type: String, required: true},
});

var User = mongoose.model('User', userSchema);
module.exports = User
