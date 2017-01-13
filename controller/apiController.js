/************
 API Routing
*************/

var User = require("../models/user.js");
// var Pet = require("../models/pets.js")

function howToGetAPI(req,res) {
  res.json({
    message: "This is the API for YelpForDoge",
    documentation_url: "https://github.com/takshingli810/YelpForDoge",
    endpoints:[{method:"GET", path: "/api", description: "describle Available endpoints"}]
  });
}
// Getting User
function gettingUsersAPI(req,res){
  User.find(function(err,users){
    if(err){
      console.log("Error: " + err)
    }
    res.json({users:users});
  });
}


module.exports = {
  howToGetAPI: howToGetAPI,
  gettingUsersAPI: gettingUsersAPI
}
