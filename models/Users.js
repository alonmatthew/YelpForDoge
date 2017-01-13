var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  Name: {type: String, required: true},
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema);
