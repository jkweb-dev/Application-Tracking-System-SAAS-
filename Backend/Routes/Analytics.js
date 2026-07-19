import express from "express";

import { getEmployerAnalytics } from "../Controllers/Analytics.js";


import protect from "../Middlewares/authMiddleware.js";


const router = express.Router();



router.get(

    "/analytics",

    protect,

  getEmployerAnalytics

);





export default router;