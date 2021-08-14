import express from "express";
const router = express.Router();
import {
  getHero,
  createHero,
  getHeroById,
  updateHero,
  deleteHero,
} from "../controllers/heroController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getHero).post(protect, admin, createHero);
router
  .route("/:id")
  .get(getHeroById)
  .delete(protect, admin, deleteHero)
  .put(protect, admin, updateHero);

export default router;
