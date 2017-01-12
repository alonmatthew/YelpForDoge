var express = require("express");
var router = express.Router();

// index page for now
router.get("/", function(req,res){
  res.status(200);
  console.log("rendered Index");
  res.render("index");
})


module.exports = router;
