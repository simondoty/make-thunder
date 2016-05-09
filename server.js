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
//mongoose.connect("mongodb://localhost/shows");