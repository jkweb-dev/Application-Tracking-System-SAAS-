import TeamMember from "../Models/Team_Member.js";
import Employer from "../Models/employer.js";

export const getTeamMembers = async(req,res)=>{


    try{


        const employerId = req.user.id;




        // Make sure logged in user is employer

        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"You are not allowed to view team members"

            });


        }





        const employer = await Employer.findById(employerId);



        if(!employer){


            return res.status(404).json({

                message:"Employer account not found"

            });


        }







        const members = await TeamMember.find({

            EmployerId: employerId

        })

        .select(

            "-password"

        )

        .sort({

            createdAt:-1

        });







        return res.status(200).json({


            members


        });





    }


    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};