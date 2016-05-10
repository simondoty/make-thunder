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
app.listen(process.env.PORT || 8080, function () {
    console.log("Started listening on port", 8989);
});

// Connect to mongodb database
// TODO: configure this and change DB to events
var mongoURI =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/shows';

mongoose.connect(mongoURI, function(err, success) {
	if (err) {
		console.log ('ERROR connecting to: ' + mongoURI + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + mongoURI);
	}
});