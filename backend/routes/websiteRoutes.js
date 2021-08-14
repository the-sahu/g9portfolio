import express from "express";
const router = express.Router();
import { homePage, aboutPage } from "../controllers/website/homeController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(homePage);
router.route("/about").get(aboutPage);
// router.route('/:id/comments').post(protect, createArticleComment)

export default router;
