import express from "express";
const router = express.Router();
import {
  getCertificates,
  createCertificates,
  getCertificatesById,
  updateCertificates,
  deleteCertificates,
} from "../controllers/certificatesController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getCertificates).post(protect, admin, createCertificates);
router
  .route("/:id")
  .get(getCertificatesById)
  .delete(protect, admin, deleteCertificates)
  .put(protect, admin, updateCertificates);

export default router;
