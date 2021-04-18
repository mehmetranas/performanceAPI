const express = require("express");
const router = express.Router();

// Load PerformanceEntry model
const PerformanceEntries = require("../../models");

// @route GET api/performanceEntries/test
// @description tests PerformanceEntries route
// @access Public
router.get("/test", (req, res) =>
  res.json({ message: "PerformanceEntries route testing!" })
);

// @route GET api/performanceEntries
// @description Get all PerformanceEntries
// @access Public
router.get("/all", (req, res) => {
  PerformanceEntry.find()
    .then((entries) => res.json(entries))
    .catch((err) =>
      res.status(404).json({ noentriesfound: "No Entries found" })
    );
});

// @route GET api/performanceEntry/:id
// @description Get single PerformanceEntry by id
// @access Public
router.get("/:id", (req, res) => {
  PerformanceEntry.findById(req.params.id)
    .then((entries) => res.json(entries))
    .catch((err) =>
      res.status(404).json({ noentriesfound: "No Entries found" })
    );
});

// @route GET api/performanceEntry
// @description add/save performanceEntry
// @access Public
router.post("/", (req, res) => {
  PerformanceEntry.create(req.body)
    .then((entry) => res.json({ msg: "Entry added successfully", entry }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this entry" })
    );
});

// @route GET api/performanceEntry/:id
// @description Update performanceEntry
// @access Public
router.put("/:id", (req, res) => {
  PerformanceEntry.findByIdAndUpdate(req.params.id, req.body)
    .then((entry) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/performanceEntry/:id
// @description Delete performanceEntry by id
// @access Public
router.delete("/:id", (req, res) => {
  PerformanceEntry.findByIdAndRemove(req.params.id, req.body)
    .then((entry) => res.json({ mgs: "Entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a entry" }));
});

module.exports = router;
