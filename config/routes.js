var express = require("express");
var router = express.Router();
var usersController = require("../controller/usersController.js");
var apiController = require("../controller/apiController.js");


// index page for now
router.route("/")
  .get(usersController.renderIndexPage);

// Adding User with addUserForm
router.route("/users/add")
  .post(usersController.addingUser);

// API routes
router.route("/api")
  .get(apiController.howToGetAPI);

//UserAPI
router.route("/api/users")
  .get(apiController.gettingUsersAPI);
//

// About page
router.get("/about", function(req,res){
  res.status(200);
  res.render("about");
})


module.exports = router;
