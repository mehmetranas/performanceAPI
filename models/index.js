const mongoose = require("mongoose");

const PerformanceEntrySchema = new mongoose.Schema({
  FCP: {
    type: Number,
    required: true,
  },
  TTFB: {
    type: Number,
    required: true,
  },
  domLoadEvent: {
    type: Number,
    required: true,
  },
  windowLoadEvent: {
    type: Number,
    required: true,
  },
  staticFilesLoaded: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  hostname: {
    type: String,
    required: true,
  },
});
module.exports = PerformanceEntry = mongoose.model(
  "performanceEntry",
  PerformanceEntrySchema
);
