import express from "express";
import { deleteAccount } from "../Controllers/delete-account.js";
import protect from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.delete(

"/delete-account",

protect ,

deleteAccount

);

export default router;