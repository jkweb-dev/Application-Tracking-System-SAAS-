import express from "express";
import registerJobSeeker from "../Controllers/jobseeker.js";

const router = express.Router();

router.post(

"/register",

registerJobSeeker

);

export default router;