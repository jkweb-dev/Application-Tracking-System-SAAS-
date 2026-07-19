import express from "express";
import protect from "../Middlewares/authMiddleware.js";
import { getCandidateProfile } from "../Controllers/CandidateProfile.js";

const router = express.Router();

router.get(

    "/profiles/:profileId",

    protect,

    getCandidateProfile

);

export default router;