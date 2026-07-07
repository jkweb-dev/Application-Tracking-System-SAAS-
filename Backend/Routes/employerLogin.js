import express from "express";
import loginEmployer from "../Controllers/employerLogin.js";

const router = express.Router();

router.post(

"/login",

loginEmployer

);

export default router;