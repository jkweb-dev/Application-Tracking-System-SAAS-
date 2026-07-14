import mongoose from "mongoose";


const jobSeekerSchema = new mongoose.Schema(

{

    firstName: {

        type: String,

        required: true

    },


    lastName: {

        type: String,

        required: true

    },


    email: {

        type: String,

        required: true,

        unique: true

    },




    password: {

        type: String,

        required: true

    },


    role: {

        type: String,

        default: "jobseeker"

    }


},

{

    timestamps: true

}


);

const JobSeeker =  mongoose.model(

    "JobSeeker",

    jobSeekerSchema

);

export default JobSeeker