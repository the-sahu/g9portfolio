import express from "express";
const router = express.Router();
import {
  getStats,
  createStats,
  getStatsById,
  updateStats,
  deleteStats,
} from "../controllers/statsController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getStats).post(protect, admin, createStats);
router
  .route("/:id")
  .get(getStatsById)
  .delete(protect, admin, deleteStats)
  .put(protect, admin, updateStats);

export default router;
