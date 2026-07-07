import employerRegister from "./Routes/employer.js";
import employerLogin from "./Routes/employerLogin.js";
import jobseekerregister from "./Routes/jobseeker.js";

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






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});