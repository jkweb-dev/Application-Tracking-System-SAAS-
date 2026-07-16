import mongoose from "mongoose";



const applicationSchema = new mongoose.Schema(

    {

        jobId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Job",

            required: true

        },



        employerId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Employer",

            required: true

        },



        jobSeekerId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "JobSeeker",

            required: true

        },



        jobSeekerProfileId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "JobSeekerProfile",

            required: true

        },



        status: {

            type: String,

            enum: [

                "Applied",

                "Under Review",

                "Shortlisted",

                "Interview",

                "Accepted",

                "Rejected"

            ],

            default: "Applied"

        }

    },

    {

        timestamps: true

    }

);




// Prevent duplicate applications

applicationSchema.index(

    {

        jobId: 1,

        jobSeekerId: 1

    },

    {

        unique: true

    }

);




 const Application =  mongoose.model(

    "Application",

    applicationSchema

);

export default Application