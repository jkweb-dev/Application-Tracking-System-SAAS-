import express from "express";

import { createProfile , getProfile, updateProfile } from "../Controllers/JobSeekerProfile.js";


import protect from "../Middlewares/authMiddleware.js";


import uploadResume from "../Middlewares/UploadResume.js";



const router = express.Router();





router.post(

    "/profile",

    protect,

    uploadResume,

    createProfile

);

router.get(

    "/profile",

    protect,

  getProfile

);

router.put(

    "/profile",

    protect,

    uploadResume,

    updateProfile

);



export default router;