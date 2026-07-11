import express from "express";
import { getTeamMembers } from "../Controllers/getTeam.js";
import protect from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get(

"/team",

protect ,

getTeamMembers

);

export default router;