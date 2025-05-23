const { Schema, model, models } = require("mongoose");

const AnalyticsSchema = new Schema({
  timestamp: { type: Date, required: true },
  pathname: { type: String, required: true },
  duration: { type: Number, required: true },
  ip: { type: String, required: true },
  location: {
    country: { type: String, required: true },
    city: { type: String, required: true },
  },
  device: { type: String, required: true },
  browser: { type: String, required: true },
  os: { type: String, required: true },
});

const Analytics = models.Analytics || model("Analytics", AnalyticsSchema);
module.exports = { Analytics };
