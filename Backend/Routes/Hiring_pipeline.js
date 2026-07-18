import express from "express"

import protect from "../Middlewares/authMiddleware.js";

import { getJobApplications, updateApplicationStatus } from "../Controllers/Hiring_Pipeline.js";

const router = express.Router();

router.get(

    "/jobs/:jobId/applications",

    protect,

    getJobApplications

);

router.put(

    "/applications/:applicationId/status",

    protect,

    updateApplicationStatus

);

export default router