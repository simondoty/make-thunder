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
// TODO: configure this and change DB to events
console.log(process.env.MONGOLAB_URI);
var mongoURI =
    "mongodb://heroku_w2chrbqj:nob0c355h5mjkp7ogd8h5hum8k@ds055565.mlab.com:55565/heroku_w2chrbqj" ||
    'mongodb://localhost/shows';

mongoose.connect(mongoURI, function(err, success) {
	if (err) {
		console.log ('ERROR connecting to: ' + mongoURI + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + mongoURI);
	}
});