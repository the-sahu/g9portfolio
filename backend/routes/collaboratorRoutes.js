import express from "express";
const router = express.Router();
import {
  getCollaborator,
  createCollaborator,
  getCollaboratorById,
  updateCollaborator,
  deleteCollaborator,
} from "../controllers/collaboratorController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getCollaborator).post(protect, admin, createCollaborator);
router
  .route("/:id")
  .get(getCollaboratorById)
  .delete(protect, admin, deleteCollaborator)
  .put(protect, admin, updateCollaborator);

export default router;
