import mongoose from "mongoose";



const educationSchema = new mongoose.Schema(

    {

        degree: {

            type: String,

            trim: true

        },

        institute: {

            type: String,

            trim: true

        },

        field: {

            type: String,

            trim: true

        },

        startYear: {

            type: Number

        },

        endYear: {

            type: Number

        }

    },

    {

        _id: false

    }

);





const experienceSchema = new mongoose.Schema(

    {

        company: {

            type: String,

            trim: true

        },

        position: {

            type: String,

            trim: true

        },

        description: {

            type: String,

            trim: true

        },

        startDate: {

            type: Date

        },

        endDate: {

            type: Date

        }

    },

    {

        _id: false

    }

);





const resumeSchema = new mongoose.Schema(

    {

        filename: {

            type: String

        },

        originalName: {

            type: String

        },

        path : {

            type: String

        },

        uploadedAt: {

            type: Date

        }

    },

    {

        _id: false

    }

);







const jobSeekerProfileSchema = new mongoose.Schema(

    {

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "JobSeeker",

            required: true,

            unique: true

        },



        firstName: {

            type: String,

            trim: true,

            required: true

        },



        lastName: {

            type: String,

            trim: true,

            required: true

        },



        email: {

            type: String,

            trim: true,

            lowercase: true,

            required: true

        },



        phone: {

            type: String,

            trim: true,

            required: true

        },



        location: {

            type: String,

            trim: true,

            required: true

        },



        headline: {

            type: String,

            trim: true,

            required: true

        },



        bio: {

            type: String,

            trim: true,

            required: true

        },



        experienceLevel: {

            type: String,

            enum: [

                "intern",

                "junior",

                "mid",

                "senior"

            ],

            required: true

        },



        yearsOfExperience: {

            type: Number,

            required: true,

            min: 0

        },



        skills: [

            {

                type: String,

                trim: true

            }

        ],



        education: [

            educationSchema

        ],



        experience: [

            experienceSchema

        ],



        resume: resumeSchema,



        profileCompleted: {

            type: Boolean,

            default: true

        }

    },

    {

        timestamps: true

    }

);





 const JobSeekerProfile =  mongoose.model(

    "JobSeekerProfile",

    jobSeekerProfileSchema

);

export default JobSeekerProfile