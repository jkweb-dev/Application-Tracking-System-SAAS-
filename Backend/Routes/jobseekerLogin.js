import express from "express";
import loginJobSeeker from "../Controllers/jobseekerLogin.js";

const router = express.Router();

router.post(

"/login",

loginJobSeeker

);

export default router;