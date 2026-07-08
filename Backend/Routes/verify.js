import express from "express";

import { verifyUser } from "../Controllers/verify.js";

const router = express.Router();


router.get(

   "/verify",

   verifyUser

);


export default router;