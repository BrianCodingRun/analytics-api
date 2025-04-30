const { Analytics } = require("../models/analytics.models.js");
const { connectToDatabase } = require("../config/database.js");

const getAllAnalytics = async (req, res) => {
  try {
    await connectToDatabase();
    const analytics = await Analytics.find({});
    res.status(200).json(analytics);
  } catch (error) {
    console.error("Error in getAllAnalytics:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAnalyticsByPath = async (req, res) => {
  try {
    const { path } = req.params;
    const analytics = await Analytics.find({ path });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAnalyticsByIP = async (req, res) => {
  try {
    const { ip } = req.params;
    const analytics = await Analytics.find({ ip });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const addAnalytics = async (req, res) => {
  try {
    const events = req.body;
    await connectToDatabase();
    const analytics = await Analytics.insertMany(events);
    res.status(201).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const deleteAnalytics = async (req, res) => {
  try {
    const { id } = req.params;
    const analytics = await Analytics.findByIdAndDelete(id);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  addAnalytics,
  deleteAnalytics,
  getAllAnalytics,
  getAnalyticsByIP,
  getAnalyticsByPath,
};
