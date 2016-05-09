var mongoose = require("mongoose");

var eventSchema = mongoose.Schema({
	date: Date,
	band: String,
	venue: String,
	time: String,
	price: Number,
	link: String
});

module.exports = mongoose.model("event", eventSchema, "showList");