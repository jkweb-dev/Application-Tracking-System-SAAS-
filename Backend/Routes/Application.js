import express from "express";

import { applyJob } from "../Controllers/Application.js";

import protect from "../Middlewares/authMiddleware.js";



const router = express.Router();



router.post(

    "/apply/:jobId",

    protect ,

    applyJob

);



export default router;