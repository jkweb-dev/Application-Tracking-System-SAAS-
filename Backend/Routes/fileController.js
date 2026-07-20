import express from "express";

import { viewResume } from "../Controllers/fileController.js";

const router = express.Router();



router.get(

    "/resume/:filename",

    viewResume

);



export default router;