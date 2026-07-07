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


    phone: {

        type: String,

        required: true

    },


    location: {

        type: String,

        required: true

    },


    currentRole: {

        type: String,

        required: true

    },


    experience: {

        type: String,

        required: true

    },


    skill: {

        type: String,

        required: true

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