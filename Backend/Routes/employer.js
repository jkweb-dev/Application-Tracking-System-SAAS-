import express from "express";
import { registerEmployer } from "../Controllers/employer.js";

const router = express.Router();

router.post(

"/register",

registerEmployer

);

export default router;