import mongoose from "mongoose";


const teamMemberSchema = new mongoose.Schema(


    {


        firstName:{


            type:String,

            required:true,

            trim:true

        },



        lastName:{


            type:String,

            required:true,

            trim:true

        },





        email:{


            type:String,

            required:true,

            unique:true,

            lowercase:true,

            trim:true

        },





        password:{


            type:String,

            required:true

        },





        role:{


            type:String,

            enum:[

                "recruiter",

                "hiring_manager"

            ],

            required:true

        },





        EmployerId:{


            type:mongoose.Schema.Types.ObjectId,

            ref:"Employer",

            required:true

        },





        isActive:{


            type:Boolean,

            default:true

        }



    },


    {

        timestamps:true

    }


);



const TeamMember = mongoose.model(

    "TeamMember",

    teamMemberSchema

);



export default TeamMember;