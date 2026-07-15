import express from "express";

import { createProfile } from "../Controllers/JobSeekerProfile.js";


import protect from "../Middlewares/authMiddleware.js";


import uploadResume from "../Middlewares/UploadResume.js";



const router = express.Router();





router.post(

    "/profile",

    protect,

    uploadResume,

    createProfile

);





export default router;