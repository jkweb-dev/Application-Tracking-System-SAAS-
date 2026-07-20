import employerRegister from "./Routes/employer.js";
import employerLogin from "./Routes/employerLogin.js";
import jobseekerregister from "./Routes/jobseeker.js";
import jobseekerLogin from "./Routes/jobseekerLogin.js";
import verifyAuth from "./Routes/verify.js";
import employerProfile from "./Routes/employerProfile.js";
import jobs from "./Routes/jobs.js";
import changePassword from "./Routes/change-password.js";
import deleteAccount from "./Routes/delete-account.js";
import Team_Member from "./Routes/Team_Member.js";
import getTeamMember from "./Routes/getTeam.js";
import memberLogin from "./Routes/Team_MemberLogin.js";
import getAlljobs from "./Routes/AllJobs.js";
import jobSeekerProfile from "./Routes/JobSeekerProfile.js";
import ApplicationSystem from "./Routes/Application.js";
import pipeline from "./Routes/Hiring_pipeline.js";
import CandidateProfile from "./Routes/CandidateProfile.js";
import Analytics from "./Routes/Analytics.js";
import Forgot_Password from "./Routes/JobSeeker_Forgot_Password.js";
import fileRoute from "./Routes/fileController.js"


import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Configurations/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());



app.use("/employer" , employerRegister)

app.use("/employer" , employerLogin)

app.use("/jobseeker" , jobseekerregister)


app.use("/jobseeker" , jobseekerLogin)

app.use("/auth" , verifyAuth)

app.use("/employer" , employerProfile)

app.use("/jobs" , jobs)

app.use("/employer" , changePassword)

app.use("/employer" , deleteAccount)

app.use("/employer" , Team_Member)

app.use("/employer" , getTeamMember)

app.use("/team" , memberLogin)

app.use("/jobseeker" , getAlljobs)

app.use("/jobseeker" , jobSeekerProfile)

app.use("/jobseeker" , ApplicationSystem)

app.use("/employer" , pipeline)

app.use("/employer" , CandidateProfile)

app.use("/employer" , Analytics)

app.use("/jobseeker" ,Forgot_Password)

app.use("/files" ,fileRoute)









const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});