import express from "express";
import { changePassword } from "../Controllers/change-password.js";
import protect from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.put(

"/change-password",

protect ,

changePassword

);

export default router;