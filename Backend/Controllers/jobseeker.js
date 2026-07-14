import JobSeeker from "../Models/jobseeker.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";



const registerJobSeeker = async (req,res)=>{


    try{


        const {


            firstName,

            lastName,

            email,

            password


        } = req.body;



        // Check existing user


        const existingUser = await JobSeeker.findOne({

            email

        });



        if(existingUser){


            return res.status(400).json({

                message:

                "Job seeker already exists"

            });


        }



        // Hash Password


        const hashedPassword = await bcrypt.hash(

            password,

            10

        );



        // Create User


        const jobSeeker = await JobSeeker.create({


            firstName,

            lastName,

            email,

            password: hashedPassword


        });




        // Create JWT


        const token = jwt.sign(


        {


            id: jobSeeker._id,


            role: jobSeeker.role


        },


        process.env.JWT_SECRET,


        {


            expiresIn:"1h"


        }



        );





        res.status(201).json({


            success:true,


            message:

            "Job Seeker Registered Successfully",



            token,



            jobSeeker:{


                id:jobSeeker._id,


                firstName:jobSeeker.firstName,


                lastName:jobSeeker.lastName,


                email:jobSeeker.email,


                role:jobSeeker.role


            }



        });



    }


    catch(error){


        res.status(500).json({


            message:error.message


        });


    }



};



export default registerJobSeeker;