import express from "express";
const router = express.Router();
import {
  getPartner,
  createPartner,
  getPartnerById,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPartner).post(protect, admin, createPartner);
router
  .route("/:id")
  .get(getPartnerById)
  .delete(protect, admin, deletePartner)
  .put(protect, admin, updatePartner);

export default router;
