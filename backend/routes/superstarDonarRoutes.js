import express from "express";
const router = express.Router();
import {
  getSuperstarDonar,
  createSuperstarDonar,
  getSuperstarDonarById,
  updateSuperstarDonar,
  deleteSuperstarDonar,
} from "../controllers/superstarDonarController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getSuperstarDonar)
  .post(protect, admin, createSuperstarDonar);
router
  .route("/:id")
  .get(getSuperstarDonarById)
  .delete(protect, admin, deleteSuperstarDonar)
  .put(protect, admin, updateSuperstarDonar);

export default router;
