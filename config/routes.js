var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

// index page for now
router.get("/", function(req,res){
  res.status(200);
  console.log("rendered Index");
  res.render("index", {
    users: users
  });
})

// About page
router.get("/about", function(req,res){
  res.status(200);
  res.render("about");
})

//testing

var users = [
  {
    id:1,
    first_name: "John",
    last_name: "Joey",
    email: "j@email.com"
  },
  {
    id:2,
    first_name: "Jay",
    last_name: "Joey",
    email: "j1@email.com"
  },
  {
    id:3,
    first_name: "Johnson",
    last_name: "Joey",
    email: "j2@email.com"
  }
]


// Adding User with addUserForm
router.route("/users/add")
  .post(function(req, res){
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
    console.log(newUser);
});



module.exports = router;
