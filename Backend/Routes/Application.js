import express from "express";

import { applyJob, getMyApplications } from "../Controllers/Application.js";

import protect from "../Middlewares/authMiddleware.js";



const router = express.Router();



router.post(

    "/apply/:jobId",

    protect ,

    applyJob

);

router.get(

    "/applications",

    protect ,

    getMyApplications

);



export default router;