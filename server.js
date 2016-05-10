var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//Express request pipeline
var app = express();

// attach middleware used by all routes
app.use(bodyParser.json());

// attach rinky-dinky routers
// TODO: add versioning to config
app.use("/api/v1", require("./controllers/apiController"));

// start serving
app.listen(process.env.PORT || 9090, function () {
    console.log("Started listening on port", 9090);
});

// Connect to mongodb database
// TODO: configure local vs prod envs
var mongoURI =
    process.env.MONGODB_URI ||
    'mongodb://localhost/shows';

mongoose.connect(mongoURI, function(err, success) {
	if (err) {
		console.log ('ERROR connecting to: ' + mongoURI + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + mongoURI);
	}
});