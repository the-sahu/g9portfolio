import express from "express";
const router = express.Router();
import { sendContact } from "../controllers/contactController.js";
router.route("/").post(sendContact);

export default router;