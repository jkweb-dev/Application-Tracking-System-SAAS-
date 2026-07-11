import TeamMember from "../Models/Team_Member.js";
import bcrypt from "bcrypt";
import Employer from "../Models/employer.js";

export const addTeamMember = async(req,res)=>{


    try{


        const employerId = req.user.id;



        const employer = await Employer.findById(employerId);



        if(!employer){


            return res.status(404).json({

                message:"Employer account not found"

            });


        }





        // Only company owner can add members

        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"You are not allowed to add team members"

            });


        }






        const {


            firstName,

            lastName,

            email,

            password,

            role


        } = req.body;







        // Required fields


        if(

            !firstName ||

            !lastName ||

            !email ||

            !password ||

            !role

        ){


            return res.status(400).json({

                message:"All fields are required"

            });


        }








        // Role check


        const allowedRoles = [

            "recruiter",

            "hiring_manager"

        ];




        if(!allowedRoles.includes(role)){


            return res.status(400).json({

                message:"Invalid team member role"

            });


        }

        const existingMember = await TeamMember.findOne({

    EmployerId: employerId,

    role: role

});

if(existingMember){

    return res.status(400).json({

        message:`A ${role.replace("_"," ")} already exists for this company`

    });

}







        // Check existing email


        const existingUser = await TeamMember.findOne({

            email

        });




        if(existingUser){


            return res.status(400).json({

                message:"Email already exists"

            });


        }








        // Hash password


        const hashedPassword = await bcrypt.hash(

            password,

            10

        );








        // Create member


        const member = await TeamMember.create({


            firstName,


            lastName,


            email,


            password:hashedPassword,


            role,


            EmployerId: employerId


        });








        return res.status(201).json({


            message:"Team member added successfully",


            member:{


                id:member._id,


                firstName:member.firstName,

                lastName:member.lastName,

                email:member.email,

                role:member.role


            }


        });





    }



    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};