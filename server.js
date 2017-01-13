//Server JavaScript
var express = require("express");
var app = express();
var logger = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var methodOverride = require("method-override");
var router = require("./config/routes.js");
var session = require("express-session");

// var passport = require("passport");
// var passportFacebook = require("passport-facebook");

// Static Path
app.use(express.static(path.join(__dirname, "public")));

// Database
var mongoose = require("mongoose");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger("dev"));
app.use(router);

//View Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
var hbs = require("hbs");
var hbsUtils = require("hbs-utils")(hbs);
hbs.registerPartials(__dirname + '/views/partials');
hbsUtils.registerWatchedPartials(__dirname + "/views/partials");

// Express Validator
var expressValidator = require("express-validator");
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// listening on localhost 3000
app.listen(3000, function(req,res, err){
  if (err){
    throw err;
  }
  console.log("hello from port 3000...");
})
