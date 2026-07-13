import express from "express";

import { getAllJobs } from "../Controllers/AllJobs.js";


import protect from "../Middlewares/authMiddleware.js";


const router = express.Router();



router.get(

    "/jobs",

    protect,

    getAllJobs

);



export default router;