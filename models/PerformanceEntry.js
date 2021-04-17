const mongoose = require("mongoose");

const PerformanceEntrySchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  entryType: {
    type: String,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  pushed_date: {
    type: Date,
  },
});

module.exports = Book = mongoose.model(
  "performanceEntry",
  PerformanceEntrySchema
);
