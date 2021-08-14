import express from "express";
const router = express.Router();
import {
  getNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getNews).post(protect, admin, createNews);
router
  .route("/:id")
  .get(getNewsById)
  .delete(protect, admin, deleteNews)
  .put(protect, admin, updateNews);

export default router;
