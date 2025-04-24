const { Router } = require("express");
const {
  addAnalytics,
  deleteAnalytics,
  getAllAnalytics,
  getAnalyticsByIP,
  getAnalyticsByPath,
} = require("../controllers/analytics.js");

const router = Router();

router.get("/", getAllAnalytics);
router.get("/:path", getAnalyticsByPath);
router.get("/:ip", getAnalyticsByIP);
router.post("/add", addAnalytics);
router.delete("/:id", deleteAnalytics);

module.exports = { analytics: router };
