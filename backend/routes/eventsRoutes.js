import express from "express";
const router = express.Router();
import {
  getEvents,
  createEvents,
  getEventsById,
  updateEvents,
  deleteEvents,
} from "../controllers/eventsController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getEvents).post(protect, admin, createEvents);
router
  .route("/:id")
  .get(getEventsById)
  .delete(protect, admin, deleteEvents)
  .put(protect, admin, updateEvents);

export default router;
