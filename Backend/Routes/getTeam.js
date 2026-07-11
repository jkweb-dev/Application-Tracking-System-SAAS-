import express from "express";
import { getTeamMember, getTeamMembers } from "../Controllers/getTeam.js";
import protect from "../Middlewares/authMiddleware.js";
import { updateTeamMember } from "../Controllers/getTeam.js";
import { deleteTeamMember } from "../Controllers/getTeam.js";

const router = express.Router();

router.get(

"/team",

protect ,

getTeamMembers

);



router.put(

"/team/:id",

protect ,

updateTeamMember

);


router.delete(

"/team/:id",

protect ,

deleteTeamMember
);


router.get(

"/team/:id",

protect ,

getTeamMember
);




export default router;