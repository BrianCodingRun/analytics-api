import { Analytics } from "../models/analytics";

const getAllAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find({});
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAnalyticsByPath = async (req, res) => {
  try {
    const { path } = req.params;
    const analytics = await Analytics.find({ path });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAnalyticsByIP = async (req, res) => {
  try {
    const { ip } = req.params;
    const analytics = await Analytics.find({ ip });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addAnalytics = async (req, res) => {
  try {
    const { path, duration, ip, location, device, browser, os } = req.body;
    const analytics = new Analytics({
      path,
      duration,
      ip,
      location,
      device,
      browser,
      os,
    });
    await analytics.save();
    res.status(201).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteAnalytics = async (req, res) => {
  try {
    const { id } = req.params;
    const analytics = await Analytics.findByIdAndDelete(id);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  addAnalytics,
  deleteAnalytics,
  getAllAnalytics,
  getAnalyticsByIP,
  getAnalyticsByPath,
};
