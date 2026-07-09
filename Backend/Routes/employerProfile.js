import express from "express";

import { getEmployerProfile } from "../Controllers/employerProfile.js";
import { updateEmployerProfile } from "../Controllers/employerProfile.js";


import protect from "../Middlewares/authMiddleware.js";


const router = express.Router();



router.get(

    "/profile",

    protect,

    getEmployerProfile

);



router.put(

    "/profile",

    protect,

    updateEmployerProfile

);



export default router;