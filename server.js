//Dependencies
var express = require("express");
var mysql = require("mysql");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Initiate the listener.
app.listen(port, function() {
    console.log("we listenin homie");
  });