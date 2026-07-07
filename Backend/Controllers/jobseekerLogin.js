import JobSeeker from "../Models/jobseeker.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const loginJobSeeker = async (req, res) => {

    try {


        const {

            email,

            password

        } = req.body;



        // Find Job Seeker

        const jobSeeker = await JobSeeker.findOne({

            email

        });



        if (!jobSeeker) {


            return res.status(400).json({

                message: "Invalid credentials"

            });


        }



        // Compare Password

        const isPasswordCorrect = await bcrypt.compare(

            password,

            jobSeeker.password

        );



        if (!isPasswordCorrect) {


            return res.status(400).json({

                message: "Invalid credentials"

            });


        }



        // Create JWT Token

        const token = jwt.sign(

            {


                id: jobSeeker._id,


                role: jobSeeker.role



            },


            process.env.JWT_SECRET,


            {


                expiresIn: "1h"


            }


        );





        res.status(200).json({


            success: true,


            message: "Login Successful",



            token,



            jobSeeker: {


                id: jobSeeker._id,


                firstName: jobSeeker.firstName,


                lastName: jobSeeker.lastName,


                email: jobSeeker.email,


                role: jobSeeker.role



            }



        });



    }



    catch(error){


        res.status(500).json({


            message:error.message


        });


    }


};



export default loginJobSeeker;