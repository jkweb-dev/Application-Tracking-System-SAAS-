import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(

    {

        employerId:{

            type:mongoose.Schema.Types.ObjectId,

            ref:"Employer",

            required:true

        },

        companyName:{

            type:String,

            required:true

        },

        jobTitle:{

            type:String,

            required:true,

            trim:true

        },

        department:{

            type:String,

            required:true

        },

        employmentType:{

            type:String,

            required:true
        },

        location:{

            type:String,

            required:true

        },

        workMode:{

            type:String,

            required:true

        },

        description:{

            type:String,

            required:true

        },

        requirements:{

            type:String,

            required:true

        },

        skills:[

            {

                type:String

            }

        ],

        experienceLevel:{

            type:String,

            required:true

        },

        salaryMin:{

            type:Number,

            required:true

        },

        salaryMax:{

            type:Number,

            required:true

        },

        currency:{

            type:String,

            default:"PKR"

        },

        deadline:{

            type:Date,

            required:true

        },

        vacancies:{

            type:Number,

            required:true

        },

        status:{

            type:String,

            enum:["active","paused","closed"],

            default:"active"

        }

    },

    {

        timestamps:true

    }

);

const Job =  mongoose.model("Job",jobSchema);

export default Job