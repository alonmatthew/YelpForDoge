// Control User Action
var User = require("../models/user.js");

function returnError (err){
  return console.log(err);
}

function renderIndexPage(req,res){
  res.status(200);
  console.log("rendered Index");
  res.render("../views/index", {user: req.user});
};

function addingUser(req, res){
  //validation checking
  req.checkBody("userName", 'First name is required').notEmpty(); //Username
  req.checkBody("firstName", 'Last name is required').notEmpty();  //First name
  if(req.body.email == ''){ // email
    req.checkBody("email", 'Email is require').notEmpty();
  }
  else {
    req.checkBody("email", 'Email is not an email').isEmail();
  }

  var errors = req.validationErrors();

  if (errors){
    res.render("index", {
      errors: errors
    });
    console.log("errors");
  }
  else {
    var newUser = {
      first_name: req.body.userName,
      last_name: req.body.firstName,
      email: req.body.email
    }
    console.log(req.body.email);
    console.log(newUser);
    console.log("Success!");
  }
}


module.exports = {
  renderIndexPage: renderIndexPage,
  addingUser: addingUser
}
