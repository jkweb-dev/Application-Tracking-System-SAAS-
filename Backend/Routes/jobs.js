import express from "express";

import { createJob } from "../Controllers/jobs.js";
import { getEmployerJobs } from "../Controllers/jobs.js";
import { getSingleJob } from "../Controllers/jobs.js";
import { updateJob } from "../Controllers/jobs.js";
import { deleteJob } from "../Controllers/jobs.js";

import protect from "../Middlewares/authMiddleware.js";

const router = express.Router();



router.post(

    "/create",

    protect,

    createJob

);



router.get(

    "/",

    protect,

    getEmployerJobs

);



router.get(

    "/:id",

    protect,

    getSingleJob

);



router.put(

    "/:id",

    protect,

    updateJob

);



router.delete(

    "/:id",

    protect,

    deleteJob

);



export default router;