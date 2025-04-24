import { Router } from "express";
import {
  addAnalytics,
  deleteAnalytics,
  getAllAnalytics,
  getAnalyticsByIP,
  getAnalyticsByPath,
} from "../controllers/analytics";

const router = Router();

router.get("/", getAllAnalytics);
router.get("/:path", getAnalyticsByPath);
router.get("/:ip", getAnalyticsByIP);
router.post("/add", addAnalytics);
router.delete("/:id", deleteAnalytics);

export default router;
