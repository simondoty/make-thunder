var mongoose = require("mongoose");
var Event = require("../data/eventSchema");
var router = require("express").Router();

// attach our single get route for now
router.route("/shows/:id?").get(getEvents);

function getEvents(req, res) {
    // res.json({});
    var params = req.params.id ? {id: req.params.id} : {};
    Event.find({}, function (err, events) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(events);
        }
    });
}

// function deleteShow(req, res) {
//     var id = req.params.id;
//     Show.remove({ _id: id }, function (err, removed) {
//         if (err)
//             res.send(err)
//         else
//             res.json(removed);
//     });
// }

module.exports = router;