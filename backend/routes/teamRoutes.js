import express from "express";
const router = express.Router();
import {
  getTeam,
  createTeam,
  getTeamById,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getTeam).post(protect, admin, createTeam);
router
  .route("/:id")
  .get(getTeamById)
  .delete(protect, admin, deleteTeam)
  .put(protect, admin, updateTeam);

export default router;
