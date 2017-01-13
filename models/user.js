var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {type: String, require: true},
  firstName: {type: String, require: true},
  email: {type: String, require: true},
  create_date:{ type: Date, default: Date.now}
});


var User = mongoose.model("User", userSchema);
module.exports = User;
