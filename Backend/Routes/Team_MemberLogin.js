import express from "express";
import { teamMemberLogin } from "../Controllers/Team_MemberLogin.js";


const router = express.Router();

router.post(

"/login",

teamMemberLogin

);

export default router;