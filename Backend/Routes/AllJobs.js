import express from "express";

import { getAllJobs, getSingleJob } from "../Controllers/AllJobs.js";


import protect from "../Middlewares/authMiddleware.js";


const router = express.Router();



router.get(

    "/jobs",

    protect,

    getAllJobs

);

router.get(

    "/jobs/:id",

    protect,

   getSingleJob

);



export default router;