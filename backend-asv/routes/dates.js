const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

// Load Dates model

const appointments = require("../models/appointments");

// @route GET api/Datess/test
// @description tests Datess route
// @access Public
router.get("/test", (req, res) => res.send("Dates route testing!"));

// @route GET api/Datess
// @description Get all Datess
// @access Public
router.get("/", (req, res) => {
  appointments
    .find()
    .then((dates) => res.json(dates))
    .catch((err) => res.status(404).json({ noDatessfound: "No Datess found" }));
});

// @route GET api/Datess/:id
// @description Get single Dates by id
// @access Public
router.get("/:id", (req, res) => {
  Appointments.findById(req.params.id)
    .then((date) => res.json(date))
    .catch((err) => res.status(404).json({ noDatesfound: "No Dates found" }));
});

// @route GET api/Dates
// @description add/save Dates
// @access Public
router.post("/add", async (req, res) => {
  const DateModel = appointments({
    Titel: req.body.Titel,
    author: req.body.author,
    descritpion: req.body.descritpion,
    time: req.body.time,
    location: req.body.location,
  });
  await DateModel.save()
    .then((Forms) => {
      res.json(Forms);
    })
    .catch((error) => {
      res.json(error);
    });
});

// @route GET api/Datess/:id
// @description Update Dates
// @access Public
router.put("/:id", (req, res) => {
  appointments
    .findByIdAndUpdate(req.params.id, req.body)
    .then((date) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/Datess/:id
// @description Delete Dates by id
// @access Public
router.delete("/:id", (req, res) => {
  appointments
    .findByIdAndRemove(req.params.id, req.body)
    .then((date) => res.json({ mgs: "Dates entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a Dates" }));
});

module.exports = router;
