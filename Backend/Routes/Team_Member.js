import express from "express";
import { addTeamMember } from "../Controllers/Team_Member.js";
import protect from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post(

"/team/addMember",

protect ,

addTeamMember

);

export default router;